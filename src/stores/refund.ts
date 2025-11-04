import { defineStore } from 'pinia'
import type { IRefund, IRefundState } from '@/stores/types/refund.ts'
import { $API } from '@/assets/js/api.ts'

export const useRefundStore = defineStore('refund', {
  state: (): IRefundState => ({
    refunds: [],
  }),
  getters: {
    getRefunds: (state) => {
      return state.refunds
    },

    getRefundById: (state) => {
      return (id: number) => state.refunds.find(({ refundId }) => refundId === id)
    },
  },
  actions: {
    async fetchRefunds() {
      try {
        const {data} = await $API.get<IRefund[]>('/refunds/me')
        this.refunds = data;
        return true;
      } catch (error) {
        console.log(error)
        return false;
      }
    }
  },
})
