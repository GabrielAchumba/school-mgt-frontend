import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

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
import schoolStore from './modules/schoolStore';
import subscriptionStore from './modules/subscriptionStore';
import FileModelStore from './modules/FileModelStore';
import LogoStore from './modules/LogoStore';
import VisionStore from './modules/VisionStore';
import MissionStore from './modules/MissionStore';
import NewsStore from './modules/NewsStore';
import CarouselStore from './modules/CarouselStore';
import AboutUsStore from './modules/AboutUsStore';
import ContactStore from './modules/ContactStore';
import CoreValueStore from './modules/CoreValueStore';
import gradeStore from './modules/gradeStore';
import levelStore from './modules/levelStore';
import sessionStore from './modules/sessionStore';
import examStore from './modules/examStore';
import storyStore from './modules/storyStore';
import lessonNoteStore from './modules/lessonNoteStore'
import lessonNoteSectionStore from './modules/lessonNoteSectionStore';
import cAStore from './modules/cAStore';
import cAQuestionStore from './modules/cAQuestionStore';
import cAAnswerStore from './modules/cAAnswerStore';
import simulationStore from './modules/simulationStore';
import productStore from './modules/productStore';


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
      schoolStore,
      subscriptionStore,
      FileModelStore,
      LogoStore,
      VisionStore,
      MissionStore,
      NewsStore,
      CarouselStore,
      AboutUsStore,
      ContactStore,
      CoreValueStore,
      gradeStore,
      levelStore,
      sessionStore,
      examStore,
      storyStore,
      lessonNoteStore,
      lessonNoteSectionStore,
      cAStore,
      cAQuestionStore,
      cAAnswerStore,
      simulationStore,
      productStore,
    },
    plugins: [createPersistedState()],

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
