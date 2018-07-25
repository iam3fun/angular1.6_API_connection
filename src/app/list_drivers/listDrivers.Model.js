class listDriversModel {
  constructor() {
    this.model = {
      driver: {
        code: '',
        dateOfBirth: '',
        driverId: '',
        familyName: '',
        givenName: '',
        nationality: '',
        permanentNumber: '',
        url: ''
      },
      points: '',
      position: '',
      positionText: '',
      wins: ''
    };
  }
}

export default listDriversModel;
