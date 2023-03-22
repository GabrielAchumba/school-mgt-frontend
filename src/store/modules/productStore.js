import { getAboutUs } from "../products/aboutUs";
import { getGallery } from "../products/gallery";
import { getPrivacyPolicy } from "../products/privacyPolicy";
import { getLogo } from "../products/logo";
import { getInstall } from "../products/install";

const state = {
    aboutUs: {},
    gallery: [],
    privacyPolicy: "",
    logo: {},
    install: [],
}

const getters = {
    aboutUs(state){
        return state.aboutUs;
    },
    gallery(state){
        return state.gallery;
    },
    privacyPolicy(state){
        return state.privacyPolicy;
    },
    logo(state){
        return state.logo;
    },
    install(state){
        return state.install;
    }
}

const mutations = {
    setAboutUs(state, selectedProduct){
        state.aboutUs = getAboutUs(selectedProduct);
    },
    setGallery(state, selectedProduct){
        state.gallery = getGallery(selectedProduct);
        console.log("state.gallery: ", state.gallery)
    },
    setPrivacyPolicy(state, selectedProduct){
        state.privacyPolicy = getPrivacyPolicy(selectedProduct);
    },
    setLogo(state, selectedProduct){
        state.logo = getLogo(selectedProduct);
    },
    setInstall(state, selectedProduct){
        state.install = getInstall(selectedProduct)
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions

}