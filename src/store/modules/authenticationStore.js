import { $http } from 'boot/axios';

const state = {

    ExamScores: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    IdentityModel:{},
    Admin: {},
    LoginDialog: false,
    Loginstatus: "Log in",
    Departments: [],
    theme_color: '#056608',
    contributor: {},
    administrator: {},
    DoesNotHaveMoneyAccount: true,
    paystackkey: "",
    visible: false,
    showSimulatedReturnData: true,
    tab: "login",
    isMobile: false,
    createURL: "",
    activeColumns: [],
    globalSearchDialog: false,
    activeRows: [],
    newRows: [],
    activeRoute: "",
  }

  const getters = {
    tab(state){
      return state.tab;
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
  isMobile(state){
    return state.isMobile;
  },
  createURL(state){
    return state.createURL;
  },
  activeColumns(state){
    return state.activeColumns;
  },
  globalSearchDialog(state){
    return state.globalSearchDialog;
  },
  activeRows(state){
    return state.activeRows;
  },
  newRows(state){
    return state.newRows;
  },
  activeRoute(state){
    return state.activeRoute;
  }
}

const mutations = {
  changeTab(state, payload){
    state.tab = payload;
  },
  AddUserPhoto(state, payload){
    state.IdentityModel.base64String = payload.base64String
  },
  GetAdmin(state, payload){
    state.Admin = payload;
  },
  Login(state, payload){
   const { token, user } = payload;

    const inMin = 24 * 60;
    let expiredAt = new Date(new Date().getTime() + (60000 * inMin));
    let obj = {
      value: token,
      expiredAt: expiredAt.toISOString()
    }
    sessionStorage.setItem('seassionObj', JSON.stringify(obj));

    state.Loginstatus= "Log out";
    state.IdentityModel = user;
    

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
  },
  setIsMobile(state, payload){
    state.isMobile = payload;
  },
  setCreateURL(state, payload){
    state.createURL = payload;
  },
  setActiveColumns(state, payload){
    state.activeColumns = payload;
  },
  setGlobalSearchDialog(state, payload){
    state.globalSearchDialog = payload;
    console.log("state.globalSearchDialog: ", state.globalSearchDialog);
  },
  setActiveRows(state, payload){
    state.activeRows = payload;
  },
  setNewRows(state, payload){
    state.newRows = payload;
  },
  setActiveRoute(state, payload){
    state.activeRoute = payload;
  }
}

const actions = {
  sendOTP(context, payload){

    const number =
        `+${payload.code}${payload.phone.startsWith("0") ? payload.phone.substring(1) : payload.phone}`;

    /* firebaseAuth.verifyPhoneNumber(
      number,
      timeout,
      verificationCompleted,
      verificationFailed,
      codeSent,
      codeAutoRetrievalTimeout
    ); */
  },
  veryifyPhoneNumberAndRegisterUser(){

  },
  Logout(context)
  {
    context.commit('Logout')   

  },
  ForgotPassword(context, payload)
  {

    return new Promise((resolve, reject) => {
       $http.post('users/forgotpassword', payload)
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
       $http.post('users/resetpassword', payload)
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