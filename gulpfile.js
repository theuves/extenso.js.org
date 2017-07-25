"use strict";

var gulp = require("gulp");
var csso = require("gulp-csso");
var htmlmin = require("gulp-htmlmin");
var less = require("gulp-less");
var uglify = require("gulp-uglify");
var watch = require("gulp-watch");

/***/

gulp.task("html", function () {
  gulp.src("./src/index.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("./dist"));
});

gulp.task("js", function () {
  gulp.src("./src/js/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"));
});

gulp.task("css", function () {
  gulp.src("./src/css/**/*.css")
    .pipe(csso())
    .pipe(gulp.dest("./dist/css"));
});

gulp.task("minify", [
  "css",
  "html",
  "js"
]);

/***/

gulp.task("less", function () {
  gulp.src("./src/less/style.less")
    .pipe(less())
    .pipe(gulp.dest("./src/css"));
});

gulp.task("less-watch", function () {
  return watch("./src/less/**/*.less", function () {
    gulp.src("./src/less/style.less")
      .pipe(less())
      .pipe(gulp.dest("./src/css"));
  });
});

