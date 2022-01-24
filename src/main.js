import { createApp } from 'vue'
import App from './App.vue'
import { GlobalComponents } from "./ChGlobalComponents"

let app = createApp(App)
for (let key in GlobalComponents) {
    app.component(key, GlobalComponents[key])
}
app.mount('#app')