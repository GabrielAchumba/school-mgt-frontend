import { $http } from 'boot/axios' 

const state = {
    SortModels: [],
    SortVariable: {
        schoolName: "",
        isSchoolNameSelected: false,
        finalOverallGrade: "",
        isFinalOverallGradeSelected: false,
        schoolCategory: "",
        isSchoolCategorySelected: false,
        level: "",
        islevelSelected: false,
        subject: "",
        isSubjectSelected: false,
        grade: "",
        isGradeSelected: false,
        score: "0",
        scoreEnd: "100",
        isScoreSelected: false,
        examType: "",
        isExamTypeSelected: false,
        gender: "",
        isGenderSelected: false,
        lGAOfOrigin: "",
        isLGAOfOriginSelected: false
    },
    IsColumnsSelected: {
      fullNameSelected: true,
      subjectSelected: true,
      scoreSelected: true,
      gradeSelected: true,
      levelSelected: true,
      schoolNameSelected: true,
      schoolCategorySelected: true,
      lGASelected: true,
      examTypeSelected: true,
      finalOverallGradeSelected: true,
      genderSelected: true
      
    },
    SecondaryCutOffs: [],
    PrimaryCutOffs: [],
    SelectedPrimaryCutOff: {},
    SelectedSecondaryCutOff: {},
    PrimaryOptionCutOffCDialog: false,
    SecondaryOptionCutOffCDialog: false,
    PrimaryOptionCutOffUDialog: false,
    SecondaryOptionCutOffUDialog: false

  }

  const getters = {
    PrimaryOptionCutOffUDialog(state){
      return state.PrimaryOptionCutOffUDialog;
    },
    SecondaryOptionCutOffUDialog(state){
      return state.SecondaryOptionCutOffUDialog;
    },
    PrimaryOptionCutOffCDialog(state){
      return state.PrimaryOptionCutOffCDialog;
    },
    SecondaryOptionCutOffCDialog(state){
      return state.SecondaryOptionCutOffCDialog;
    },
    SecondaryCutOffs(state){
      return state.SecondaryCutOffs;
    },
    PrimaryCutOffs(state){
      return state.PrimaryCutOffs;
    },
    SelectedPrimaryCutOff(state){
      return state.SelectedPrimaryCutOff;
    },
    SelectedSecondaryCutOff(state){
      return state.SelectedSecondaryCutOff;
    },
    SortModels (state) {
    return state.SortModels;
  },
  SortVariable (state){
      return state.SortVariable;
  },
  IsColumnsSelected(state){
    return state.IsColumnsSelected;
  }
}

const mutations = {

  ReadSortModels(state, payload){
    state.SortModels = payload
    this.$router.push('/admin');
  },
  ReadPrimaryOptionCutOff(state, payload){
    state.PrimaryCutOffs = payload;
  },
  CreatePrimaryOptionCutOff(state, payload){
    state.PrimaryCutOffs = payload;
    state.PrimaryOptionCutOffCDialog = false;
  },
  UpdatePrimaryOptionCutOff(state, payload){
    state.PrimaryCutOffs = payload;
    state.PrimaryOptionCutOffUDialog = false;
  },
  DeletePrimaryOptionCutOff(state, payload){
    state.PrimaryCutOffs = payload;
  },
  ReadSecondaryOptionCutOff(state, payload){
    state.SecondaryCutOffs = payload;
  },
  CreateSecondaryOptionCutOff(state, payload){
    state.SecondaryCutOffs = payload;
    state.SecondaryOptionCutOffCDialog = false;
  },
  UpdateSecondaryOptionCutOff(state, payload){
    state.SecondaryCutOffs = payload;
    state.SecondaryOptionCutOffUDialog = false;
  },
  DeleteSecondaryOptionCutOff(state, payload){
    state.SecondaryCutOffs = payload;
  },
  ShowPrimaryOptionCutOffCDialog(state){
    state.PrimaryOptionCutOffCDialog = true;
    console.log(state.PrimaryOptionCutOffCDialog)
  },
  ShowPrimaryOptionCutOffUDialog(state, payload){
    state.SelectedPrimaryCutOff = payload
    state.PrimaryOptionCutOffUDialog = true;
  },
  HidePrimaryOptionCutOffCDialog(state){
    state.PrimaryOptionCutOffCDialog = false;
  },
  HidePrimaryOptionCutOffUDialog(state){
    state.PrimaryOptionCutOffUDialog = false;
  },
  ShowSecondaryOptionCutOffCDialog(state){
    state.SecondaryOptionCutOffCDialog = true;
  },
  ShowSecondaryOptionCutOffUDialog(state, payload){
    state.SelectedSecondaryCutOff = payload;
    state.SecondaryOptionCutOffUDialog = true;
  },
  HideSecondaryOptionCutOffCDialog(state){
    state.SecondaryOptionCutOffCDialog = false;
  },
  HideSecondaryOptionCutOffUDialog(state){
    state.SecondaryOptionCutOffUDialog = false;
  }
  
}

