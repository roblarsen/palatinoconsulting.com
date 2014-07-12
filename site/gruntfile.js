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
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [
          {
            expand: true,
            // cwd is "current working directory"
            cwd: "pub/img/",
            src: ["**/*.png"],
            dest: "pub/img/",
            ext: ".png"
          }
        ]
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [
          {
            expand: true,
            cwd: "pub/img/",
            src: ["**/*.jpg"],
            dest: "pub/img/",
            ext: ".jpg"
          }
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
  grunt.loadNpmTasks("grunt-contrib-imagemin");
  grunt.loadNpmTasks("grunt-hashres");
  grunt.loadNpmTasks("grunt-replace");
  grunt.registerTask("default", [ "sync" ,"concat" ,"cssmin", "imagemin","hashres"]);
};