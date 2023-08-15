import axios from 'axios'
//const axiosInstance = axios.create({ 
  const processEnvNOEENV = "development";

  ///usr/lib/jvm/java-11-openjdk-amd64

  ///opt/jdk-18

    const $http  = axios.create({ 
        baseURL: (processEnvNOEENV == 'production') ? 'https://arcane-inlet-68126.herokuapp.com/' : 'http://localhost:3025/',
        headers: {'Content-Type': 'application/json'}
      })

      /* export default ({ Vue }) => {
        Vue.prototype.$axios = axios
      } */

    const gcphttp  = axios.create({ 
      baseURL: (processEnvNOEENV == 'production') ? 'https://school-mgt-backend-nestjs.herokuapp.com/' : 'http://localhost:4000/',
        headers: {'Content-Type': 'application/json'},
          baseURL: (processEnvNOEENV == 'production') ? 'https://school-mgt-backend-nestjs.herokuapp.com/' : 'http://localhost:4000/'
      })

    /* export default ({ Vue }) => {
        Vue.prototype.$axios = axios
    } */
  
    export { $http, gcphttp  }
