/*global module:false*/
// This is a wrapper function to encapsulate the Grunt config
module.exports = function(grunt) {

  // Initializes the project configuration
  grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),

    jshint: {
      myFiles: ['test/**/*.js']
    },

    simplemocha: {
      options: {
        timeout: 3000,
        ignoreLeaks: false,
        reporter: 'tap'
      },

      all: { src: ['test/**/*.js'] }
    }
  });

  // For this to work, you need to have run `npm install grunt-simple-mocha`
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Add a default task. This is optional, of course :)
  grunt.registerTask('default', ['simplemocha', 'jshint']);

};
