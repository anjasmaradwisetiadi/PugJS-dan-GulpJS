var gulp = require('gulp');
var gulpConnect = require('gulp-connect');
var pug = require('gulp-pug');




gulp.task('server', function buildHTML() {
  return gulp.src('public/*.pug')
    .pipe(pug({
      pretty: true
      // Your options in here.
    }))
    .pipe(gulp.dest('temp/'))
    .pipe(pug.reload());

});

gulp.task('server', async function () {
  gulpConnect.server({
    root: "temp",
    livereload: true
  });
});

const {
  watch
} = require('gulp');

gulp.task('watch', async function () {
  gulp.watch('public/*.pug'), gulp.series('server');
  gulp.watch('temp/*.html'), gulp.series('server');
});

gulp.task('default', gulp.series('watch', 'server'));