"use strict";

var gulp = require("gulp");
var watch = require("gulp-watch");
var less = require("gulp-less");
var csso = require("gulp-csso");

gulp.task("less", function () {
  gulp.src("./less/style.less")
    .pipe(less())
    .pipe(csso())
    .pipe(gulp.dest("./css/"));
});

gulp.task("less-watch", function () {
  return watch("./less/**/*.less", function () {
    gulp.src("./less/style.less")
      .pipe(less())
      .pipe(csso())
      .pipe(gulp.dest("./css/"));
  });
});
