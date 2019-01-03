const gulp = require('gulp')
const sass = require('gulp-sass')
const ejs = require('gulp-ejs')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const htmlmin = require('gulp-htmlmin')
const imagemin = require('gulp-imagemin')

sass.compiler = require('node-sass')

gulp.task('js', () => {
  const src = [
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/popper.js/dist/umd/popper.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.min.js'
  ]

  return gulp.src(src)
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('css', () => {
  return gulp.src('./src/styles/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('css:watch', () => {
  const globs = [ './src/**/*.scss' ]
  const tasks = gulp.parallel('css')

  gulp.watch(globs, tasks)
})

gulp.task('html', () => {
  const appConfig = require('./config.json')

  return gulp.src('./src/index.ejs')
    .pipe(ejs(appConfig))
    .pipe(htmlmin())
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('html:watch', () => {
  const globs = [ './config.json', './src/**/*.ejs' ] 
  const tasks = gulp.parallel('html')

  gulp.watch(globs, tasks)
})

gulp.task('image', () => {
  return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
})