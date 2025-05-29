<script setup lang="ts">
// 保持原有 script 部分不变
</script>

<template>
  <header class="app-header">
    <!-- 左侧区域 -->
    <div class="left-section">
      <el-icon class="menu-icon" >
        <component is="menu" />
      </el-icon>
      <img src="../../assets/images/youtube-logo.png" alt="YouTube Logo" class="youtube-logo">
    </div>

    <!-- 中间区域 -->
    <div class="middle-section">
      <div class="search-container">
        <el-input
          placeholder="请输入搜索内容"
          clearable
          class="search-input"
        >
          <template >
            <el-icon><Search /></el-icon>
          </template>
        </el-input>
        <el-button
          circle
          class="voice-search-button"
        >
          <el-icon><Mic /></el-icon>
        </el-button>
        <el-button
          type="primary"
          icon="search"
          class="search-button"
        />
      </div>
    </div>

    <!-- 右侧区域 -->
    <div class="right-section">
      <el-button
        type="primary"
        class="login-button"
      >
        登录
      </el-button>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 56px;
  background-color: #fff;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  gap: 20px; /* 新增间距控制 */
}

/* 左侧区域 */
.left-section {
  display: flex;
  align-items: center;
  min-width: 200px;
  flex-shrink: 0;
}

.menu-icon {
  cursor: pointer;
  font-size: 24px;
  margin-right: 16px;
  padding: 8px;
  transition: background-color 0.2s;
}

.menu-icon:hover {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
}

.youtube-logo {
  height: 20px;
  object-fit: contain;
}

/* 中间区域 */
.middle-section {
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 700px;
}

.search-container {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  gap: 8px;
}

.search-input {
  flex: 1;
  border-radius: 20px;
  overflow: hidden;
}

.search-input :deep(.el-input__wrapper) {
  border-radius: 20px 0 0 20px;
}

.search-button {
  border-radius: 0 20px 20px 0;
  padding: 8px 20px;
}

.voice-search-button {
  background-color: #f8f8f8;
  border: none;
}

.voice-search-button:hover {
  background-color: #f0f0f0;
}

/* 右侧区域 */
.right-section {
  display: flex;
  align-items: center;
  min-width: 160px;
  justify-content: flex-end;
  flex-shrink: 0;
  gap: 16px;
}

.login-button {
  padding: 8px 16px;
  font-weight: 500;
}






</style>