(function (window, $, _, Modernizr) {

   window.NoCircleNo = window.NoCircleNo || {};

   window.NoCircleNo.TransformRectangleView = window.NoCircleNo.SvgBackboneView.extend({

      tagName:"g",

      className:"transform-rectangle",

      initialize:function () {
         _(this).bindAll("onRotationStartDrag", "onHandleStartDrag", "onMoveEvent", "onEndEvent", "onAnimationFrame");
         this.template = window.NoCircleNo.templates.svg_transform_rectangle;
         this.transformTemplate = window.NoCircleNo.templates.svg_transform;
         this.documentEl = $(window.document);
         this.model = new window.NoCircleNo.TransformRectangleModel();
         this.model.on("change:x change:y change:rotation", this.onTransformChange, this);
         this.model.on("change:width change:height", this.onSizeChange, this);

         if(Modernizr.touch) {
            this.startEventName = "touchstart";
            this.moveEventName = "touchmove";
            this.endEventName = "touchend";
         } else {
            this.startEventName = "mousedown";
            this.moveEventName = "mousemove";
            this.endEventName = "mouseup";
         }
      },

      moveTo: function(x, y) {
         this.model.set({"x": x, "y": y});
      },

      resize: function(width, height) {
         this.model.set({"width": width, "height": height});
      },

      onTransformChange: function() {
         this.$el.attr("transform", this.transformTemplate(this.model.attributes));
      },

      onSizeChange: function() {
         this.transformRect.attr({"x": -this.model.get("halfWidth"),
            "y": -this.model.get("halfHeight"),
            "width": this.model.get("width"),
            "height": this.model.get("height")});
         this.ulScaleHandle.attr({x:-this.model.get("halfWidth") - this.model.get("halfHandleSize"),
            y: -this.model.get("halfHeight") - this.model.get("halfHandleSize")});
         this.urScaleHandle.attr({x:this.model.get("halfWidth") - this.model.get("halfHandleSize"),
            y:-this.model.get("halfHeight") - this.model.get("halfHandleSize")});
         this.llScaleHandle.attr({x:-this.model.get("halfWidth") - this.model.get("halfHandleSize"),
            y:this.model.get("halfHeight") - this.model.get("halfHandleSize")});
         this.lrScaleHandle.attr({x:this.model.get("halfWidth") - this.model.get("halfHandleSize"),
            y:this.model.get("halfHeight") - this.model.get("halfHandleSize")});
         this.rotationGroup.attr({transform:"translate(0, " + -this.model.get("halfHeight") + ")"});
      },

      onRotationStartDrag: function(e) {
         e.preventDefault();

         this.calculatePageCenterPoint();
         this.rotationHandleDrag = true;

         this.documentEl.bind(this.moveEventName, this.onMoveEvent);
         this.documentEl.bind(this.endEventName, this.onEndEvent);
      },

      onHandleStartDrag: function(e) {
         e.preventDefault();

         this.calculatePageCenterPoint();

         this.scaleHandleDrag = true;

         this.documentEl.bind(this.moveEventName, this.onMoveEvent);
         this.documentEl.bind(this.endEventName, this.onEndEvent);
      },

      onMoveEvent: function(e) {
         var pageX, pageY;

         this.pendingWidth = this.model.get("width");
         this.pendingHeight = this.model.get("height");
         this.pendingRotation = this.model.get("rotation");

         if(Modernizr.touch) {
            pageX = e.originalEvent.touches[0].pageX;
            pageY = e.originalEvent.touches[0].pageY;
         } else {
            pageX = e.pageX;
            pageY = e.pageY;
         }

         if(this.rotationHandleDrag) {
            this.calculateRectangleRotation(pageX, pageY);
         } else if(this.scaleHandleDrag) {
            this.calculateRectangleSize(pageX, pageY);
         }

         window.requestAnimationFrame(this.onAnimationFrame);
      },

      calculateRectangleRotation: function(pageX, pageY) {
         this.xDelta =  pageX - this.model.get("pageRectCenterX");
         this.yDelta =  this.model.get("pageRectCenterY") - pageY;
         this.pendingRotation = 450 - window.NoCircleNo.Conversions.degrees(Math.atan(this.yDelta/this.xDelta));

         switch(window.NoCircleNo.Conversions.getQuadrantNumber(this.xDelta, this.yDelta)) {
            case 2:
            case 3:
               this.pendingRotation += 180;
               break;
            case 4:
               this.pendingRotation += 360;
               break;
         }
      },

      calculateRectangleSize: function(pageX, pageY) {
         this.rotatedPoint = window.NoCircleNo.Conversions.rotatePointAroundOrigin(this.model.get("pageRectCenterX"), this.model.get("pageRectCenterY"), pageX, pageY, window.NoCircleNo.Conversions.radians(-this.model.get("rotation")));

         this.xDelta = Math.abs(this.model.get("pageRectCenterX") -  this.rotatedPoint.x);
         this.yDelta =  Math.abs(this.model.get("pageRectCenterY") -  this.rotatedPoint.y);

         if(this.xDelta < this.model.get("handleSize")) {
            this.xDelta = this.model.get("handleSize");
         }

         if(this.yDelta < this.model.get("handleSize")) {
            this.yDelta = this.model.get("handleSize");
         }

         this.pendingWidth = this.xDelta * 2;
         this.pendingHeight = this.yDelta * 2;

         this.scaleWidthDelta = this.pendingWidth / this.model.get("width");
         this.scaleHeightDelta = this.pendingHeight / this.model.get("height");

         if(this.scaleWidthDelta < this.scaleHeightDelta) {
            this.pendingHeight = this.model.get("height") * this.scaleWidthDelta;
         } else {
            this.pendingWidth = this.model.get("width") * this.scaleHeightDelta;
         }
      },

      onEndEvent: function(e) {
         e.preventDefault();
         this.rotationHandleDrag = false;
         this.scaleHandleDrag = false;
         this.documentEl.unbind(this.moveEventName, this.onMoveEvent);
         this.documentEl.unbind(this.endEventName, this.onEndEvent);
      },

      onAnimationFrame: function() {
         this.model.set({"width": this.pendingWidth, height:this.pendingHeight, rotation:this.pendingRotation});
         if(this.scaleHandleDrag || this.rotationHandleDrag) {
            window.requestAnimationFrame(this.onAnimationFrame);
         }
      },

      calculatePageCenterPoint: function() {

         var rotation = this.model.get("rotation");
         this.model.set("rotation", 0);

         var centerX = ( this.rotationHandle.offset().left + this.model.get("halfHandleSize"));
         var centerY = ( this.rotationHandle.offset().top + this.model.get("halfHandleSize") + Math.abs(this.model.get("rotationHandleYOffset")) + this.model.get("halfHeight"));

         this.model.set({"pageRectCenterX": centerX,
            "pageRectCenterY": centerY,
            "rotation": rotation});
      },

      bindEvents: function() {

         $(this.ulScaleHandle).bind(this.startEventName, this.onHandleStartDrag);
         $(this.urScaleHandle).bind(this.startEventName, this.onHandleStartDrag);
         $(this.llScaleHandle).bind(this.startEventName, this.onHandleStartDrag);
         $(this.lrScaleHandle).bind(this.startEventName, this.onHandleStartDrag);
         $(this.rotationHandle).bind(this.startEventName, this.onRotationStartDrag);

      },

      destroy: function() {
         this.model.destroy();
         this.model.off("change:x change:y change:rotation", this.onTransformChange);
         this.model.off("change:width change:height", this.onSizeChange);
         $(this.ulScaleHandle).unbind(this.startEventName, this.onHandleStartDrag);
         $(this.urScaleHandle).unbind(this.startEventName, this.onHandleStartDrag);
         $(this.llScaleHandle).unbind(this.startEventName, this.onHandleStartDrag);
         $(this.lrScaleHandle).unbind(this.startEventName, this.onHandleStartDrag);
         $(this.rotationHandle).unbind(this.startEventName, this.onRotationStartDrag);
      },

      render:function () {
         var svgXml = this.template(this.model.attributes);
         var svgFragment = $.parseXML(svgXml);

         // write children to svg, using backbone view root tag instead
         while(svgFragment.documentElement.childElementCount > 0) {
            this.el.appendChild(svgFragment.documentElement.childNodes[0]);
         }

         this.transformRect = this.$el.find("[class~='transform-rect']");
         this.ulScaleHandle = this.$el.find("[class~='ul-scale-handle']");
         this.urScaleHandle = this.$el.find("[class~='ur-scale-handle']");
         this.llScaleHandle = this.$el.find("[class~='ll-scale-handle']");
         this.lrScaleHandle = this.$el.find("[class~='lr-scale-handle']");
         this.rotationGroup = this.$el.find("[class~='rotation-group']");
         this.rotationHandle = this.$el.find("[class~='rotate-handle']");

         this.onSizeChange();
         this.onTransformChange();
         this.bindEvents();

         return this;
      }
   });

}(window, jQuery, _, Modernizr));
