import axios from 'axios' 
const processEnvNOEENV = "production";

const $http  = axios.create({ 
  baseURL: (processEnvNOEENV == 'production') ? 'https://arcane-inlet-68126.herokuapp.com/' : 'http://localhost:3023/',
    headers: {'Content-Type': 'application/json'},
      baseURL: (processEnvNOEENV == 'production') ? 'https://arcane-inlet-68126.herokuapp.com/' : 'http://localhost:3023/'
  })
  

  const processEnvNOEENV2 = "production";
  const gcphttp  = axios.create({ 
    baseURL: (processEnvNOEENV2 == 'production') ? 'https://school-mgt-backend-nestjs.herokuapp.com/' : 'http://localhost:4000/',
      headers: {'Content-Type': 'application/json'},
        baseURL: (processEnvNOEENV2 == 'production') ? 'https://school-mgt-backend-nestjs.herokuapp.com/' : 'http://localhost:4000/'
    })

  /* export default ({ Vue }) => {
    Vue.prototype.$axios = axios
  } */
  
export { $http, gcphttp  }
