<template>
  <div class="authentication">
    <v-container fluid class="pa-3">
      <v-row
        class="h-100vh d-flex justify-center align-center"
        :style="{ background: '#10767b1a' }"
      >
        <v-col cols="12" lg="4" cl="3" class="d-flex align-center">
          <v-card class="px-sm-1 px-0 withbg mx-auto bg-white" max-width="500">
            <v-card-item>
              <div class="d-flex align-center justify-center">
                <v-img
                  src="/logo.png"
                  width="120px"
                  height="180px"
                  contain
                ></v-img>
              </div>

              <login-form />
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import LoginForm from "@/components/login/Login.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "login",
  components: {
    LoginForm,
  },

  setup() {},
});

//
</script>

<style lang="scss">
.authentication {
  background-color: #d5e5d5;
}

.bg-white {
  background-color: #fff;
}
</style>
