import { $http } from 'boot/axios' 

const get = async (payload) => {

  var token = sessionStorage.getItem("token") 
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

  var token = sessionStorage.getItem("token") 
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

  var token = sessionStorage.getItem("token") 
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

  var token = sessionStorage.getItem("token") 
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

    var token = sessionStorage.getItem("token") 
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

export {
  get,
  remove,
  post,
  put,
  uploadPhoto
}