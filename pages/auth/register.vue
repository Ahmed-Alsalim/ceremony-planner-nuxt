<script setup>
const formValid = ref(true);
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
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
});

const submit = async () => {
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
      // eslint-disable-next-line no-console
      console.debug('err', response);
    });

};
</script>

<template>
  <h1>Sign Up</h1>
  <v-form v-model="formValid">
    <v-text-field
      v-model="formData.email"
      :rules="rules.email"
      label="Email"
    />
    <v-text-field
      v-model="formData.password"
      :rules="rules.password"
      label="Password"
      type="password"
    />
    <v-text-field
      v-model="formData.confirmPassword"
      :rules="rules.confirmPassword"
      label="Confirm Password"
      type="password"
    />
    <v-text-field
      v-model="formData.name"
      :rules="rules.name"
      label="name"
    />
    <v-btn
      color="primary"
      @click="submit"
    >
      Sign Up
    </v-btn>
  </v-form>
</template>

<style>

</style>