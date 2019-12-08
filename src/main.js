import Vue from 'vue'
import App from './App.vue'
import 'document-register-element/build/document-register-element'
import vueCustomElement from 'vue-custom-element'

Vue.use(vueCustomElement)

Vue.config.productionTip = false

Vue.customElement('whatsapp-widget', App)