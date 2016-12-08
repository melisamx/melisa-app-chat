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
                    '<%= main.output %>css/chat-phone.css': '<%= main.src %>less/chat-phone.less'
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
