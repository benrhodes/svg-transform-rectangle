/*global module:false*/
module.exports = function (grunt) {

   'use strict';

   grunt.loadNpmTasks('grunt-contrib-handlebars');
   grunt.loadNpmTasks('grunt-contrib-connect');
   grunt.loadNpmTasks('grunt-open');
   grunt.loadNpmTasks('grunt-contrib-qunit');

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
      }
   });

   // test server tasks
   grunt.registerTask('localhost', ['open:test', 'connect:test']);

   // Travis CI task.
   grunt.registerTask('travis', 'qunit');
};