angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('landing', {
      url: '',
      component: 'app'
    })
    .state('landing.home', {
      url: '/',
      component: 'home'
    })
    .state('landing.frames', {
      url: '/frames',
      component: 'frames'
    })
    .state('landing.events', {
      url: '/events',
      component: 'events'
    })

    .state('landing.passion', {
      url: '/passion/:handle',
      component: 'community'
    })

    .state('landing.help', {
      url: '/how-do-you-help-us',
      component: 'help'
    })
    .state('landing.join', {
      url: '/join',
      component: 'join'
    });
}
