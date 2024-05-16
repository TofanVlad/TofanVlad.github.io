import { createI18n } from 'vue-i18n'
import en from './en.json'
import ro from './ro.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en, ro
  }
})

export default i18n