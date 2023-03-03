import { $http } from 'boot/axios' 
import { userController } from './backendRoutes';

const state = {
    PersonalDataDTO:{
      title:"",
      firstName:"",
      middleName:"",
      lastName:"",
      gender:"",
      username:"",
      password:"",
      birthDay:23,
      birthMonth: 8,
      birthYear: 2020,
      parentUserName:"",
      createdDay:23,
      createdMonth: 8,
      createdYear: 2020
    },
    genders: ["Male", "Female"],
    base64String:"",
    step: 1,
    UploadProgress: "0%",
    RegisteredContributors: [],
    visible: false,
    showSimulatedReturnData: true,
    date: '2019/03/01',
    tab: "login",
    contacts: [],
    bioDatas: [],
    bankDetails: [],
    nextOfKins: [],
    isAdmin: false,
    selectedBankDetail: {},
    selectedBioData: {},
    selectedContact: {},
    selectedNextOfKin: {},
    personalDataList: [],
    contributor: {},
    PhotoDto:{
      base64String: "",
      fileName: "",
    },

  }

  const getters = {
    contributor(state){
      return state.contributor;
    },
    personalDataList(state){
      return state.personalDataList;
    },
    selectedNextOfKin(state){
      return state.selectedNextOfKin;
    },
    selectedContact(state){
      return state.selectedContact;
    },
    selectedBioData(state){
      return state.selectedBioData;
    },
    selectedBankDetail(state){
      return state.selectedBankDetail;
    },
    isAdmin(state){
      return state.isAdmin;
    },
    nextOfKins(state){
      return state.nextOfKins;
    },
    bankDetails(state){
      return state.bankDetails;
    },
    bioDatas(state){
      return state.bioDatas;
    },
    contacts(state){
      return state.contacts;
    },
    tab(state){
      return state.tab;
    },
    date(state){
      return state.date;
    },
    visible(state){
      return state.visible;
    },
    showSimulatedReturnData(state){
      return state.showSimulatedReturnData;
    },
    PersonalDataDTO (state) {
    return state.PersonalDataDTO;
  },
  genders (state) {
    return state.genders;
  },
  base64String(state){
    return state.base64String;
  },
  step(state){
    return state.step;
  },
  UploadProgress(state){
    return state.UploadProgress;
  },
  RegisteredContributors(state){
    return state.RegisteredContributors;
  },
  PhotoDto(state){
    return state.PhotoDto;
  }
}

const mutations = {
  updateSelectedNextOfKin(state, payload){
    state.selectedNextOfKin = payload;
  },
  updateSelectedContact(state, payload){
    state.selectedContact = payload;
  },
  updateSelectedBankDetail(state, payload){
    state.selectedBankDetail = payload;
  },
  updateSelectedBioData(state, payload){
    state.selectedBioData = payload;
  },
  isAdminUpdate(state, payload){
    state.isAdmin = payload;
  },
  commitTab(state, payload){
    state.tab = payload;
  },
  GetRegisteredContributors(state, payload){
    state.RegisteredContributors = payload;
    state.visible = false
    state.showSimulatedReturnData = true
  },
  CommitDataOfBirth(state, payload){

    state.date = payload;
    console.log(payload)

    var DOB = new Date(payload);
    console.log(DOB)
  

    state.PersonalDataDTO.birthYear = DOB.getFullYear();
    state.PersonalDataDTO.birthMonth = DOB.getMonth() + 1;
    state.PersonalDataDTO.birthDay= DOB.getDate();

    console.log(state.PersonalDataDTO)
  },
  CreatePersonalDataDTO(state, payload){
      state.PersonalDataDTO = payload;
  },
  backstep(state, payload){
    state.step = payload
  },
  GetUploadProgress(state, payload){
    state.UploadProgress = payload;
  },
  UploadFile(state, payload){
    state.base64String = payload;
    console.log(state.base64String); 
  },
  GetContacts(state, payload){
    state.contacts = payload;
  },
  GetBioData(state, payload){
    state.bioDatas = payload;
  },
  GetBankDetails(state, payload){
    state.bankDetails = payload;
  },
  GetNextOfKins(state, payload){
    state.nextOfKins = payload;
  },
  GetPersonalDataList(state, payload){
    state.personalDataList = payload
  },
  GetContributor(state, payload){
    state.contributor = payload
  },
  UploadFile(state, payload){
    state.PhotoDto.base64String = payload.base64String;
    state.PhotoDto.fileName = payload.fileName;
  },
}

