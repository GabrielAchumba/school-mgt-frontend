import axios from 'axios'
//const axiosInstance = axios.create({ 
  const processEnvNOEENV = "production";
    const $http  = axios.create({ 
        headers: {'Content-Type': 'application/json'},
          baseURL: (processEnvNOEENV == 'production') ? 'https://arcane-inlet-68126.herokuapp.com/' : 'http://localhost:3023/'
          //baseURL: 'http://localhost:3023/' 
          //baseURL: 'http://gabrielachumba-001-site1.itempurl.com/api/'
      })
      export default ({ Vue }) => {
        Vue.prototype.$axios = axios
      }
      //export { axiosInstance }
      export { $http  }
