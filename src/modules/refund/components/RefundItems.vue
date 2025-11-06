<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { IRefund } from '@/modules/refund/types.ts'
import AppNotFound from '@/components/AppNotFound.vue'
import CreateRefund from '@/modules/refund/ui/CreateRefund.vue'

const refunds = ref<IRefund[]>([])
const page = ref<number>(1)
const total = ref<number>(refunds.value.length)
const isOpenedModal = ref<boolean>(false)

onMounted(async () => {})
</script>

<template>
  <ul class="" v-if="refunds.length > 0">
    <li v-for="{ title, refundId } in refunds" :id="`${refundId}`" :key="refundId">
      {{ title }}
    </li>
  </ul>
  <section v-else class="mt-10">
    <AppNotFound title="Заявок на возврат не обнаружено" />
    <button
      data-modal-target="refund-create-modal"
      data-modal-toggle="refund-create-modal"
      type="button"
      class="mt-10 cursor-pointer text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      @click="() => (isOpenedModal = !isOpenedModal)"
    >
      Создать запись
    </button>
    <CreateRefund class="mt-15" />
  </section>
</template>

<style scoped></style>
