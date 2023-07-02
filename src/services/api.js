// Base da URL: https://api.themoviedb.org/3/
//  https://api.themoviedb.org/3/configuration
// KEY: d30221b61194d23fbc7c1d51d99d35c4

// https://api.themoviedb.org/3/

import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;