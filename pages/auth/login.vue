<script setup>
const { signIn } = useAuth();

const formValid = ref(true);
const loginFailed = ref(false);

const rules = {
  required: [(v) => !!v],
};
const formData = ref({
  email: 'ahmed@me.com',
  password: '12345678',
});

const handleLogin = async () => {
  if (!formValid.value) {
    return;
  }

  signIn('credentials', {
    email: formData.value.email,
    password: formData.value.password,
    callbackUrl: '/',
  })
    .catch(() => {
      loginFailed.value = true;
    });
};
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col xs="12" sm="8" md="6">
        <v-card>
          <v-card-title class="mb-2">
            {{ $t('auth.login') }}
          </v-card-title>
          <v-card-text>
            <v-alert
              v-if="loginFailed"
              :text="$t('auth.invalid.credentials')"
              type="error"
              density="compact"
              class="mb-4"
            />

            <v-form
              v-model="formValid"
              @submit.prevent="handleLogin"
            >
              <v-text-field
                v-model="formData.email"
                :rules="rules.required"
                :label="$t('auth.email')"
              />
              <v-text-field
                v-model="formData.password"
                :rules="rules.required"
                :label="$t('auth.password')"
                type="password"
              />
              <v-btn
                :text="$t('auth.login')"
                color="primary"
                type="submit"
                block
              />
            </v-form>

            <v-label class="mt-4">
              <nuxtLink to="/auth/register">
                {{ $t('auth.create.account') }}
              </nuxtLink>
            </v-label>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
