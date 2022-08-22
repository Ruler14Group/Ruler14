import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import AOS from "aos"
import VueParticles from 'vue-particles'
import 'aos/dist/aos.css'

AOS.init()
const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(VueParticles)

app.mount('#app')
