var gulp = require('gulp');
var browserSync = require('browser-sync');
// var reload = browserSync.reload;

gulp.task('default', ['serve']);

gulp.task('serve', function() {
  browserSync.init({
    server: './'
  });
});
