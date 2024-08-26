<template>
  <v-row class="d-flex mb-3">
    <v-col cols="12" class="pb-0">
      <v-label class="mb-1 fs-15 text-black">Đăng nhập</v-label>
      <v-text-field
        clearable
        variant="outlined"
        color="primary"
        class="fz-15"
        v-model="username"
        :placeholder="`Tên đăng nhập`"
        :error-messages="usernameError"
        @input="usernameError = ''"
        @keydown.enter="fnSubmit"
      >
        <template v-slot:prepend-inner>
          <v-icon size="22">solar:user-circle-bold</v-icon>
        </template>
      </v-text-field>
    </v-col>
    <v-col cols="12" class="pt-0">
      <v-label class="mb-1 fs-15 text-black">Mật khẩu</v-label>
      <v-text-field
        clearable
        variant="outlined"
        color="primary"
        class="fz-15"
        type="password"
        v-model="password"
        placeholder="Nhập mật khẩu"
        :error-messages="passwordError"
        @input="passwordError = ''"
        @keydown.enter="fnSubmit"
      >
        <template v-slot:prepend-inner>
          <v-icon size="22">solar:lock-password-bold</v-icon>
        </template>
      </v-text-field>
    </v-col>
    <v-col cols="12" class="pt-0">
      <div class="d-flex flex-wrap justify-space-between align-center ml-n2">
        <v-checkbox v-model="checkbox" color="primary" hide-details>
          <template v-slot:label class="text-body-1">Lưu đăng nhập</template>
        </v-checkbox>
        <!-- <div class="ml-sm-auto">
          <nuxt-link
            to="/"
            class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
          >
           
          </nuxt-link>
        </div> -->
      </div>
    </v-col>
    <v-col cols="12" class="mt-1">
      <v-btn
        block
        color="primary"
        size="large"
        style="height: 50px; background-color: #748529 !important"
        class="fz-15"
        @click="fnSubmit"
      >
        Đăng nhập
        <!-- {{ $t('GENERAL.SIGN_IN') }}  -->
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
// import Cookies from 'js-cookie';
// import { useAuthStore } from '~/store/auth';
// import type { IPayloadLogin } from '~/types/auth';
// import { ROLE_ID, TOKEN } from '~/utils/contants';

export default defineComponent({
  name: "vue",
  components: {},
  setup(props, ctx) {
    // const { t } = useI18n();
    // const { $toast } = useNuxtApp();
    // const router = useRouter();
    // const localePath = useLocalePath();
    // const authStore = useAuthStore();

    const checkbox: Ref<boolean> = ref(true);
    // const loading: Ref<boolean> = ref(false);
    const username: Ref<string> = ref("");
    const usernameError: Ref<string> = ref("");
    const password: Ref<string> = ref("");
    const passwordError: Ref<string> = ref("");

    // onMounted(() => {
    //     if (Cookies.get(TOKEN)) {
    //         router.push(localePath('/'));
    //     }
    // });

    const fnSubmit = () => {
      console.log(1111);
      // if (fnVal()) return;
      // loading.value = true;

      // let payload: IPayloadLogin = {
      //     username: username.value,
      //     password: password.value,
      // };

      // authStore
      //     .fnLogin(payload)
      //     .then((res: any) => {
      //         const str = String(res.code).startsWith('2');

      //         if (str) {
      //             const { data } = res;

      //             $toast.success(t('AUTH.MSG_SUCCESS'));
      //             // THỜI GIAN HẾT HẠN TOKEN 30 NGÀY
      //             Cookies.set(TOKEN, data?.access_token, { expires: 30 });
      //             Cookies.set(ROLE_CODE, data?.data.user.code, { expires: 30 });
      //             Cookies.set(USER_ID, data?.data.user.id, { expires: 30 });

      //             navigateTo(localePath('/'));
      //         } else {
      //             // $toast.warning(t('AUTH.MSG_ERR_AUTH'));
      //             $toast.error(res?.errors.errors);
      //         }
      //     })
      //     .catch((err) => {
      //         console.log('err', err);
      //     })
      //     .finally(() => {
      //         loading.value = false;
      //     });
    };

    // const fnVal = () => {
    //     let hasError = false;

    //     if (isNullOrEmpty(username.value) || isNullOrEmpty(username.value.trim())) {
    //         hasError = true;
    //         usernameError.value = t('VALIDATE.REQUIRED', { field: t('AUTH.LABEL_ACCOUNT') });
    //     }

    //     if (isNullOrEmpty(password.value) || isNullOrEmpty(password.value.trim())) {
    //         hasError = true;
    //         passwordError.value = t('VALIDATE.REQUIRED', { field: t('AUTH.LABEL_PASSWORD') });
    //     }

    //     return hasError;
    // };

    return {
      checkbox,
      // loading,
      username,
      usernameError,
      password,
      passwordError,
      fnSubmit,
    };
  },
});
</script>

<style scoped lang="scss">
.text-black {
  color: #000000 !important;
  font-weight: 600;
}
/* Your scoped styles here */
</style>
