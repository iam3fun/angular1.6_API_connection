class listDriversCtrl {
  constructor($q, $log, listDriversSvc) {
    this.$q = $q;
    this.$log = $log;
    this.listDriversSvc = listDriversSvc;

    this.data = {};

    this.init();
  }

  init() {
    this.$q.all([
      this.listDriversSvc.getDriversList()
    ]).then(
      response => {
        this.data = this.listDriversSvc.data.model;
        this.$log(response);
      },
      error => {
        this.$log(error);
      }
    )
  }
}

listDriversCtrl.$inject = ['$q', '$log', 'listDriversSvc'];

export default listDriversCtrl;
