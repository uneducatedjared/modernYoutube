<!-- components/layout/AppSidebar.vue -->
<script setup lang="ts">
import { useUIStore } from '@/stores/ui'
import { useUserStore } from '@/stores/user'

const uiStore = useUIStore()
const userStore = useUserStore()

const navItems = [
  { title: '首页', icon: 'home' },
  { title: 'Shorts', icon: 'play-circle' },
  { title: '订阅', icon: 'bell' },
  { title: '我', icon: 'user' },
  { title: '历史记录', icon: 'clock' }
]
</script>

<template>
  <aside class="sidebar" :class="{ collapsed: !uiStore.sidebarOpen }">
    <nav>
      <ul>
        <li 
          v-for="item in navItems"
          :key="item.title"
          :class="{ active: uiStore.activeNav === item.title }"
          @click="uiStore.setActiveNav(item.title)"
        >
          <el-icon><component :is="item.icon" /></el-icon>
          <span>{{ item.title }}</span>
        </li>
      </ul>
      
      <div class="login-prompt" v-if="!userStore.isLoggedIn">
        <p>登录即可给视频点赞、发表评论并订阅内容。</p>
        <el-button type="primary" @click="userStore.login">登录</el-button>
      </div>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 240px;
  transition: width 0.3s;
  &.collapsed { width: 72px; }
  
  li {
    padding: 12px 24px;
    cursor: pointer;
    &.active {
      background: rgba(255, 0, 0, 0.1);
      border-left: 3px solid #ff0000;
    }
  }
}
</style>