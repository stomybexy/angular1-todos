module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
      'app/components/**/*.spec.js'
    ],
    autoWatch: true,

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ]
  });
};
