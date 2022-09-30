import { $http } from 'boot/axios' 

const state = {
    AuthDTO: {
      Departments: [],
      Faculties: [],
      Grades: [],
      HigherInstitutions: [],
      LGAs: [],
      OverallGrades: [],
      States: [],
      Levels: [],
      Schools: [],
      PrimarySubjects: [],
      SecondarySubjects: [],
      SchoolNames: [],
      ExamTypes: []
    },

    ExamScores: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    IdentityModel:{},
    LoginDialog: false,
    Loginstatus: "Log in",
    Departments: []
  }

  const getters = {
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
  }
}

const mutations = {

  Login(state, payload){
    console.log("Login")
    state.Loginstatus= "Log out";
    state.IdentityModel = payload;
    state.LoginDialog = false;
    this.$router.push('/');
  },
  LoadList(state, payload){
    console.log("LoadList")
    state.AuthDTO.Departments = payload.departments;
    state.Departments = payload.departments;
    state.AuthDTO.Faculties = payload.faculties;
    state.AuthDTO.Grades = payload.grades;
    state.AuthDTO.HigherInstitutions = payload.higherInstitutions;
    state.AuthDTO.LGAs = payload.lgAs;
    state.AuthDTO.OverallGrades = payload.overallGrades;
    state.AuthDTO.States = payload.states;
    state.AuthDTO.Levels = payload.levels;
    state.AuthDTO.Schools = payload.schools;
    state.AuthDTO.PrimarySubjects = payload.primarySubjects;
    state.AuthDTO.SecondarySubjects = payload.secondarySubjects;
    state.AuthDTO.SchoolNames=payload.schoolNames;
    state.AuthDTO.ExamTypes=payload.examTypes;
  },
  Logout(state){
    console.log("logoutUser");
    state.Loginstatus= "Log in";
    state.IdentityModel = {}
    this.$router.push('/');
  },
  showLoginDialog(state){
    console.log("logoutUser3");
    state.LoginDialog = true;
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
  LoadList(context)
  {
    return new Promise((resolve, reject) => {
       $http.get('Auths')
        .then(response => {
            
          context.commit('LoadList', response.data)             
            resolve(response)
            
        })
        .catch(error => {   
          reject(error)
        })
    })
  },
  Login(context, payload)
  {
    return new Promise((resolve, reject) => {
      console.log("seen")
       $http.post('Auths/Login', payload)
        .then(response => {
            
          context.commit('Login', response.data)              
            resolve(response)
            
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  Logout(context)
  {
    return new Promise((resolve, reject) => {
      console.log("seen")
       $http.post('Auths/Logout', context.state.IdentityModel)
        .then(response => {
            
          context.commit('Logout', response.data)              
            resolve(response)
            
        })
        .catch(error => {
          reject(error)
        })
    })
  }

}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}