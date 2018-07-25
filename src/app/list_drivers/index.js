import listDriversSvc from './listDrivers.Svc';
import listDriversModel from './listDrivers.Model';
import listDriversCtrl from './listDrivers.Ctrl';

const listDrivers = angular.module('listDrivers', [

]);

listDrivers
  .controller('ListDriversController', listDriversCtrl)
  .service('listDriversSvc', listDriversSvc)
  .service('listDriversModel', listDriversModel);

export default listDrivers;
