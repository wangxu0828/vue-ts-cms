import type { App } from 'vue'
import registerPlugin from './register-properties'

export function globalRegister(app: App): void {
  app.use(registerPlugin)
}
