const { RESTDataSource } = require('apollo-datasource-rest');

class RadarrAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.RADARR_URL
  }
  
  willSendRequest(request) {
    request.headers.set('X-Api-Key', process.env.RADARR_API_KEY);
    request.headers.set('cookie', 'cloudark_password=mantaRAID')
  }

  async getMovies() {
    return this.get('movie');
  }
}

module.exports = RadarrAPI