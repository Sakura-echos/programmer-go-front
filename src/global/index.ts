import type { App } from 'vue'
import registerElement from './register-element'

// 这里就不再用export default了, 因为以后会有多个配置
export function registerApp(app: App): void {
  registerElement(app)
}
