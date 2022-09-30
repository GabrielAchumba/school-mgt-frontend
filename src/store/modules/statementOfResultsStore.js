import { $http } from 'boot/axios' 

const state = {

    NewStatementOfResult:{
        level: "",
        subject: "",
        grade: "",
        obtainedDay: 0,
        obtainedMonth: 0,
        obtainedYear: 0,
        educationId: {}
    },
    SelectedStatementOfResult: {},
    StatementOfResults: [],
    StatementOfResultDataCDialog: false,
    StatementOfResultDataUDialog: false,
    base64String:""

  }

  const getters = {
    NewStatementOfResult (state) {
    return state.NewStatementOfResult;
  },
  SelectedStatementOfResult(state){
      return state.SelectedStatementOfResult;
  },
  StatementOfResults (state) {
    return state.StatementOfResults;
  },
  StatementOfResultDataCDialog (state) {
    return state.StatementOfResultDataCDialog;
  },
  StatementOfResultDataUDialog(state){
    return state.StatementOfResultDataUDialog;
  },
  base64String(state){
    return state.base64String;
  }
}

const mutations = {

  ReadStatementOfResults(state, payload){
    state.StatementOfResults = payload
    this.$router.push('/statementofresults');
  },
  CreateStatementOfResult(state, payload){
    state.StatementOfResults = payload
    state.StatementOfResultDataCDialog = false;
  },
  UpdateStatementOfResult(state, payload){
    state.StatementOfResults = payload
    state.StatementOfResultDataUDialog = false;
  },
  DeleteStatementOfResult(){
    state.StatementOfResults = payload
  },
  ShowStatementOfResultDataCDialog(state){
    state.StatementOfResultDataCDialog = true;
  },
  CancelStatementOfResultDataCDialog(state){
    state.StatementOfResultDataCDialog = false;
  },
  ShowStatementOfResultDataUDialog(state, payload){
    state.SelectedStatementOfResult=payload;
    state.StatementOfResultDataUDialog = true;
  },
  CancelStatementOfResultDataUDialog(state){
    state.StatementOfResultDataUDialog = false;
  },
}

const actions = {
    ReadStatementOfResults(context, payload)
    {
      return new Promise((resolve, reject) => {
         $http.post('StatementOfResults/GetStatementOfResultsByUserId', payload)
          .then(response => {
              
            context.commit('ReadStatementOfResults', response.data)             
              resolve(response)
              
          })
          .catch(error => {   
            reject(error)
          })
      })
    },
  CreateStatementOfResult(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.post('StatementOfResults', payload)
        .then(response => {
            
          context.commit('CreateStatementOfResult', response.data)             
            resolve(response)
            
        })
        .catch(error => {   
          reject(error)
        })
    })
  },
  UpdateStatementOfResult(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.put('StatementOfResults/' + payload.id, payload)
        .then(response => {
            
          context.commit('UpdateStatementOfResult', response.data)             
            resolve(response)
            
        })
        .catch(error => {  
          reject(error)
        })
    })
  },
  DeleteStatementOfResult(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.post('StatementOfResults/RemoveStatementOfResult', payload)
        .then(response => {
            
          context.commit('DeleteStatementOfResult', response.data)             
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