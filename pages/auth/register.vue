<script setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  },
});
const formValid = ref(true);
const hasError = ref('');
const rules = {
  email: [
    (v) => !!v,
    (v) => /.+@.+/.test(v) || 'Email must be valid',
  ],
  password: [
    (v) => !!v,
    (v) => v.length >= 8 || 'Password must be at least 8 characters',
  ],
  confirmPassword: [
    (v) => !!v,
    (v) => v === formData.value.password || 'Confirm Password must match Password',
  ],
  name: [(v) => !!v],
};
const formData = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
});

const submit = async () => {
  hasError.value = '';

  if (!formValid.value) {
    return;
  }

  await $fetch(
    '/api/auth/register',
    {
      method: 'POST',
      body: formData.value,
    })
    .then(() => {
      navigateTo('/auth/login');
    })
    .catch(({ response }) => {
      hasError.value = response.statusText;
    });
};
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col xs="12" sm="8" md="6">
        <v-card>
          <v-card-title class="mb-2">
            {{ $t('auth.register') }}
          </v-card-title>
          <v-card-text>
            <v-alert
              v-if="hasError"
              :text="$t(hasError)"
              type="error"
              density="compact"
              class="mb-4"
            />

            <v-form
              v-model="formValid"
              @submit.prevent="submit"
            >
              <v-text-field
                v-model="formData.name"
                :rules="rules.name"
                :label="$t('name')"
              />
              <v-text-field
                v-model="formData.email"
                :rules="rules.email"
                :label="$t('auth.email')"
              />
              <v-text-field
                v-model="formData.password"
                :rules="rules.password"
                :label="$t('auth.password')"
                type="password"
              />
              <v-text-field
                v-model="formData.confirmPassword"
                :rules="rules.confirmPassword"
                :label="$t('auth.confirm.password')"
                type="password"
              />
              <v-btn
                :text="$t('auth.register')"
                color="primary"
                type="submit"
                block
              />
            </v-form>

            <v-label class="mt-4">
              <nuxtLink to="/auth/login">
                {{ $t('auth.login') }}
              </nuxtLink>
            </v-label>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-snackbar
    :model-value="!!hasError"
    color="error"
    location="bottom end"
    close-on-content-click
    min-width="35vw"
  >
    {{ $t(hasError) }}
  </v-snackbar>
</template>
