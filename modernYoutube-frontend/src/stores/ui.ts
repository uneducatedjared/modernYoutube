import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
  state: () => ({
    sidebarOpen: true,
    activeNav: '首页',
    searchQuery: ''
  }),
  actions: {
    setActiveNav(navItem: string) {
      this.activeNav = navItem
    }
  }
}) 