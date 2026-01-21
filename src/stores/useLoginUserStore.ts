import { ref, computed, getCurrentInstance } from 'vue'
import { defineStore } from 'pinia'

/**
 * 存储登录用户信息的状态
 */
export const useLoginUserStore = defineStore('loginUser', () => {
    const loginUser = ref<any>({
        userName: '未登录'
    })

    async function fetchLoginUser() {
        // const res = await getCurrentUser()
        // if (res.data.code === 0 && res.data.data) {
        //     loginUser.value = res.data.data
        // }
        // 测试用户登录，3秒后登录成功
        setTimeout(() => {
            loginUser.value = {
                userName: '测试用户',
                id: 1
            }
        }, 3000)
    }

    /**
     * 设置登录用户
     */
    function setLoginUser(newLoginUser: any) {
        loginUser.value = newLoginUser
    }

    const count = ref(0)
    // 定义状态的初始值
    // 定义变量的计算逻辑 getter
    const doubleCount = computed(() => count.value * 2)
    // 定义状态的修改逻辑 action
    function increment() {
        count.value++
    }

  return { loginUser, fetchLoginUser, setLoginUser }
})
