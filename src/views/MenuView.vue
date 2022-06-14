<template>
  <div class="container">
    <div class="loginBox">
      <div class="imgDiv">
        <el-avatar :size="100" shape="circle" v-model:src="loginForm.avatarURL"/>
      </div>
      <el-form
        ref="ruleFormRef"
        :model="loginForm"
        label-width="auto"
        :label-position="labelPosition"
        :size="size"
        class="loginForm"
        :rules="rules"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username" placeholder="Please input username"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="Please input password" show-password/>
        </el-form-item>
        <el-form-item class="loginButton">
          <el-button type="primary" @click="login(ruleFormRef)">登录</el-button>
          <el-button>I'm a visitor</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { FormRules, FormInstance, ElMessage } from 'element-plus/es'
import avatarURL from '@/assets/vb.gif'

const ruleFormRef = ref<FormInstance>()
const size = ref('default')
const labelPosition = ref('right')

const loginForm = reactive({
  username: '',
  password: '',
  avatarURL: avatarURL
})

const rules = reactive<FormRules>({
  username: [
    {
      required: true,
      message: 'Please input username',
      trigger: 'blur'
    },
    {
      min: 3,
      max: 10,
      message: 'Length should be 3 to 10',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: 'Please input password',
      trigger: 'blur'
    },
    {
      min: 6,
      max: 16,
      message: 'Length should be 6 to 16',
      trigger: 'blur'
    }
  ]
})

const login = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      ElMessage.error('请按正确的规则填写用户名或密码')
      return false
    }
  })
}
</script>

<style scoped>
.container {
  height: 100%;
  background-color: #282c34;
}

.loginBox {
  width: 350px;
  height: 250px;
  background-color: aliceblue;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 9px;
}

.loginForm {
  width: 100%;
  position: absolute;
  bottom: -25%;
  padding: 0 20px;
  box-sizing: border-box;
}

.imgDiv {
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  position: absolute;
}

.titleLab {
  text-align: center;
  line-height: 100%;
}

.el-form-item {
  margin-top: 10px;
}
</style>
