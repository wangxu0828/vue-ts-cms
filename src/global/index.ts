import type { App } from 'vue'

export function globalRegister(app: App): void {
  console.log(app)
  console.log('完成全局注册功能函数')
}
