module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat:{
      dist: {
        src: ["src/css/normalize.css", "src/css/main.css", "src/css/mqs.css"],
        dest: "pub/css/main.css"
      }
    },
    cssmin: {
      files: {
       "pub/css/main.css" : ["pub/css/main.css"] 
      }
    },
    sync: {
      target: {
        files: [
          { expand: true, cwd:"src/", src: ["*.html", "*.php","*.ico", "img/**/*"], dest: "pub/", filter: "isFile" }
        ]
      }
    },
    hashres: {
      options: {
        encoding: "utf8"
      },
      prod: {
        src: [
          "pub/css/main.css"
        ],
        dest: ["pub/index.html","pub/about.html","pub/contact.html","pub/contactthanks.php"]
      }
    }
  });
  grunt.loadNpmTasks("grunt-mkdir");
  grunt.loadNpmTasks("grunt-sync");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-hashres");
  grunt.loadNpmTasks("grunt-replace");
  grunt.registerTask("default", [ "sync" ,"concat" ,"cssmin", "hashres"]);
};
