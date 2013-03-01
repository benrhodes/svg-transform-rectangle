(function (window, $, _, Backbone) {

   window.NoCircleNo =  window.NoCircleNo || {};

   window.NoCircleNo.SvgBackboneView = Backbone.View.extend({
      nameSpace: "http://www.w3.org/2000/svg",
      _ensureElement: function() {
         if (!this.el) {
            var attrs = _.extend({}, _.result(this, 'attributes'));
            if (this.id) attrs.id = _.result(this, 'id');
            if (this.className) attrs['class'] = _.result(this, 'className');
            var $el = $(window.document.createElementNS(_.result(this, 'nameSpace'), _.result(this, 'tagName'))).attr(attrs);
            this.setElement($el, false);
         } else {
            this.setElement(_.result(this, 'el'), false);
         }
      }
   });

}(window, jQuery, _, Backbone));
