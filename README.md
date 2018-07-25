SVG Transform Rectangle [![Build Status](https://travis-ci.org/benrhodes/svg-transform-rectangle.png)](https://travis-ci.org/benrhodes/svg-transform-rectangle) [![Selenium Test Status](https://saucelabs.com/browser-matrix/nocircleno-osp1.svg)](https://saucelabs.com/u/nocircleno-osp1)
=======================

A transform rectangle to use in a your JavaScript application.

Features
-----------------------

* Scale rectangle with the 4 corner handles.  Scaling is currently limited to proportional.
* Rotate rectangle with top rotation handle.
* Integrate easy into a Backbone JS application.

Dependencies
-----------------------

* [jQuery](http://jquery.com/ "jQuery")
* [Underscore JS](http://underscorejs.org/ "Underscore JS")
* [Backbone JS](http://backbonejs.org/ "Backbone JS")
* [Handlebars JS](http://handlebarsjs.com/ "Handlebars JS")
* [Request Animation Frame Shim](http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating "Request Animation Frame Shim")

Templates
-----------------------

The Handlebar templates are currently compiled using [Grunt JS](http://gruntjs.com/ "Grunt JS").  Grunt is not required unless you need to recompile the templates.


Release History
-----------------------

* 0.2.0 - Selection Rectangle now works on touch screens.  The code will automatically use touch events when available.
* 0.1.1 - Changed rectangle handle events to bind to the document element.  Removed node_modules from repo.  Run npm install if you want to use Grunt.
* 0.1.0 - Initial release.
