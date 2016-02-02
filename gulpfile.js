'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('stylesheets', function () {
  return gulp.src('app/stylesheets/*.css')
    .pipe(gulp.dest('dist/stylesheets'));
});

gulp.task('javascripts', function () {
  return gulp.src('app/javascripts/*.js')
    .pipe(gulp.dest('dist/javascripts'));
});

//JSHINT
// gulp.task('jshint', function () {
//   return gulp.src('app/javascripts/*.js')
//     .pipe($.jshint())
//     .pipe($.jshint.reporter('jshint-stylish'))
//     .pipe($.jshint.reporter('fail'));
// });

gulp.task('html', ['stylesheets', 'javascripts'], function () {
  return gulp.src('app/*.html')
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.csso()))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', function () {
  return gulp.src('app/images/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', function () {
  return gulp.src('app/fonts/*')
    .pipe($.filter('*.{eot,svg,ttf,woff}'))
    .pipe($.flatten())
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('extras', function () {
  return gulp.src(['app/*.*', '!app/*.html'], {dot: true})
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', require('del').bind(null, ['dist']));

gulp.task('build', ['html', 'stylesheets', 'javascripts', 'images', 'fonts', 'extras'], function () {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
