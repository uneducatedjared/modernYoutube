<template>
  <div class="home">
    <el-row justify="center" align="middle">
      <el-col :span="16">
        <el-card class="welcome-card">
          <template #header>
            <div class="card-header">
              <h2>欢迎使用 Vue 3 + TypeScript</h2>
            </div>
          </template>
          <div class="card-content">
            <el-empty description="这是一个使用 Element Plus 构建的现代化项目">
              <template #image>
                <el-icon :size="60"><Monitor /></el-icon>
              </template>
            </el-empty>
            <div class="mt-4">
              <el-button type="primary" @click="showMessage">
                <el-icon><Message /></el-icon>
                点击我
              </el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'

const showMessage = () => {
  ElMessage({
    message: '欢迎使用 Element Plus！',
    type: 'success',
  })
}
</script>

<style scoped lang="scss">
.home {
  min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f7fa;
}

.welcome-card {
  .card-header {
    text-align: center;
    h2 {
      margin: 0;
      color: var(--el-text-color-primary);
    }
  }

  .card-content {
    text-align: center;
  }
}

.mt-4 {
  margin-top: 1rem;
}
</style> 