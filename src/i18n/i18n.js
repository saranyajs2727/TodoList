import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from "./en.json"
import hi from './hi.json';
import ta from "./ta.json";
import ko from "./ko.json";
import ru from "./ru.json";

i18n.use(initReactI18next).init({
lng: 'en',
fallbackLng: 'en',
resources: {
	en: en,
	hi: hi,
    ta:ta,
	ko:ko,
	ru:ru,
},
interpolation: {
	escapeValue: false // react already safes from xss
}
});

export default i18n;