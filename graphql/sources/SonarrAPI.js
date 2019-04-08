const { RESTDataSource } = require('apollo-datasource-rest');

class SonarrAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.SONARR_URL
  }
  
  willSendRequest(request) {
    request.headers.set('X-Api-Key', process.env.SONARR_API_KEY);
    request.headers.set('cookie', 'cloudark_password=mantaRAID')
  }

  async getSeries() {
    return this.get('series');
  }
}

module.exports = SonarrAPI