/*global module:true window:false define:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    lint: {
      files: ['grunt.js', 'lib/*.js', 'lib/**/*.js', 'src/**/*.js', 'src/*.js']
    },
    concat: {
      dist: {
        src: ['<banner:meta.banner>',
              'deps/require.js',
              'deps/require-text.js',
              'lib/modules/utils.js',
              'lib/modules/BaseModule.js',
              'lib/modules/Module.js',
              '<file_strip_banner:lib/<%= pkg.name %>.js>'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {'window':false, 'define':true, '$':true}
    },
    uglify: {},
    mocha: {
      index: ['src/test/compat.html']
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint');
  grunt.loadNmpTasks('grunt-mocha');

};
