import api from './api';

class Movies {

  static async getDetails(movie_id) {
    const { data } = await api.get(`/movie/${movie_id}`, {
      params: {
        append_to_response: 'account_states'
      }
    });

    return data;
  }

  static async getTopRated(page = 1) {
    const { data } = await api.get('/movie/top_rated', {
      params: {
        page
      }
    });

    return data;
  }

  static async getPopular(page = 1) {
    const { data } = await api.get('/movie/popular', {
      params: {
        page
      }
    });

    return data;
  }

  static async getNowPlaying(page = 1) {
    const { data } = await api.get('/movie/now_playing', {
      params: {
        page
      }
    });

    return data;
  }
}

export default Movies;