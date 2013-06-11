this["NoCircleNo"] = this["NoCircleNo"] || {};
this["NoCircleNo"]["templates"] = this["NoCircleNo"]["templates"] || {};

this["NoCircleNo"]["templates"]["svg_transform"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "translate(";
  if (stack1 = helpers['x']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['x']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ",";
  if (stack1 = helpers['y']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['y']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ") scale(";
  if (stack1 = helpers.scale) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.scale; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ") rotate(";
  if (stack1 = helpers.rotation) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rotation; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ")";
  return buffer;
  });

this["NoCircleNo"]["templates"]["svg_transform_rectangle"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<g xmlns=\"http://www.w3.org/2000/svg\">\r\n	<rect class=\"transform-rect\" x=\"0\" y=\"0\" fill=\"none\" stroke=\"";
  if (stack1 = helpers.strokeColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.strokeColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" stroke-width=\"";
  if (stack1 = helpers.strokeSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.strokeSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" stroke-miterlimit=\"";
  if (stack1 = helpers.strokeSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.strokeSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" width=\"200\" height=\"200\"/>\r\n	<rect class=\"ul-scale-handle\" x=\"-15\" y=\"-15\" fill=\"";
  if (stack1 = helpers.fillColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fillColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" stroke=\"";
  if (stack1 = helpers.strokeColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.strokeColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" stroke-width=\"";
  if (stack1 = helpers.strokeSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.strokeSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" stroke-miterlimit=\"";
  if (stack1 = helpers.strokeSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.strokeSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" width=\"";
  if (stack1 = helpers.handleSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.handleSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" height=\"";
  if (stack1 = helpers.handleSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.handleSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\r\n	<rect class=\"ur-scale-handle\" x=\"185\" y=\"-15\" fill=\"";
  if (stack1 = helpers.fillColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fillColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" stroke=\"";
  if (stack1 = helpers.strokeColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.strokeColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" stroke-width=\"";
  if (stack1 = helpers.strokeSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.strokeSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" stroke-miterlimit=\"";
  if (stack1 = helpers.strokeSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.strokeSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" width=\"";
  if (stack1 = helpers.handleSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.handleSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" height=\"";
  if (stack1 = helpers.handleSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.handleSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\r\n	<rect class=\"ll-scale-handle\" x=\"-15\" y=\"185\" fill=\"";
  if (stack1 = helpers.fillColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fillColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" stroke=\"";
  if (stack1 = helpers.strokeColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.strokeColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" stroke-width=\"";
  if (stack1 = helpers.strokeSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.strokeSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" stroke-miterlimit=\"";
  if (stack1 = helpers.strokeSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.strokeSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" width=\"";
  if (stack1 = helpers.handleSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.handleSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" height=\"";
  if (stack1 = helpers.handleSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.handleSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\r\n	<rect class=\"lr-scale-handle\" x=\"185\" y=\"185\" fill=\"";
  if (stack1 = helpers.fillColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fillColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" stroke=\"";
  if (stack1 = helpers.strokeColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.strokeColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" stroke-width=\"";
  if (stack1 = helpers.strokeSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.strokeSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" stroke-miterlimit=\"";
  if (stack1 = helpers.strokeSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.strokeSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" width=\"";
  if (stack1 = helpers.handleSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.handleSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" height=\"";
  if (stack1 = helpers.handleSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.handleSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\r\n	<g class=\"rotation-group\">\r\n		<circle class=\"rotate-handle\" fill=\"";
  if (stack1 = helpers.fillColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fillColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" stroke=\"";
  if (stack1 = helpers.strokeColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.strokeColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" stroke-width=\"";
  if (stack1 = helpers.strokeSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.strokeSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" stroke-miterlimit=\"";
  if (stack1 = helpers.strokeSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.strokeSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" cx=\"0\" cy=\"";
  if (stack1 = helpers.rotationHandleYOffset) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rotationHandleYOffset; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" r=\"";
  if (stack1 = helpers.rotationHandleRadius) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rotationHandleRadius; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\r\n		<line fill=\"none\" stroke=\"";
  if (stack1 = helpers.strokeColor) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.strokeColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" stroke-width=\"";
  if (stack1 = helpers.strokeSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.strokeSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" stroke-miterlimit=\"";
  if (stack1 = helpers.strokeSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.strokeSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" x1=\"0\" y1=\"-40\" x2=\"0\" y2=\"0\"/>\r\n	</g>\r\n</g>";
  return buffer;
  });