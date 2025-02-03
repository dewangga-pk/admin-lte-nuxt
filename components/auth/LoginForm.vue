<template>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-2">
    <InputGroup>
      <InputText
        placeholder="Email"
        v-model="email"
        class="hover:!border-blue-500 focus:!shadow-none focus:!border-blue-500"
      />
      <InputGroupAddon>
        <i class="fas fa-envelope" />
      </InputGroupAddon>
    </InputGroup>

    <InputGroup>
      <InputText
        placeholder="Password"
        type="password"
        v-model="password"
        class="hover:!border-blue-500 focus:!shadow-none focus:!border-blue-500"
      />
      <InputGroupAddon>
        <i class="fas fa-lock" />
      </InputGroupAddon>
    </InputGroup>

    <Message severity="error" v-show="isError" pt:content="!py-1" pt:text="!text-xs">
      <template #icon>
        <i class="fas fa-exclamation-circle" />
      </template>
      Invalid Email or Password
    </Message>

    <div class="flex justify-between">
      <div class="flex items-center">
        <Checkbox
          v-model="remember"
          input-id="remember"
          binary
          :dt="checkBoxBlue"
        />
        <label for="remember" class="ml-2">Remember Me</label>
      </div>
      <Button
        label="Sign In"
        type="submit"
        pt:root="!bg-blue-500 hover:!bg-blue-700 active:!bg-blue-900 !py-2 !px-4 !rounded !border-0"
        pt:label="!text-white !font-bold !text-base"
        :loading="loading"
      />
    </div>
    <Toast />
  </form>
</template>

<script setup lang="ts">
import type { CheckboxDesignTokens } from '@primevue/themes/aura/checkbox';
const toast = useToast();

// Scopped Token
const checkBoxBlue = ref<CheckboxDesignTokens>({
    root: {
      checkedBackground: '{blue.500}',
      checkedHoverBackground: '{blue.600}',
      checkedBorderColor: '{blue.500}',
      hoverBorderColor: '{blue.500}',
    }
});

// State
const loading = ref(false)
const isError = ref(false)
const email = ref<string>('')
const password = ref<string>('')
const remember = ref<boolean>(false)
// Method
const { signIn } = useAuth()

const onSubmit = async ():Promise<void> => {
  loading.value = true
  console.log({
    email: email.value,
    password: password.value,
    remember: remember.value
  })
  const credentials = {
    username: email.value,
    password: password.value
  }

  await signIn(credentials, {callbackUrl: '/'}).then(() => {
    isError.value = false
  }).catch((error) => {
    isError.value = true
  })
  loading.value = false
}

</script>

<style scoped>

</style>