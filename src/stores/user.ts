import { defineStore } from 'pinia'
import type { IUser, IUserState } from '@/stores/types/user.ts'
import { $API } from '@/assets/js/api.ts'

export const useUserStore = defineStore('user', {
  state: (): IUserState => ({
    user: null,
  }),

  getters: {
    getUser(): IUser | null {
      return this.user
    },

    getUserName(): string | undefined {
      return this.user?.name
    },

    isAdmin(): boolean {
      return this.user?.role === 'admin'
    },
  },

  actions: {
    async fetchUser() {
      try {
        const { data } = await $API.get<IUser>('/users/login')
        console.log('Check login in user store, ', data)
        this.user = data
        return true
      } catch (error) {
        return false
      }
    },
  },
})
