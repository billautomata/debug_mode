module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-standard')

  grunt.registerTask('default', 'watch')

  grunt.initConfig({
    //
    browserify: {
      main: {
        src: './src/index.js',
        dest: './build/bundle.js',
        files: {
          './build/bundle.js': ['./src/*.js' ]
        },
        options: {
          transform: ['brfs'],
          browserifyOptions: {
            debug: true
          }
        }
      }
    },

    // standard linting
    standard: {
      app: {
        options: {
          format: true,
          lint: true
        },
        src: [
          './src/*.js', './tests/*.js'
        ]
      }
    },
    //
    watch: {
      everything: {
        files: [ './src/*.js', './*.js', './tests/*.js' ],
        tasks: [ 'standard:app', 'browserify:main' ],
        options: {
          livereload: {
            port: 35729
          }
        }
      }
    }

  })

}
