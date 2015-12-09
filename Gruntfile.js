module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
	eslint: {
		target: ['*.js', 'public/js/main.js']
    },
    jshint: {
		target: ['Gruntfile.js', 'public/**/*.js']
	}
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['eslint', 'jshint']);

};