const actions = {
  CreatePersonalDataDTO(context, PersonalDataDTO)
  {

    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    var todayDate = new Date();
    PersonalDataDTO.createdYear = todayDate.getFullYear();
    PersonalDataDTO.createdMonth = todayDate.getMonth() + 1;
    PersonalDataDTO.createdDay= todayDate.getDate();
    

    return new Promise((resolve, reject) => {
       $http.post(`${userController}/register`, PersonalDataDTO)
        .then(response => {        
            resolve(response)
        })
        .catch(error => {   
          reject(error)
        })
    })
  },
  UpdateContactDTO(context, ContactDTO)
  {

    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise((resolve, reject) => {
       $http.put(`${userController}/updatecontactdto/` + ContactDTO.contributorId, ContactDTO)
        .then(response => {
                     
            resolve(response)
            
        })
        .catch(error => {  
          reject(error)
        })
    })
  },
  UpdateBioData(context, BioDataDTO)
  {
    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    if(context.state.isAdmin == false){
      context.state.BioDataDTO.base64String = context.state.base64String
    }

    return new Promise((resolve, reject) => {
      
       $http.put(`${userController}/updatebiodata/` + BioDataDTO.contributorId, BioDataDTO)
        .then(response => {
          resolve(response)
            
        })
        .catch(error => {  
          reject(error)
        })
    })
  },
  UpdateNextOfKinDTO(context, NextOfKinDTO)
  {
    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise((resolve, reject) => {
       $http.put(`${userController}/updatenextofkindto/` + NextOfKinDTO.contributorId, NextOfKinDTO)
        .then(response => {

          resolve(response)
            
        })
        .catch(error => {  
          reject(error)
        })
    })
  },
  UpdateBankAccountData(context, BankAccountDTO)
  {
    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise((resolve, reject) => {
       $http.put(`${userController}/updatebankaccountdata/` + BankAccountDTO.contributorId, BankAccountDTO)
        .then(response => {          
          resolve(response)  
        })
        .catch(error => {  
          reject(error)
        })
    })
  },
  GetRegisteredContributors(context)
  {
    
    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    return new Promise((resolve, reject) => {
      
       $http.get(`${userController}/getallcontributors`)
        .then(response => {           
            resolve(response) 
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  GetContacts(context)
  {
    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise((resolve, reject) => {
      
       $http.get(`${userController}/getcontacts`)
        .then(response => {             
            resolve(response)
            
        })
        .catch(error => {
          console.log("GetContacts error")
          reject(error)
        })
    })
  },
  GetBioData(context)
  {
    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise((resolve, reject) => {
      
       $http.get(`${userController}/getbiodata`)
        .then(response => {              
            resolve(response)
            
        })
        .catch(error => {
          console.log("GetBioData error")
          /* state.visible = false
          state.showSimulatedReturnData = true */
          reject(error)
        })
    })
  },
  GetBankDetails(context)
  {
    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise((resolve, reject) => {
      
       $http.get(`${userController}/getbankdetails`)
        .then(response => {
                         
            resolve(response)
            
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  GetNextOfKins(context)
  {
    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise((resolve, reject) => {
      
       $http.get(`${userController}/getnextofkins`)
        .then(response => {             
            resolve(response)
            
        })
        .catch(error => {
          console.log("GetNextOfKins error")
          /* state.visible = false
          state.showSimulatedReturnData = true */
          reject(error)
        })
    })
  },
  GetPersonalDataList(context)
  {
    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise((resolve, reject) => {
      
       $http.get(`${userController}/getpersonaldataList`)
        .then(response => {           
            resolve(response)
            
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  GetContributor(context, id)
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