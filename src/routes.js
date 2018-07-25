export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('list-drivers', {
      url: '/',
      templateUrl: 'src/app/list_drivers/template.html',
      controller: 'ListDriversController',
      controllerAs: 'ctrl'
    });
}
