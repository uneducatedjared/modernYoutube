import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false
  }),
  actions: {
    login() {
      // 模拟登录逻辑
      this.isLoggedIn = true
      alert('用户已登录 (模拟)')
    },
    logout() {
      // 模拟登出逻辑
      this.isLoggedIn = false
      alert('用户已登出 (模拟)')
    }
  }
})