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
                        './index.js:c11hash'
                    ]
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/c11-hash.min.js': ['dist/c11-hash.js']
                }
            }
        }
    });
}
