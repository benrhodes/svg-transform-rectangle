(function(window) {

   window.NoCircleNo = window.NoCircleNo || {};

   window.NoCircleNo.Conversions = (function () {

      "use strict";

      return {
         radians:function (degrees) {
            return degrees * Math.PI / 180;
         },

         degrees:function (radians) {
            return radians * 180 / Math.PI;
         },

         getQuadrantNumber:function(x, y) {
            if(x >= 0 && y >= 0) {
               return 1;
            } else if(x < 0 && y >= 0) {
               return 2;
            } else if(x < 0 && y < 0) {
               return 3;
            } else {
               return 4;
            }
         },

         rotatePointAroundOrigin:function(originX, originY, x, y, angleInRadians) {
            var sin = Math.sin(angleInRadians);
            var cos = Math.cos(angleInRadians);
            var newX = originX + ( cos * (x - originX) - sin * (y - originY) );
            var newY = originY + ( sin * (x - originX) + cos * (y - originY) );
            return {x:newX, y:newY};
         }
      };
   }());

}(window));