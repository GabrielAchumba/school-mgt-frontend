import axios from 'axios'
//const axiosInstance = axios.create({ 
  const processEnvNOEENV = "development";


    const $http  = axios.create({ 
      baseURL: (processEnvNOEENV == 'production') ? 'https://arcane-inlet-68126.herokuapp.com/' : 'http://localhost:3023/',
        headers: {'Content-Type': 'application/json'},
          baseURL: (processEnvNOEENV == 'production') ? 'https://arcane-inlet-68126.herokuapp.com/' : 'http://localhost:3023/'
      })

      /* export default ({ Vue }) => {
        Vue.prototype.$axios = axios
      } */

    const gcphttp  = axios.create({ 
      baseURL: (processEnvNOEENV == 'production') ? 'https://arcane-inlet-68126.herokuapp.com/' : 'http://localhost:7000/',
        headers: {'Content-Type': 'application/json'},
          baseURL: (processEnvNOEENV == 'production') ? 'https://arcane-inlet-68126.herokuapp.com/' : 'http://localhost:7000/'
      })

    /* export default ({ Vue }) => {
        Vue.prototype.$axios = axios
    } */
  
    export { $http, gcphttp  }
