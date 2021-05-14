import App from './App.svelte'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import './i18n'

const app = new App({
  target: document.body
})

export default app
