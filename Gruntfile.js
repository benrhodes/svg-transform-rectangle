/*global module:false*/
module.exports = function (grunt) {

   'use strict';

   var browsers = [{
         browserName: "firefox",
         version: "21",
         platform: "WIN7"
      },
      {
         browserName: "chrome",
         platform: "WIN7"
      },
      {
         browserName: "internet explorer",
         platform: "WIN8",
         version: "10"
      },
      {
         browserName: "internet explorer",
         platform: "WIN7",
         version: "9"
      }];

   // Project configuration.
   grunt.initConfig({
      pkg:'<json:package.json>',
      meta:{
         banner:'/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
      },
      handlebars:{
         compile: {
            options: {
               namespace: "NoCircleNo.templates",
               processName: function(filename) {
                  return filename.split("/").pop().split(".")[0];
               }
            },
            files: {
               "app/scripts/templates.js": "app/templates/*.handlebars"
            }
         }
      },
      qunit:{
         options: {
            timeout: 5000
         },
         all: ['app/tests/*.html']
      },
      open : {
         test : {
            path: 'http://localhost:8080/index.html'
         }
      },
      connect: {
         test: {
            options: {
               port: 8080,
               base: 'app',
               keepalive: true
            }
         }
      },
      'saucelabs-qunit': {
         all: {
            options: {
               urls: ["http://localhost:8080/tests/conversions-test.html"],
               tunnelTimeout: 5,
               build: process.env.TRAVIS_JOB_ID,
               concurrency: 3,
               browsers: browsers,
               testname: "SVG Rectangle Tests",
               tags: ["master"]
            }
         }
      },
      watch: {}
   });

   // Loading dependencies
   for (var key in grunt.file.readJSON("package.json").devDependencies) {
      if (key !== "grunt" && key.indexOf("grunt") === 0) grunt.loadNpmTasks(key);
   }

   // test server tasks
   grunt.registerTask('localhost', ['open:test', 'connect:test']);
   grunt.registerTask("test", ["connect", "saucelabs-qunit"]);

   // Travis CI task.
   grunt.registerTask('travis', 'qunit');
};