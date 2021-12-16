import api from './api';

class Authenticate {

  static async createToken() {
    const { data } = await api.get('/authentication/token/new');

    return data.request_token;
  }

  static async signIn(request_token) {
    const { data } = await api.post('/authentication/session/new', {
      request_token
    })

    return data.session_id;
  }

  static async signOut() {
    const { session_id } = api.defaults.params;
    await api.delete('/authentication/session/new', {
      session_id
    })
  }
}

export default Authenticate;