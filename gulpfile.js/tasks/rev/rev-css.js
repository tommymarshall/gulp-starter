var config = require('../../config');
var filter = require('gulp-filter');
var gulp   = require('gulp');
var minify = require('gulp-minify-css');
var rev    = require('gulp-rev');
var uglify = require('gulp-uglify');

// 4) Rev and compress CSS and JS files (this is done after assets, so that if a
//    referenced asset hash changes, the parent hash will change as well
gulp.task('rev-css', function(){
  return gulp.src(config.dest.root + '/**/*.css')
    .pipe(rev())
    .pipe(minify())
    .pipe(gulp.dest(config.dest.root))
    .pipe(rev.manifest(config.dest.root.substr(2) + '/rev-manifest.json', {merge: true}))
    .pipe(gulp.dest(''));
});
