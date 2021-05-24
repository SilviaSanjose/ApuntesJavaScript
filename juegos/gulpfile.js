// Dependencias
var  gulp = require('gulp'),
     concat = require('gulp-concat'),
     uglify = require('gulp-uglify');
  

// Tarea 1 llamada minify-js
gulp.task('minify-js', function () {
  gulp.src('source/*.js')
  .pipe(concat('application.js'))
  .pipe(uglify())
  .pipe(gulp.dest('build/'))
});


//gulp minify-js
