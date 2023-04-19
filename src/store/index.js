import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import authenticationStore from './modules/authenticationStore';
import administratorStore from './modules/administratorStore';
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
import storyStore from './modules/storyStore';


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
      userStore,
      componentsStore,
      schoolStore,
      subscriptionStore,
      FileModelStore,
      storyStore,
      LogoStore,
      VisionStore,
      MissionStore,
      NewsStore,
      CarouselStore,
      AboutUsStore,
      ContactStore,
      CoreValueStore
    },
    plugins: [createPersistedState()],

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
