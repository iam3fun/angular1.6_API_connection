import angular from 'angular';
import 'angular-ui-router';

import listDrivers from './app/list_drivers/index.js';

import routesConfig from './routes.js';

const formulaone = angular.module('network', [
  'ui.router',
  listDrivers.name
]);

// formulaone.config(router(formulaone, futureRoutes));
formulaone.config(routesConfig);

// Setting HTML5 Location Mode
formulaone.config(['$locationProvider', '$httpProvider', '$qProvider',
  ($locationProvider, $httpProvider, $qProvider) => {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    }).hashPrefix('!');

    $httpProvider.useApplyAsync(true);

    $qProvider.errorOnUnhandledRejections(false);
  }
]);

angular.element(document).ready(() => {

  // Fixing facebook bug with redirect
  if (window.history && window.history.pushState) {
    window.history.pushState('', document.title, window.location.pathname);
  } else {
    // Prevent scrolling by storing the page's current scroll offset
    const scroll = {
      top: document.body.scrollTop,
      left: document.body.scrollLeft
    };
    window.location.hash = '';
    // Restore the scroll offset, should be flicker free
    document.body.scrollTop = scroll.top;
    document.body.scrollLeft = scroll.left;
  }

  // Then init the app
  return angular.bootstrap(document, [formulaone.name]);
});

export {formulaone};
