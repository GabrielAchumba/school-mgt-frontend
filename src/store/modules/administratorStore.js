import { $http } from 'boot/axios'
import { userController } from './backendRoutes'; 

const state = {
    adminNavBarList: [
      {
        type: "CEO",
        name: "Super Administrator",
        list: [
          {
            label:'Administrators',
            to:'/administrators'
          },
          {
            label:'Register Admin',
            to:'/register-administrator'
          },
        ],
      },
      {
        type: "Registration",
        name: "Admin",
        list: [
          {
            label:'Update Profile',
            to:'/update-administrator'
          },
        ],
      },
      {
        type: "Registration",
        name: "Users",
        list: [
          {
            label:'Personal Data',
            to:'/registeredContributors'
          },
          {
            label:'Contacts',
            to:'/contacts'
          },
          {
            label:'Bank Details',
            to:'/bankDetails'
          },
         /*  {
            label:'Bio Data',
            to:'/bioData'
          }, */
          {
            label:'Next of Kins',
            to:'/nextOfKins'
          }
        ],
      },
      {
        type: "Registration",
        name: "CategoryN500",
        list: [
              {
                label:'Create CategoryN500',
                to:'/personalDataCategoryN500s'
              },
              {
                label:'CategoryN500 Contributors',
                to:'/categoryN500Contributors'
              },
        ],
      },
      {
        type: "Registration",
        name: "CategoryN1000",
        list: [
              {
                label:'Create CategoryN1000',
                to:'/personalDataCategoryN1000s'
              },
              {
                label:'CategoryN1000 Contributors',
                to:'/categoryN1000Contributors'
              },
        ],
      },
      {
        type: "Registration",
        name: "CategoryN2000",
        list: [
              {
                label:'Create CategoryN2000',
                to:'/personalDataCategoryN2000s'
              },
              {
                label:'CategoryN2000 Contributors',
                to:'/categoryN2000Contributors'
              },
        ],
      },
      {
        type: "Registration",
        name: "CategoryN5000",
        list: [
              {
                label:'Create CategoryN5000',
                to:'/personalDataCategoryN5000s'
              },
              {
                label:'CategoryN5000 Contributors',
                to:'/categoryN5000Contributors'
              },
        ],
      },
      {
        type: "Registration",
        name: "CategoryN10000",
        list: [
              {
                label:'Create CategoryN10000',
                to:'/personalDataCategoryN10000s'
              },
              {
                label:'CategoryN10000 Contributors',
                to:'/categoryN10000Contributors'
              },
        ],
      },
      {
        type: "Accounting",
        name: "AccountN500",
        list: [
          {
            label:'Make Contribution',
            to:'/makeContributionsN500'
          },
          {
            label:'Confirm Entry Payment',
            to:'/confirmEntryPaymentN500'
          },
          {
            label:'Confirm Level Payment',
            to:'/confirmCategoryN500LevelPayment'
          },
          {
            label:'All CashOuts',
            to:'/cashOutsN500'
          },
        ]
      },
      {
        type: "Accounting",
        name: "AccountN1000",
        list: [
              {
                label:'Make Contribution',
                to:'/makeContributionsN1000'
              },
              {
                label:'Confirm Entry Payment',
                to:'/confirmEntryPaymentN1000'
              },
              {
                label:'Confirm Level Payment',
                to:'/confirmCategoryN1000LevelPayment'
              },
              {
                label:'All CashOuts',
                to:'/cashOutsN1000'
              },
        ],
      },
      {
        type: "Accounting",
        name: "AccountN2000",
        list: [
              {
                label:'Make Contribution',
                to:'/makeContributionsN2000'
              },
              {
                label:'Confirm Entry Payment',
                to:'/confirmEntryPaymentN2000'
              },
              {
                label:'Confirm Level Payment',
                to:'/confirmCategoryN2000LevelPayment'
              },
              {
                label:'All CashOuts',
                to:'/cashOutsN2000'
              },
        ],
      },
      {
        type: "Accounting",
        name: "AccountN5000",
        list: [
              {
                label:'Make Contribution',
                to:'/makeContributionsN5000'
              },
              {
                label:'Confirm Entry Payment',
                to:'/confirmEntryPaymentN5000'
              },
              {
                label:'Confirm Level Payment',
                to:'/confirmCategoryN5000LevelPayment'
              },
              {
                label:'All CashOuts',
                to:'/cashOutsN5000'
              },
        ],
      },
      {
        type: "Accounting",
        name: "AccountN10000",
        list: [
              {
                label:'Make Contribution',
                to:'/makeContributionsN10000'
              },
              {
                label:'Confirm Entry Payment',
                to:'/confirmEntryPaymentN10000'
              },
              {
                label:'Confirm Level Payment',
                to:'/confirmCategoryN10000LevelPayment'
              },
              {
                label:'All CashOuts',
                to:'/cashOutsN10000'
              },
        ],
      },
    ],
    AdminDTO: {},
    SelectedAdmin: {},
    Administrators: [],
    isSuperAdmin: false,
    PhotoDto:{
      base64String: "",
      fileName: "",
    },
    UploadProgress: "0%",
  }

  const getters = {
    adminNavBarList(state){
      return state.adminNavBarList;
    },
    AdminDTO(state){
      return state.AdminDTO;
    },
    SelectedAdmin(state){
      return state.SelectedAdmin;
    },
    Administrators(state){
      return state.Administrators;
    },
    isSuperAdmin(state){
      return state.isSuperAdmin;
    },
    PhotoDto(state){
      return state.PhotoDto;
    },
    UploadProgress(state){
      return state.UploadProgress;
    }
}

const mutations = {
  CreateAdministrator(state, payload){
    state.AdminDTO = payload;
  },
  UpdateSelectedAdmin(state, payload){
    state.SelectedAdmin = payload;
  },
  GetAdministrators(state, payload){
    state.Administrators = payload;
  },
  UpdateIsSuperAdmin(state, payload){
    state.isSuperAdmin = payload;
  },
  UploadFile(state, payload){
    state.PhotoDto.base64String = payload.base64String;
    state.PhotoDto.fileName = payload.fileName;
  },
  GetUploadProgress(state, payload){
    state.UploadProgress = payload;
  },
}

const actions = {
  CreateAdministrator(context, AdminDTO)
  {

    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    

    return new Promise((resolve, reject) => {
       $http.post(`${userController}/registeradministrator`, AdminDTO)
        .then(response => {        
            resolve(response)
        })
        .catch(error => {   
          reject(error)
        })
    })
  },
  UpdateAdministrator(context, payload)
  {

    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise((resolve, reject) => {
       $http.put(`${userController}/updateadministratordto/` + payload.contributorId, payload)
        .then(response => {
                     
            resolve(response)
            
        })
        .catch(error => {  
          reject(error)
        })
    })
  },

  GetAdministrators(context)
  {
    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise((resolve, reject) => {
      
       $http.get(`${userController}/getadministrators`)
        .then(response => {
                         
            resolve(response)
            
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  GetAdministrator(context, id)
  {
    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise((resolve, reject) => {
      
       $http.get(`${userController}/${id}`)
        .then(response => {
                        
            resolve(response)
            
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  UploadPhoto(context, payload)
  {

    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise((resolve, reject) => {
      $http.post(payload.url, payload.request,{
        headers: {'Content-Type': 'multipart/form-data'},
        onUploadProgress: uploadEvent => {
          context.commit('GetUploadProgress', Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%');
        }
      })
        .then(response => {           
            resolve(response)
            
        })
        .catch(error => {
          reject(error)
        })
    })
  },


}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}