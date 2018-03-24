var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
     server: {
       baseDir: "app"
      }
  });
   watch('./app/index.html', function() {
     browserSync.reload();
     gulp.start('html')
     })

   watch('./app/assets/styles/**/*.css', function() {

      gulp.start('cssInject')});
});

gulp.task('html', function() {
    console.log("Imagine the browser reloads automatically");
});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

