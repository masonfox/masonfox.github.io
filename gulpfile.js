'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var postcss = require('gulp-postcss');
var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: './',
        host: 'localhost',
        browser: 'google chrome' // for now
    });

    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('js/*.js').on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src('./scss/**/*.scss')
        // .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

gulp.task('js', function(){
    return gulp.src('./js/*.js')
        .pipe(concat('concat.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/min'));
});

// register main task
gulp.task('default', ['serve']);
