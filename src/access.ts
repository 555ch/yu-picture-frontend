import router from '@/router'
import { useLoginUserStore } from '@/stores/useLoginUserStore'
import { message } from 'ant-design-vue';

// 是否为首次获取登录用户
let firstFetchLoginUser = true;

/**
 * 全局权限校验，每次切换页面时都会执行
 */
router.beforeEach( async (to, from, next) => {
  const loginUserStare = useLoginUserStore();
  let loginUser = loginUserStare.loginUser;
  if(firstFetchLoginUser){
    // 确保页面刷新时，首次加载时，能等待后端返回用户信息后在校验权限
    await loginUserStare.fetchLoginUser();
    loginUser = loginUserStare.loginUser;
    firstFetchLoginUser = false;
  }
  const toUrl = to.path;
  // 可以自己定义权限校验逻辑，比如管理员才能访问 /admin 开头的页面
  if(toUrl.startsWith('/admin')){
    if(!loginUser || loginUser.userRole !== 'admin'){
        message.error('无权限访问');
        next('/user/login?redirect=${to.fullPath}');
        return;
    }
  }
  next();
})