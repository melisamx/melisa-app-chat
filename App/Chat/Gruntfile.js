module.exports = function(grunt) {
    
    grunt.initConfig({
        main: {
            appName: 'Chat',
            src: 'resources/assets/',
            output: '../../public/<%= main.appName.toLowerCase() %>/',
            proyect: {
                name: 'Melisa Chat',
                version: '1.0.0',
                company: 'Melisa Company'
            }
        },
        less: {
            options: {
                compress: true
            },
            all: {
                files: {
//                    '<%= main.output %>css/app.css': '<%= main.src %>less/app.less',
                    '<%= main.output %>css/programaciones-phone.css': '<%= main.src %>less/programaciones-phone.less',
                    '<%= main.output %>css/tarjas-phone.css': '<%= main.src %>less/tarjas-phone.less'
                }
            }
        },
        watch: {
            files: ['<%= main.src %>less/**/*.less'],
            tasks: ['less']
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', [
        'watch'
    ]);
    
};
