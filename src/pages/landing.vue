<template>
    <q-page>
      <div>
        <div class="row">
          <div class="col text-center" style="height: 40px"></div>
        </div>

        <div class="row">
          <s-logo/>
        </div>

        <div class="row">
          <div class="col">
            <!-- <hr /> -->
            <div class="row stretch justify-center">
              <s-apply-button @click.native="proceed_click" width="300" height="50"
              >Login</s-apply-button
              >
              <!-- <s-apply-button @click.native="register" width="200" height="50">
                Register</s-apply-button> -->
              <div class="col-12 q-pa-sm text-center">
                <a class="text-positive" href="#" @click="register">Create new account</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-page>
  <!-- <div class="row">
    <div class="col-12  bg-primary">
      <q-inner-loading :showing="showSpinner">
        <q-spinner-gears :size="size" :color="color" :thickness="thickness" />
      </q-inner-loading>
    </div>
  </div> -->
</template>

<script>
import mixin_Input from "src/mixins/Mixin-Input";

export default {
  name: "authLayout",
  mixins: [mixin_Input],
  methods: {
    proceed_click() {
      this.$router.push("/login");
    },
    register(){
      this.$router.push("/register");
    }
  },
}
</script>
<style scoped>
.jss30 {
  color: #808080;
}

</style>
