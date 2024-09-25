import en from '../../../L/DotVue/learning-center/src/locales/en.json';
import es from '../../../L/DotVue/learning-center/src/locales/es.json';
import {createI18n} from "vue-i18n";

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    globalInjection: true,
    messages: {
        en,
        es
    }
});

export default i18n;
