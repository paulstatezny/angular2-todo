(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'angular-app',
      template: '<h1>LOL hi world</h1>'
    })
    .Class({
      constructor: function() {
        console.warn('Are you sure you want to use Angular 2 instead of React?');
      }
    })
})(window.app || (window.app = {}));
