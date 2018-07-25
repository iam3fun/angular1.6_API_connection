class listDriversSvc {
  constructor($q, $http, $log, listDriversModel) {
    this.$q = $q;
    this.$http = $http;
    this.$log = $log;
    this.data = listDriversModel;
  }

  /**
   * @desc Get drivers list information
   */
  getDriversList() {
    const deferred = this.$q.defer();

    this.$http.get(`http://ergast.com/api/f1/2016/driverStandings.json`).then(
      response => {
        this.dataResposnce = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        this.data.model = this.dataResposnce;
        deferred.resolve(response);
      },
      error => {
        this.$log.error(error);
      }
    );
    return deferred.promise;
  }
}

listDriversSvc.$inject = ['$q', '$http', '$log', 'listDriversModel'];

export default listDriversSvc;
