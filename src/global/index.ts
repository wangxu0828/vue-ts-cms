import type { App } from 'vue'

export function globalRegister(app: App): void {
  console.log(app)
}
