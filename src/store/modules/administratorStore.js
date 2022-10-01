import { $http } from 'boot/axios' 

const state = {
    adminNavBarList: [
          {
            label:'Profile',
            to:'/profile'
          },
          {
            label:'Staff',
            to:'/staff'
          },
          {
            label:'Class Rooms',
            to:'/class-rooms'
          },
          {
            label:'Subjects',
            to:'/subjects'
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

const actions = {}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}