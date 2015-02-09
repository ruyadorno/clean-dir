'use strict';
module.exports = function (grunt) {
  // Show elapsed time at the end
  require('time-grunt')(grunt);
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      gruntfile: {
        src: ['Gruntfile.js']
      },
      js: {
        src: ['*.js']
      },
      test: {
        src: ['test/**/*.js']
      }
    },
    mochacli: {
      options: {
        reporter: 'spec',
        bail: true
      },
      all: ['test/*.js']
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      js: {
        files: '<%= jshint.js.src %>',
        tasks: ['jshint:js', 'mochacli']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'mochacli']
      }
    },
    sg_release: {
      options: {
        skipBowerInstall: true,
        developBranch: 'develop',
        masterBranch: 'master',
        files: [
          'package.json'
        ],
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['-a'], // '-a' for all files
        pushTo: 'origin'
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'mochacli']);

  grunt.registerTask('release', ['test', 'sg_release']);

  grunt.registerTask('default', ['menu']);
};
