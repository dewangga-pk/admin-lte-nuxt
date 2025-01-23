<template>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-2">
    <InputGroup>
      <InputText
        placeholder="Email"
        type="email"
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
        unstyled
        pt:root="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 cursor-pointer py-2 px-4 rounded border-0"
        pt:label="text-white font-bold text-base"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import type { CheckboxDesignTokens } from '@primevue/themes/aura/checkbox';

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
const email = ref<string>('')
const password = ref<string>('')
const remember = ref<boolean>(false)
// Method
const onSubmit = ():void => {
  console.log({
    email: email.value,
    password: password.value,
    remember: remember.value
  })
}
</script>

<style scoped>

</style>