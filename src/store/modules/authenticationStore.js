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
<<<<<<< HEAD
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
=======
    tab: "login",
    isMobile: false,
    createURL: "",
    importURL: "",
    activeColumns: [],
    globalSearchDialog: false,
    activeRows: [],
    newRows: [],
    activeRoute: "",
    backRoute: "",
    menuList: [
      { name: "/", tabIndex: "home", label: "Home" },
      { name: "/login_register", tabIndex: "products", label: "Products"},
      { name: "/school-landing", tabIndex: "services", label: "Services" },
      { name: "/news", tabIndex: "mentoring", label: "Mentoring"}
    ],
    client_menuList: [
      { name: "/", tabIndex: "home", label: "Home" },
      { name: "/news", tabIndex: "news", label: "News"},
      { name: "/about_us", tabIndex: "about_us", label: "About Us" },
      { name: "/contact", tabIndex: "contact", label: "Contact" },
    ],
    showSpinner: false,
    isSchoolRoute: false,
    spinnerSize: "8em",
    spinnerThickness: 10,
    workSheetsNames: [],
    workSheetsData: [],
    isError: false,
    errorMessages: false,
    pageTitle: "",
    updateUserRoute: "/update-user",
    unComfirmedUsersRoute: "/unconfirmed-users",
    isTorpa: false,
    productGroups: [
      {
        title: "Apps",
        products: [
          {
            title: "Torpa",
            name: "",
          },
          {
            title: "Classic",
            name: "",
          },
          {
            title: "NewFood",
            name: "",
          }
        ]
      },
      {
        title: "Interiors",
        products: [
          {
            title: "Bedsheets"
          },
          {
            title: "Doveut"
          },
          {
            title: "Throw Pillows"
          },
          {
            title: "Curtains"
          }
        ]
      },
      {
        title: "Foods",
        products: [
          {
            title: "Bedsheets1"
          },
          {
            title: "Doveut1"
          },
          {
            title: "Throw Pillows1"
          },
          {
            title: "Curtains1"
          }
        ]
      }
    ]
  }

  const getters = {
    productGroups(state){
      return state.productGroups;
    },
    isTorpa(state){
      return state.isTorpa;
>>>>>>> a878d1dbb818c9e222000a8def50749bffae0336
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
<<<<<<< HEAD
  rightDrawerOpen(state){
    return state.rightDrawerOpen;
  }
=======
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
  },
  menuList(state){
    return state.menuList;
  },
  showSpinner(state){
    return state.showSpinner;
  },
  importURL(state){
    return state.importURL;
  },
  backRoute(state){
    return state.backRoute;
  },
>>>>>>> a878d1dbb818c9e222000a8def50749bffae0336
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
<<<<<<< HEAD
  setToUser(state, payload){
    state.toUser = {...payload }
=======
  setImportedData(state, payload){
    state.workSheetsNames = payload.workSheetsNames;
    state.workSheetsData = payload.workSheetsData;
  },
  setIsSchoolRoute(state, payload){
    state.isSchoolRoute = payload;
  },
  setShowSpinner(state, payload){
    state.showSpinner = payload;
  },
  setReservoirSimulationList(state, payload){
    const olasim_menuList = [
      { name: "/", tabIndex: "home", label: "Home" },
      { name: "/examples", tabIndex: "item3", label: "Examples"},
      { name: "/input", tabIndex: "products", label: "Input"},
      { name: "/output", tabIndex: "services", label: "Output" },
    ]
    state.menuList = olasim_menuList.map((row) => {
      return { ...row }
    })
  },
  setMenuList(state, payload){
    const torpa_menuList = [
      { name: "/", tabIndex: "home", label: "Home" },
      { name: "/products", tabIndex: "products", label: "Products"},
      { name: "/services", tabIndex: "services", label: "Services" },
      { name: "/mentoring", tabIndex: "mentoring", label: "Mentoring"},
      { name: "/courses", tabIndex: "courses", label: "Courses"},
      { name: "/clients", tabIndex: "clients", label: "Clients"},
      /* { name: "/about_us", tabIndex: "about_us", label: "About Us" },
      { name: "/contact", tabIndex: "contact", label: "Contact" }, */
    ]
    console.log("payload: ", payload)
    console.log("torpa_menuList: ", torpa_menuList)
    if(payload === true){
      state.menuList = [...torpa_menuList]
    }else{
      state.menuList = state.client_menuList.map((row) => {
        return { ...row }
      })
    }
    console.log(state.menuList)
>>>>>>> a878d1dbb818c9e222000a8def50749bffae0336
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