<script setup>
const formValid = ref(true);
const rules = {
  required: [(v) => !!v],
};
const formData = ref({
  email: 'ahmed@me.com',
  password: '12345678',
});

const submit = async () => {
  if (!formValid.value) {
    return;
  }

  await $fetch(
    '/api/auth/login',
    {
      method: 'POST',
      body: formData.value,
    })
    .then(() => {
      navigateTo('/');
    })
    .catch(({ response }) => {
      // eslint-disable-next-line no-console
      console.debug('err', response);
    });

};
</script>

<template>
  <h1>Login</h1>
  <v-form>
    <v-text-field
      v-model="formData.email"
      :rules="rules.required"
      label="Email"
    />
    <v-text-field
      v-model="formData.password"
      :rules="rules.required"
      label="Password"
      type="password"
    />
    <v-btn
      color="primary"
      @click="submit"
    >
      Login
    </v-btn>
  </v-form>
</template>

<style>

</style>