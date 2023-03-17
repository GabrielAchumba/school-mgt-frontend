import { $http } from 'boot/axios';
import { userController } from './backendRoutes';

const state = {

    ExamScores: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    IdentityModel:{},
    Admin: {},
    LoginDialog: false,
    Loginstatus: "Log in",
    Departments: [],
    theme_color: '#00498D',
    contributor: {},
    administrator: {},
    DoesNotHaveMoneyAccount: true,
    paystackkey: "",
    visible: false,
    showSimulatedReturnData: true,
    rightDrawerOpen: true,
    toUser: {fullName: "", contributorId: "", categoryId: ""},
    categoryN500User: {},
    categoryN1000User: {},
    categoryN2000User: {},
    categoryN5000User: {},
    categoryN10000User: {},
  }

  const getters = {
    categoryN10000User(state){
      return state.categoryN10000User;
    },
    categoryN5000User(state){
      return state.categoryN5000User;
    },
    categoryN2000User(state){
      return state.categoryN2000User;
    },
    categoryN1000User(state){
      return state.categoryN1000User;
    },
    categoryN500User(state){
      return state.categoryN500User;
    },
    toUser(state){
      return state.toUser;
    },
    DoesNotHaveMoneyAccount(state){
      return state.DoesNotHaveMoneyAccount;
    },
    visible(state){
      return state.visible;
    },
    showSimulatedReturnData(state){
      return state.showSimulatedReturnData;
    },
    paystackkey(state){
      return state.paystackkey
    },
    administrator(state){
      return state.administrator;
    },
    contributor(state){
      return state.contributor;
    },
    theme_color(state){
      return state.theme_color;
    },
    AuthDTO(state){
      return state.AuthDTO;
    },
    ExamScores(state){
      return state.ExamScores;
    },
  IdentityModel (state) {
    return state.IdentityModel;
  },
  LoginDialog (state) {
    return state.LoginDialog;
  },
  Loginstatus (state) {
    return state.Loginstatus;
  },
  Departments(state){
    return state.Departments;
  },
  Admin(state){
    return state.Admin;
  },
  rightDrawerOpen(state){
    return state.rightDrawerOpen;
  }
}

const mutations = {
  setCategoryN10000User(state, payload){
    state.categoryN10000User = {...payload }
  },
  setCategoryN5000User(state, payload){
    state.categoryN5000User = {...payload }
  },
  setCategoryN2000User(state, payload){
    state.categoryN2000User = {...payload }
  },
  setCategoryN1000User(state, payload){
    state.categoryN1000User = {...payload }
  },
  setCategoryN500User(state, payload){
    state.categoryN500User = {...payload }
  },
  setToUser(state, payload){
    state.toUser = {...payload }
  },
  setRightDrawerOpen(state, payload){
    state.rightDrawerOpen = payload
  },
  AddUserPhoto(state, payload){
    state.IdentityModel.base64String = payload.base64String
  },
  GetAdmin(state, payload){
    state.Admin = payload;
  },
  Login(state, payload){
   const { token, user } = payload;
    sessionStorage.setItem("token", token); 

    state.Loginstatus= "Log out";
    state.IdentityModel = user;
    
    if(state.IdentityModel.userType == "Admin"){
      this.$router.push('/admin');
    }
    else{
      this.$router.push('/user-home');
    }

    state.visible = false
    state.showSimulatedReturnData = true
    
  },
  Logout(state){
    console.log("logoutUser");
    state.Loginstatus = "Log in";
    state.IdentityModel = {}
    this.$router.push('/');
  },
  showLoginDialog(state){
    console.log("Show Log in Page");
    this.$router.push('/login');
  },
  hideLoginDialog(state){
    state.LoginDialog = false;
  },
  onFacultyValueChanged(state, payload){
    var selectedIndex = state.AuthDTO.Faculties.indexOf(payload);
    facultyObj=state.AuthDTO.facultiesObj[selectedIndex];
    state.Departments = [];

    var i = 0;
    for(i=0; i < state.AuthDTO.departmentsObj.length; i++){
        if(facultyObj.id == state.AuthDTO.departmentsObj.id){
          state.Departments.push(state.AuthDTO.departmentsObj[i].nameOfDepartment);
        }
    }
  }

}

const actions = {
  veryifyPhoneNumberAndRegisterUser(){

  },
  Login(context, payload)
  {

    return new Promise((resolve, reject) => {
      console.log("seen")
       $http.post(`${userController}/login`, payload)
        .then(response => {

          //context.commit('Login', response.data)             
            resolve(response)
            
        })
        .catch(error => {
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            alert(error.response.data)
            alert(error.response.status)
            alert(error.response.headers)
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
            alert(error.request)
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            alert(error.message)
          }
          reject(error)
        })
    })
  },
  Logout(context)
  {
    context.commit('Logout')   

  },
  ForgotPassword(context, payload)
  {

    return new Promise((resolve, reject) => {
       $http.post(`${userController}/forgotpassword`, payload)
        .then(response => {           
            resolve(response)
            
        })
        .catch(error => {
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          reject(error)
        })
    })
  },
  ResetPassword(context, payload)
  {

    return new Promise((resolve, reject) => {
       $http.post(`${userController}/resetpassword`, payload)
        .then(response => {           
            resolve(response)
            
        })
        .catch(error => {
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
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