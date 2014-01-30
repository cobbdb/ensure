module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                curly: true,
                eqeqeq: false,
                indent: 4,
                noarg: true,
                nonew: false,
                plusplus: true,
                quotmark: false,
                trailing: true
            },
            default: {
                src: [
                    'ensure.js'
                ]
            }
        },
        watch: {
            scripts: {
                files: [
                    'ensure.js'
                ],
                tasks: [
                    'default'
                ]
            }
        },
        uglify: {
            build: {
                files: {
                    'ensure.min.js': [
                        'ensure.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', [
        'jshint',
        'uglify'
    ]);
};