const actions = {
    ReadSortModels(context)
    {
      return new Promise((resolve, reject) => {
         $http.post('SortModels/GetSortedTable', state.SortVariable)
          .then(response => {
              
            //context.commit('SetColumns');
            context.commit('ReadSortModels', response.data);
                         
              resolve(response)
              
          })
          .catch(error => {   
            reject(error)
          })
      })
    },
    ReadPrimaryOptionCutOff(context){
      return new Promise((resolve, reject) => {
        $http.get('PrimaryCutOffs')
         .then(response => {

           context.commit('ReadPrimaryOptionCutOff', response.data);
                        
             resolve(response)
             
         })
         .catch(error => {   
           reject(error)
         })
     })
    },
    CreatePrimaryOptionCutOff(context, payload){
      return new Promise((resolve, reject) => {
        $http.post('PrimaryCutOffs', payload)
         .then(response => {
             
           context.commit('CreatePrimaryOptionCutOff', response.data);
                        
             resolve(response)
             
         })
         .catch(error => {   
           reject(error)
         })
     })
    },
    UpdatePrimaryOptionCutOff(context, payload){
      return new Promise((resolve, reject) => {
        $http.put('PrimaryCutOffs/' + payload.id, payload)
         .then(response => {
             
           context.commit('UpdatePrimaryOptionCutOff', response.data);
                        
             resolve(response)
             
         })
         .catch(error => {   
           reject(error)
         })
     })
    },
    DeletePrimaryOptionCutOff(context, payload){
      return new Promise((resolve, reject) => {
        $http.delete('PrimaryCutOffs/' + payload.id)
         .then(response => {
             
           context.commit('DeletePrimaryOptionCutOff', response.data);
                        
             resolve(response)
             
         })
         .catch(error => {   
           reject(error)
         })
     })
    },
    ReadSecondaryOptionCutOff(context){
      return new Promise((resolve, reject) => {
        $http.get('SecondaryCutOffs')
         .then(response => {
             
           context.commit('ReadSecondaryOptionCutOff', response.data);
                        
             resolve(response)
             
         })
         .catch(error => {   
           reject(error)
         })
     })
    },
    CreateSecondaryOptionCutOff(context, payload){
      return new Promise((resolve, reject) => {
        $http.post('SecondaryCutOffs', payload)
         .then(response => {
             
           context.commit('CreateSecondaryOptionCutOff', response.data);
                        
             resolve(response)
             
         })
         .catch(error => {   
           reject(error)
         })
     })
    },
    UpdateSecondaryOptionCutOff(context, payload){
      return new Promise((resolve, reject) => {
        $http.put('SecondaryCutOffs/'+payload.id, payload)
         .then(response => {
             
           context.commit('UpdateSecondaryOptionCutOff', response.data);
                        
             resolve(response)
             
         })
         .catch(error => {   
           reject(error)
         })
     })
    },
    DeleteSecondaryOptionCutOff(context, payload){
      return new Promise((resolve, reject) => {
        $http.delete('SecondaryCutOffs/'+ payload.id)
         .then(response => {
             
           context.commit('DeleteSecondaryOptionCutOff', response.data);
                        
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