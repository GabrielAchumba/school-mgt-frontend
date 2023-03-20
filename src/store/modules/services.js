import { $http } from 'boot/axios' 

const get = async (payload) => {

  const { token } = validateSession();
  $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

  return new Promise((resolve, reject) => {
      
    $http.get(payload.url)
     .then(response => {            
         resolve(response)
         
     })
     .catch(error => {
       reject(error)
     })
  })
}

const remove = async (payload) => {

  const { token } = validateSession();
  $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

  return new Promise((resolve, reject) => {
      
    $http.delete(payload.url)
     .then(response => {             
         resolve(response)
         
     })
     .catch(error => {
       reject(error)
     })
  })
}

const post = (payload) => {

  const { token } = validateSession();
  $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

  return new Promise((resolve, reject) => {
      
    $http.post(payload.url, payload.req)
     .then(response => {             
         resolve(response)
         
     })
     .catch(error => {
       reject(error)
     })
 })
}

const put = (payload) => {

  const { token } = validateSession();
  $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

  return new Promise((resolve, reject) => {
      
    $http.put(payload.url, payload.req)
     .then(response => {             
         resolve(response)
         
     })
     .catch(error => {
       reject(error)
     })
 })
}

const uploadPhoto = async (payload) => {

  const { token } = validateSession();
  $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise((resolve, reject) => {
      $http.post(payload.url, payload.request,{
        headers: {'Content-Type': 'multipart/form-data'},
        onUploadProgress: uploadEvent => {}
      })
        .then(response => {           
            resolve(response)
            
        })
        .catch(error => {
          reject(error)
        })
    })
}

const validateSession = () => {
  const key = "seassionObj";
  let seassionVal = localStorage.getItem(key);
  //console.log("seassionVal: ", seassionVal)
  if (seassionVal !== null) {
    let sessionObj = JSON.parse(seassionVal);
    const { token, user } = sessionObj.value
    //console.log("user: ", user)
    let expiredAt = new Date(sessionObj.expiredAt);
    if (expiredAt > new Date()) {
      return { token, user };
    } else {
      localStorage.removeItem(key);
    }
  }
    return null;
}

export {
  get,
  remove,
  post,
  put,
  uploadPhoto,
  validateSession
}