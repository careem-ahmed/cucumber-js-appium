'use strict';

var path = require('path');

module.exports = function(grunt) {

  grunt.initConfig({

    env: {
      chrome: {
        PLATFORM: 'CHROME'
      },
      firefox: {
        PLATFORM: 'FIREFOX'
      },
      android: {
        PLATFORM: 'ANDROID'
      },
      ios:{
        PLATFORM: 'IOS'
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'features/step_definitions/*.js', 'features/support/*.js'],
      options: {
        node: true,
        strict: true,
        globalstrict: true
      }
    },

    exec: {
      run_cucumber_tests: {
        command: 'node ' + path.join('node_modules', 'cucumber',  'bin', 'cucumber.js -f json:reporter/cucumber_reporter.json -t ~@ignore')
      },

      run_cucuber_report:{
        command: 'node ' + path.join('reporter.js')
      }


    }

    

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-env');

  grunt.registerTask('default', ['jshint', 'exec']);
  grunt.registerTask('chrome', ['env:chrome', 'jshint', 'exec']);
  grunt.registerTask('firefox', ['env:firefox', 'jshint', 'exec']);
  grunt.registerTask('android', ['env:android', 'jshint', 'exec']);
  grunt.registerTask('ios', ['env:ios', 'jshint', 'exec']);

};
