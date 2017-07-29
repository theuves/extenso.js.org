"use strict";

var gulp = require("gulp");

// Gulp...
var csso = require("gulp-csso");
var htmlmin = require("gulp-htmlmin");
var less = require("gulp-less");
var uglify = require("gulp-uglify");
var watch = require("gulp-watch");

// Compilar LESS em CSS.
// =====================

gulp.task("less", function () {
  return gulp.src("./src/less/style.less")
    .pipe(less())
    .pipe(gulp.dest("./src/css/"));
});

gulp.task("watch", function () {
  return watch("./src/less/**/*.less", function () {
    gulp.src("./src/less/style.less")
      .pipe(less())
      .pipe(gulp.dest("./src/css/"));
  });
});

// Minificar HTML, CSS e JavaScript.
// =================================

// HTML.
gulp.task("html", function () {
  return gulp.src("./src/index.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("./dist/"));
});

// CSS.
gulp.task("css", [
    "less"
  ], function () {
  return gulp.src("./src/css/**/*.css")
    .pipe(csso())
    .pipe(gulp.dest("./dist/css/"));
});

// JavaScript.
gulp.task("js", function () {
  return gulp.src("./src/js/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js/"));
});

// Minifica.
gulp.task("minify", [
  "html",
  "css",
  "js"
]);

// Copiar componentes Bower no "dist".
// ===================================

gulp.task("bower", function () {
  return gulp.src("./src/bower_components/**/*")
    .pipe(gulp.dest("./dist/bower_components/"));
});

// Copiar CNAME no "dist".
// =======================

gulp.task("cname", function () {
  return gulp.src("./CNAME")
    .pipe(gulp.dest("./dist/"));
});

// Construção.
// ===========

gulp.task("default", [
  "minify",
  "bower",
  "cname"
]);
