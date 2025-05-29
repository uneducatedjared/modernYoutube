<!-- App.vue -->
<script setup lang="ts">
import AppHeader from '@/components/mainPage/AppHeader.vue'
import AppSidebar from '@/components/mainPage/AppSidebar.vue'
import { useUIStore } from '@/stores/ui'

const uiStore = useUIStore()
</script>

<template>
  <div class="app-container">
    <AppHeader />
    
    <div class="main-content">
      <AppSidebar />
      
      <main class="content-area">
        <!-- Your page content goes here -->
        <!-- 根据需要在这里放置 router-view 或其他组件 -->
      </main>
    </div>
  </div>
</template>

<style lang="scss">
/* Basic reset or base styles */
body {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.app-container {
  display: grid;
  grid-template-rows: 56px 1fr; /* Header height and remaining content */
  height: 100vh;
  overflow: hidden; /* Prevent scrolling on the main container */
}

.main-content {
  display: grid;
  grid-template-columns: auto 1fr; /* Sidebar width and main content */
  overflow: hidden; /* Prevent main content from causing overflow */
}

.content-area {
  flex: 1;
  padding: 24px;
  overflow-y: auto; /* Enable scrolling for the content area */
}
</style>
