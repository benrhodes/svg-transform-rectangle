/*global module:false*/
module.exports = function (grunt) {

   'use strict';

   var browsers = [{
         browserName: "firefox",
         version: "23",
         platform: "Windows 7"
      },
      {
         browserName: "chrome",
         platform: "Windows 7"
      },
      {
         browserName: "internet explorer",
         platform: "Windows 7",
         version: "9"
      },
      {
         browserName: "internet explorer",
         platform: "Windows 8",
         version: "10"
      },
      {
         browserName: "firefox",
         platform: "Windows 8",
         version: "23"
      },
      {
         browserName: "chrome",
         platform: "Windows 8"
      },
      {
         browserName: 'chrome',
         platform:'OS X 10.8'
      },
      {
         browserName: 'safari',
         platform:'OS X 10.8',
         version: '6'
      },
      {
         browserName: 'iphone',
         platform:'OS X 10.8',
         version: '6'
      },
      {
         browserName: 'iphone',
         platform:'OS X 10.8',
         version: '6'
      },
      {
         browserName: 'ipad',
         platform:'OS X 10.8',
         version: '6'
      }
   ];

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
               base: 'app'
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
               testname: "SVG Transform Rectangle",
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
   grunt.registerTask("test", ["connect:test", "saucelabs-qunit"]);

   // Travis CI task.
   grunt.registerTask('travis', 'test');
};