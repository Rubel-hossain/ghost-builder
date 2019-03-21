'use strict';

var gulp = require('gulp');
var sass  = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function () {
     gulp.src('./assets/scss/style.scss')
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./assets/css'));
});


var concat = require('gulp-concat');
 
gulp.task('scripts', function() {
  return gulp.src('./assets/js/*.js')
    .pipe(concat('themeix.min.js'))
    .pipe(gulp.dest('./dist/js'));
});

// Watch Task
gulp.task('watch', function() {
     gulp.watch('./assets/scss/**/*.scss', gulp.series('sass'));
  });
