<template>
        <div class="row">

            <div class="col-5 q-pa-md">
                <h5>CONTACT FORM</h5>
                <hr>
                
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="FullName"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="Email"
        label="Email Address *"
        hint="Email address must have @ and ."
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="Subject"
        label="Subject of the email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
      v-model="Body"
      filled
      type="textarea"
    />
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
            </div>

            <div class="col-2"></div>

            <div class="q-pa-md col-5">
                <h5>CONTACT DETAILS</h5>
                <hr>
                <h5>Address</h5>
                <p>No. 2, sample street name, sample area, port harcourt, Rivers state, Nigeria </p>
                <hr>
                <h5>Phone Numbers</h5>
                <p icon="account_circle">+2348010000000</p>
                <p>+2348010000000</p>
                <hr>
                <h5>Email Address</h5>
                <p>emailaddress1@yourdomainname.com
                <p>emailaddress2@yourdomainname.com</p>
            </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
                FullName:"",
                Email:"",
                Subject:"",
                Body:""
        }
    },
     methods: {
    onSubmit () {
      
    },

    onReset () {
        var context = this;

      context.FullName = ""
      context.Email = ""
      context.Subject = ""
      context.Body = ""
    }
  }
}
</script>

<style>

</style>
