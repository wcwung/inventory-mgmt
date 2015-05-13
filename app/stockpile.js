
var app = angular.module('stockpile', [
    'stockpile.services',
    'stockpile.inventory',
    'ui.router',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('stockpile');
  }]);
