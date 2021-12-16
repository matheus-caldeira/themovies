import api from './api';

class Tvs {

  static async getDetails(tv_id) {
    const { data } = await api.get(`/tv/${tv_id}`, {
      params: {
        append_to_response: 'account_states'
      }
    });

    return data;
  }

  static async getTopRated(page = 1) {
    const { data } = await api.get('/tv/top_rated', {
      params: {
        page
      }
    });

    return data;
  }

  static async getPopular(page = 1) {
    const { data } = await api.get('/tv/popular', {
      params: {
        page
      }
    });

    return data;
  }

  static async getNowPlaying(page = 1) {
    const { data } = await api.get('/tv/on_the_air', {
      params: {
        page
      }
    });

    return data;
  }
}

export default Tvs;