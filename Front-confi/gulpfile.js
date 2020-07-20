'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

//script paths
var jsFiles = ['./js/util/*.js', './js/comp/*.js'],
    jsDest = './js';

gulp.task('scripts', function () {

    return gulp.src(jsFiles)
        .pipe(concat('lp-main.min.js'))
        .pipe(uglify({ mangle: false }).on('error', function (e) {
            console.log('Error uglify: ' + e);
        }))
        .pipe(gulp.dest(jsDest));
});

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'))
});

gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', gulp.parallel('sass'));
    gulp.watch(['./js/util/*.js', './js/comp/*.js'], gulp.parallel('scripts'));
});

gulp.task('default', gulp.parallel('watch'));
