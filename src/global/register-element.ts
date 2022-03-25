import type { App } from 'vue'
// 引入base.css
import 'element-plus/dist/index.css'
import {
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElInput,
  ElButton,
  ElTag,
  ElCol,
  ElRow,
  ElIcon,
  ElCard,
  ElTable,
  ElTableColumn
} from 'element-plus/lib/components'

const components = [
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElInput,
  ElInput,
  ElButton,
  ElTag,
  ElCol,
  ElRow,
  ElIcon,
  ElCard,
  ElTable,
  ElTableColumn
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
