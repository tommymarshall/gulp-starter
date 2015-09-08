var config  = require('../config/deploy')
var ghPages = require('gulp-gh-pages')
var gulp    = require('gulp')
var open    = require('open')
var os      = require('os')
var package = require('../../package.json')
var path    = require('path')

var settings = {
  url: package.website,
  src: config.dest.root + '/**/*',
  ghPages: {
    cacheDir: path.join(os.tmpdir(), package.name)
  }
}

gulp.task('deploy', ['build:production'], function() {
  return gulp.src(settings.src)
    .pipe(ghPages(settings.ghPages))
    .on('end', function(){
      open(settings.url)
    })
})
