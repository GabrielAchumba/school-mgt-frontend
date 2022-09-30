<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
         <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        

        <q-btn stretch flat label="Home" 
       @click="displayHomePage" />
      <q-btn stretch flat label="About Us"
       @click="displayAboutUsPage"  />
      <q-btn stretch flat label="Contact Us" 
       @click="displayContactUsPage" />

      <!-- <q-space /> -->

      <!--   <q-btn
        class="absolute-right q-pr-sm"
          icon="account_circle"
          no-caps
          flat
          dense
        @click="logoutUser">
          {{ Loginstatus }}
          </q-btn> -->

         <!--  <q-btn 
          round
          label = "Loginstatus"
          class="absolute-right q-pr-sm"
          no-caps
          flat
          dense
          @click="logoutUser">
            <q-avatar size="42px">
              <img :src=IdentityModel.base64BioData>
            </q-avatar>
          </q-btn> -->

          <q-btn 
          v-if="IdentityModel.isPhotographUploaded"
          round
          class="absolute-right q-pr-sm" 
          color="primary"  
          @click="logoutUser" 
          size=md 
          no-caps>
            {{ Loginstatus }}
            <q-avatar size="42px">
              <img :src=IdentityModel.base64BioData>
            </q-avatar>
          </q-btn>

          <q-btn
          v-else
        class="q-pr-sm"
          icon="account_circle"
          no-caps
          flat
          dense
        @click="logoutUser">
          {{ Loginstatus }}
          </q-btn>

      </q-toolbar>
    </q-header>

    <q-drawer 
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="200"
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item
        v-for="nav in navs"
        :key="nav.label"
        :to="nav.to"
        class="text-grey-4"
        exact
        clickable>
        <q-item-section avatar>
          <q-icon :name="nav.icon"/>
        </q-item-section>
        <q-item-section avatar>
          <q-item-label>{{ nav.label }}</q-item-label>
        </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>

       <q-dialog v-model="LoginDialog">
          <login-app></login-app>
        </q-dialog>

         <q-dialog v-model="PersonalDataDialog">
          <createPersonalData-app></createPersonalData-app>
        </q-dialog>

        <q-dialog v-model="BioDataDialog">
          <createBioData-app></createBioData-app>
        </q-dialog>

        <q-dialog v-model="ContactDataDialog">
          <createContact-app></createContact-app>
        </q-dialog>

        <q-dialog v-model="NextOfKinDataDialog">
          <createNextOfKin-app></createNextOfKin-app>
        </q-dialog>

        <q-dialog v-model="AchievementDataCDialog">
          <createAchievement-app></createAchievement-app>
        </q-dialog>

        <q-dialog v-model="AchievementDataUDialog">
          <updateAchievement-app></updateAchievement-app>
        </q-dialog>

        <q-dialog v-model="EducationDataCDialog">
          <createEducation-app></createEducation-app>
        </q-dialog>

        <q-dialog v-model="EducationDataUDialog">
          <updateEducation-app></updateEducation-app>
        </q-dialog>

        <q-dialog v-model="EmploymentDataCDialog">
          <createEmployment-app></createEmployment-app>
        </q-dialog>

        <q-dialog v-model="EmploymentDataUDialog">
          <updateEmployment-app></updateEmployment-app>
        </q-dialog>

        <q-dialog v-model="HobbyDataCDialog">
          <createHobby-app></createHobby-app>
        </q-dialog>

        <q-dialog v-model="HobbyDataUDialog">
          <updateHobby-app></updateHobby-app>
        </q-dialog>

        <q-dialog v-model="PersonalProfileDataCDialog">
          <createPersonalprofile-app></createPersonalprofile-app>
        </q-dialog>

        <q-dialog v-model="PersonalProfileDataUDialog">
          <updatePersonalprofile-app></updatePersonalprofile-app>
        </q-dialog>

        <q-dialog v-model="QualificationDataCDialog">
          <createQualification-app></createQualification-app>
        </q-dialog>

        <q-dialog v-model="QualificationDataUDialog">
          <updateQualification-app></updateQualification-app>
        </q-dialog>

        <q-dialog v-model="ReferenceDataCDialog">
          <createReference-app></createReference-app>
        </q-dialog>

        <q-dialog v-model="ReferenceDataUDialog">
          <updateReference-app></updateReference-app>
        </q-dialog>

        <q-dialog v-model="SkillDataCDialog">
          <createSkill-app></createSkill-app>
        </q-dialog>

        <q-dialog v-model="SkillDataUDialog">
          <updateSkill-app></updateSkill-app>
        </q-dialog>

         <q-dialog v-model="StatementOfResultDataCDialog">
          <createStatementOfResult-app></createStatementOfResult-app>
        </q-dialog>

        <q-dialog v-model="StatementOfResultDataUDialog">
          <updateStatementOfResult-app></updateStatementOfResult-app>
        </q-dialog>

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import login from 'pages/authentication/login.vue';
import createAchievement from 'components/achievements/create.vue';
import updateAchievement from 'components/achievements/update.vue';
import createBioData from 'components/clients/createBioData.vue';
import createContact from 'components/clients/createContact.vue';
import createNextOfKin from 'components/clients/createNextOfKin.vue';
import createPersonalData from 'components/clients/createPersonalData.vue';
import createEducation from 'components/educations/create.vue';
import updateEducation from 'components/educations/update.vue';
import createEmployment from 'components/employment/create.vue';
import updateEmployment from 'components/employment/update.vue';
import createHobby from 'components/Hobbies/create.vue';
import updateHobby from 'components/Hobbies/update.vue';
import createPersonalprofile from 'components/personalprofile/create.vue';
import updatePersonalprofile from 'components/personalprofile/update.vue';
import createQualification from 'components/qualifications/create.vue';
import updateQualification from 'components/qualifications/update.vue';
import createReference from 'components/references/create.vue';
import updateReference from 'components/references/update.vue';
import createSkill from 'components/skills/create.vue';
import updateSkill from 'components/skills/update.vue';
import createStatementOfResult from 'components/statementOfResults/create.vue';
import updateStatementOfResult from 'components/statementOfResults/update.vue';
export default {
  name: 'AdminLayout',
  computed: {
        IdentityModel() {
            return this.$store.getters['authenticationStore/IdentityModel'];
        },
        LoginDialog() {
          return this.$store.getters['authenticationStore/LoginDialog'];
        },
        PersonalDataDialog() {
          return this.$store.getters['clientStore/PersonalDataDialog'];
        },
        BioDataDialog() {
          return this.$store.getters['clientStore/BioDataDialog'];
        },
        ContactDataDialog() {
          return this.$store.getters['clientStore/ContactDataDialog'];
        },
        NextOfKinDataDialog() {
          return this.$store.getters['clientStore/NextOfKinDataDialog'];
        },
        AchievementDataCDialog() {
          return this.$store.getters['achivementStore/AchievementDataCDialog'];
        },
        AchievementDataUDialog() {
          return this.$store.getters['achivementStore/AchievementDataUDialog'];
        },
        EducationDataCDialog() {
          return this.$store.getters['educationStore/EducationDataCDialog'];
        },
        EducationDataUDialog() {
          return this.$store.getters['educationStore/EducationDataUDialog'];
        },
        EmploymentDataCDialog() {
          return this.$store.getters['employmentStore/EmploymentDataCDialog'];
        },
        EmploymentDataUDialog() {
          return this.$store.getters['employmentStore/EmploymentDataUDialog'];
        },
        HobbyDataCDialog() {
          return this.$store.getters['hobbiesStore/HobbyDataCDialog'];
        },
        HobbyDataUDialog() {
          return this.$store.getters['hobbiesStore/HobbyDataUDialog'];
        },
        PersonalProfileDataCDialog() {
          return this.$store.getters['personalprofileStore/PersonalProfileDataCDialog'];
        },
        PersonalProfileDataUDialog() {
          return this.$store.getters['personalprofileStore/PersonalProfileDataUDialog'];
        },
        QualificationDataCDialog() {
          return this.$store.getters['qualificationStore/QualificationDataCDialog'];
        },
        QualificationDataUDialog() {
          return this.$store.getters['qualificationStore/QualificationDataUDialog'];
        },
        ReferenceDataCDialog() {
          return this.$store.getters['referenceStore/ReferenceDataCDialog'];
        },
        ReferenceDataUDialog() {
          return this.$store.getters['referenceStore/ReferenceDataUDialog'];
        },
        SkillDataCDialog() {
          return this.$store.getters['skillStore/SkillDataCDialog'];
        },
        SkillDataUDialog() {
          return this.$store.getters['skillStore/SkillDataUDialog'];
        },
        StatementOfResultDataCDialog() {
          return this.$store.getters['statementOfResultsStore/StatementOfResultDataCDialog'];
        },
        StatementOfResultDataUDialog() {
          return this.$store.getters['statementOfResultsStore/StatementOfResultDataUDialog'];
        },
        Loginstatus() {
          return this.$store.getters['authenticationStore/Loginstatus'];
        }
      },
  components: {
    'login-app' : login,
    'createAchievement-app' : createAchievement,
    'updateAchievement-app' : updateAchievement,
    'createBioData-app' : createBioData,
    'createContact-app' : createContact,
    'createNextOfKin-app' : createNextOfKin,
    'createPersonalData-app' : createPersonalData,
    'createEducation-app' : createEducation,
    'updateEducation-app' : updateEducation,
    'createEmployment-app' : createEmployment,
    'updateEmployment-app' : updateEmployment,
    'createHobby-app' : createHobby,
    'updateHobby-app' : updateHobby,
    'createPersonalprofile-app' : createPersonalprofile,
    'updatePersonalprofile-app' : updatePersonalprofile,
    'createQualification-app' : createQualification,
    'updateQualification-app' : updateQualification,
    'createReference-app' : createReference,
    'updateReference-app' : updateReference,
    'createSkill-app' : createSkill,
    'updateSkill-app' : updateSkill,
    'createStatementOfResult-app' : createStatementOfResult,
    'updateStatementOfResult-app' : updateStatementOfResult
  },
  data () {
    return {
      leftDrawerOpen: true,
       navs: [
              {
                label:'Profiles',
                icon: 'group',
                to:'/profiles'
              },
              // {
              //   label:'Achievements',
              //   icon: 'emoji_events',
              //   to:'/achievements'
              // },
              {
                label:'Educations',
                icon: 'school',
                to:'/educations'
              },
              // {
              //   label:'Employments',
              //   icon: 'work',
              //   to:'/employments'
              // },
              // {
              //   label:'Qualifications',
              //   icon: 'card_giftcard',
              //   to:'/qualifications'
              // },
              {
                label:'Skills',
                icon: 'pan_tool',
                to:'/skills'
              },
              {
                label:'Hobbies',
                icon: 'sports_kabaddi',
                to:'/hobbies'
              },
              {
                label:'References',
                icon: 'sports',
                to:'/references'
              }
  ]
    }
  },
  methods:{
    logoutUser(){
      var context = this;
      if(context.IdentityModel.isLogin == true)
      {
        console.log("logoutUser");
        //context.Loginstatus = "Log out";
        this.$store.dispatch('authenticationStore/Logout')
      }
      else{
       
         this.$store.commit('authenticationStore/showLoginDialog')
      }
    },
    displayHomePage(){
      this.$router.push('/');
    },
    displayAboutUsPage(){
      this.$router.push('/about');
    },
    displayContactUsPage(){
      this.$router.push('/contact');
    }
  }
}
</script>

<style>
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}

.q-drawer .q-router-link--exact-active {
  color: white !important;  
}
</style>