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
    mainMenuList: [],
    isSubscription: {},
    superAdminMainMenuList: [],
    primaryColor: "#FFFFFF",
    secondaryColor: "#FF0000",
    tertiaryColor: "#056608",
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
    },
    mainMenuList(state){
      return state.mainMenuList;
    },
    isSubscription(state){
      return state.isSubscription;
    },
    superAdminMainMenuList(state){
      return state.superAdminMainMenuList;
    },
    primaryColor(state){
      return state.primaryColor;
    },
    secondaryColor(state){
      return state.secondaryColor;
    },
    tertiaryColor(state){
      return state.tertiaryColor;
    },
}

const mutations = {
  SetPrimaryColor(state, payload){
    state.primaryColor = payload;
  },
  SetSecondaryColor(state, payload){
    state.secondaryColor = payload;
  },
  SetTertiaryColor(state, payload){
    state.tertiaryColor = payload;
  },
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
  SetMainMenuList(state, payload){
    state.mainMenuList = payload;
  },
  SetIsSubscription(state, payload){
    state.isSubscription = payload;
  },
  SetSuperAdminMainMenuList(state, payload){
    state.superAdminMainMenuList = payload;
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