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
  ElTableColumn,
  ElAvatar,
  ElAffix,
  ElDivider,
  ElImage,
  ElPagination
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
  ElTableColumn,
  ElAvatar,
  ElAffix,
  ElDivider,
  ElImage,
  ElPagination
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
