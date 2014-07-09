module.exports = function(grunt) {
  // Do grunt-related things in here
	grunt.initConfig({
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['js/bus-index.min.20131231.js', 'js/navigator.js', 'js/playedshow.js', 'js/suggestion.js','js/main.js'],
                dest: 'js/built.js',
            },
        },

        less: {
            src: ["less/*.less"],
            common: {
                options: {
                    paths: ["less"]
                },
                files: {
                    "css/common.css":"less/common.less",
                    "css/index_header.css":"less/index_header.less",
                    "css/list.css":"less/list.less",
                    "css/video.css":"less/video.less",
                    "css/index.css":"less/index.less"
                },
            },
        },

	    uglify: {
            my_target: {
                files: {
                    'js/built.min.js': ['js/built.js']
                }
            }
        },

        watch: {
            less: {
                files:['less/*.less'],
                tasks:['less'],
                options: {
                    spawn: false,
                }
            }
        }

	});


	 // 加载包含 "uglify" 任务的插件。
  	grunt.loadNpmTasks('grunt-contrib-concat');
  	grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.loadNpmTasks('grunt-contrib-less');
  	grunt.loadNpmTasks('grunt-contrib-watch');

  	// 默认被执行的任务列表。
  	grunt.registerTask('default', ['concat,uglify']);
};
