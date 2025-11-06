<script setup lang="ts" generic="T">
import type { InputTypeHTMLAttribute } from 'vue'
import type { InputProps } from '@telegram-apps/telegram-ui'

type InputType = 'floating' | 'default'

interface IInputProps {
  label?: string
  name: string
  id: string
  required?: boolean
  class?: string
  type: InputTypeHTMLAttribute
  placeholder?: string
  variant?: InputType
}

const model = defineModel<T>()
const props = defineProps<IInputProps>()
const { variant = 'default' } = props

const changeInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  let value: unknown = target.value

  if (props.type === 'number') value = Number(value)

  if (props.type === 'checkbox') value = target.checked

  model.value = value
}
</script>

<template>
  <div class="relative z-0 w-full mb-5 group" v-if="variant === 'floating'">
    <input
      :type="props.type"
      :name="props.name"
      :id="props.id"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      :placeholder="props.placeholder ?? ''"
      :value="model"
      :required="props.required ?? false"
      @input="changeInput"
    />
    <label
      v-if="props.label"
      :for="props.id"
      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      {{ props.label }}
    </label>
  </div>
  <div class="mb-5" v-if="variant === 'default'">
    <label
      v-if="props.label"
      :for="props.id"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {{ label }}
    </label>
    <input
      :type="props.type"
      :id="props.id"
      :name="props.name"
      :placeholder="props.placeholder ?? ''"
      :value="model"
      :required="props.required ?? false"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      @input="changeInput"
    />
  </div>
</template>

<style scoped></style>
