import Vue from 'vue'
import Vuex from 'vuex'

import authenticationStore from './modules/authenticationStore'
import clientStore from './modules/clientStore'
import personalprofileStore from './modules/personalprofileStore'
import achivementStore from './modules/achivementStore'
import hobbiesStore from './modules/hobbiesStore'
import qualificationStore from './modules/qualificationStore'
import skillStore from './modules/skillStore'
import educationStore from './modules/educationStore'
import employmentStore from './modules/employmentStore'
import referenceStore from './modules/referenceStore'
import statementOfResultsStore from './modules/statementOfResultsStore'
import administratorStore from './modules/administratorStore'


Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      authenticationStore,
      clientStore,
      personalprofileStore,
      achivementStore,
      hobbiesStore,
      qualificationStore,
      skillStore,
      educationStore,
      employmentStore,
      referenceStore,
      statementOfResultsStore,
      administratorStore
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
