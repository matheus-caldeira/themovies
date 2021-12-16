import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '0704a1510f0f93a77db281aef46eb4ba'
  }
})

export default api;