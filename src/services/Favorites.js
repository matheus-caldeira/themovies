import api from './api';

class Authenticate {

  static async getFavoritesMovies(page = 1) {
    const { account_id } = api.defaults.params;
    const { data } = await api.get(`/account/${account_id}/favorite/movies`, {
      page
    });

    return data;
  }

  static async getFavoritesTvs(page = 1) {
    const { account_id } = api.defaults.params;
    const { data } = await api.get(`/account/${account_id}/favorite/tv`, {
      page
    });

    return data;
  }

  static async updateFavorite(media_id, media_type, favorite) {
    const { account_id } = api.defaults.params;
    await api.post(`/account/${account_id}/favorite`, {
      media_id,
      media_type,
      favorite
    })
  }
}

export default Authenticate;