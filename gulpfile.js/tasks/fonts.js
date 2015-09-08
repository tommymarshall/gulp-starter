var browserSync = require('browser-sync')
var changed     = require('gulp-changed')
var config      = require('../config/fonts')
var gulp        = require('gulp')

var settings = {
  src: config.src.root + '/fonts/**/*',
  dest: config.dest.root + '/' + config.dest.fonts
}

gulp.task('fonts', function() {
  return gulp.src(settings.src)
    .pipe(changed(settings.dest)) // Ignore unchanged files
    .pipe(gulp.dest(settings.dest))
    .pipe(browserSync.reload({stream:true}))
})
