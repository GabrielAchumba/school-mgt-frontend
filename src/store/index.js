import Vue from 'vue'
import Vuex from 'vuex'

import authenticationStore from './modules/authenticationStore';
import administratorStore from './modules/administratorStore';
import staffStore from './modules/staffStore';
import classRoomStore from './modules/classRoomStore';
import studentStore from './modules/studentStore';
import subjectStore from './modules/subjectStore';
import assessmentStore from './modules/assessmentStore';
import lessonStore from './modules/lessonStore';
import resultStore from './modules/resultStore';
import userStore from './modules/userStore';
import chartStore from './modules/chartStore';
import componentsStore from './modules/componentsStore';

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
      administratorStore,
      staffStore,
      classRoomStore,
      studentStore,
      subjectStore,
      assessmentStore,
      lessonStore,
      resultStore,
      userStore,
      chartStore,
      componentsStore,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
