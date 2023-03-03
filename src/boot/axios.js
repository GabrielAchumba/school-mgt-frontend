import axios from 'axios' 
const process_env_NODE_ENV = "development";
console.log("process_env_NODE_ENV: ", process_env_NODE_ENV)
    const $http  = axios.create({ 
        headers: {'Content-Type': 'application/json'},
          baseURL: (process_env_NODE_ENV == 'production') ? 'https://seashell-app-l97vu.ondigitalocean.app/' : 'http://localhost:8000/' 
      })
      export default ({ Vue }) => {
        Vue.prototype.$axios = axios
      }
  
export { $http  }
