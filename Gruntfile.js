module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['browserify', 'uglify']);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            main: {
                src: [],
                dest: 'dist/c11-hash.js',
                options: {
                    require: [
                        './index.js:xc1hash'
                    ]
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/xc1-hash.min.js': ['dist/xc1-hash.js']
                }
            }
        }
    });
}
