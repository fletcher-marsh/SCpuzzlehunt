
// Declare app level module which depends on views, and components
var app = angular.module('app', [
  'ngRoute',
  'angular-blocks',
  'ui.materialize'
]);

app.controller("landing_ctl", landing_ctl);
app.controller("appetizer_ctl", appetizer_ctl);
app.controller("entree_ctl", entree_ctl);
app.controller("check_ctl", check_ctl);

app.config(function($routeProvider) {
	$routeProvider.when("/", {
      templateUrl: "html/landing.html",
      controller: "landing_ctl"
  });
  $routeProvider.when("/appetizer", {
      templateUrl: "html/appetizer.html",
      controller: "appetizer_ctl"
  });
  $routeProvider.when("/check", {
      templateUrl: "html/check.html",
      controller: "check_ctl"
  });
  $routeProvider.when("/entree", {
      templateUrl: "html/entree.html",
      controller: "entree_ctl"
  }).otherwise({ redirectTo: '/'});

});