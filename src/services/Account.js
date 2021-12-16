import api from './api';

class Account {

  static async getDetails() {
    const { data } = await api.get('/account');

    return {
      id: data.id,
      name: data.name,
      username: data.username,
      avatar_url: data.avatar.tmdb.avatar_path
    };
  }
}

export default Account;