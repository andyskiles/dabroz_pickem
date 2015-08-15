angular.module('pickem', [
  'angular-meteor',
  'ui.router',
  'autocomplete'
]);

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});