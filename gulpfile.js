var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var historyApiFallback = require('connect-history-api-fallback');
var Server = require('karma').Server;
var path = require('path');
var child_process = require('child_process');


// Static Server + watching scss/html files
gulp.task('serve', function() {

  browserSync.init({
    server: ".",
    middleware: [historyApiFallback()]
  });

  // gulp.watch("app/scss/*.scss", ['sass']);
  gulp.watch("app/components/**/*.js").on('change', reload);
  gulp.watch("app/components/**/*.html").on('change', reload);
  gulp.watch("app/components/**/*.css").on('change', reload);
  gulp.watch("*.html").on('change', reload);
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function(done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

function getProtractorBinary(binaryName) {
  var pkgPath = require.resolve('protractor');
  var protractorDir = path.resolve(path.join(path.dirname(pkgPath), '..', 'bin'));
  return path.join(protractorDir, binaryName);

}

gulp.task('protractor-install', function(done) {
  child_process.spawn('node', [getProtractorBinary('webdriver-manager'),
    'update'
  ], {
    stdio: 'inherit'
  }).once('close', done);
});

gulp.task('protractor', ['protractor-install'], function(done) {
  // var argv = process.argv.slice(3); // forward args to protractor
  child_process.spawn('node', [getProtractorBinary('protractor'),
    'protractor.conf.js'
  ], {
    stdio: 'inherit'
  }).once('close', done);
});


gulp.task('default', ['tdd', 'serve']);
