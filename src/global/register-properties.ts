import { App } from 'vue'
import UTCDataFormat from '@/utils/date-format'

const registerPlugin = {
  install(app: App) {
    app.config.globalProperties.$fliter = {
      formatUTCTime(value: string) {
        return UTCDataFormat(value)
      }
    }
  }
}
export default registerPlugin
