<template>
  <div class="about">
    <el-row justify="center">
      <el-col :span="16">
        <el-card>
          <template #header>
            <div class="card-header">
              <h2>关于我们</h2>
            </div>
          </template>
          <div class="card-content">
            <el-descriptions :column="1" border>
              <el-descriptions-item label="项目名称">
                Modern YouTube Frontend
              </el-descriptions-item>
              <el-descriptions-item label="技术栈">
                Vue 3 + TypeScript + Element Plus
              </el-descriptions-item>
              <el-descriptions-item label="构建工具">
                Vite
              </el-descriptions-item>
              <el-descriptions-item label="状态管理">
                Pinia
              </el-descriptions-item>
            </el-descriptions>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
</script>

<style scoped lang="scss">
.about {
  min-height: calc(100vh - 60px);
  padding: 20px;
  background-color: #f5f7fa;
}

.card-header {
  text-align: center;
  h2 {
    margin: 0;
    color: var(--el-text-color-primary);
  }
}

.card-content {
  padding: 20px 0;
}
</style> 