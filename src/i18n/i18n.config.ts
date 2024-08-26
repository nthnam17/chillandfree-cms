/** ./i18n/i18n.config.ts */
import vi from './locales/vi.json';

import { config } from '#imports';

const LANGUAGE_SUPPORT = config.APP_SUPPORTED_LOCALES;

export default defineI18nConfig(() => ({
    legacy: false,
    locales: [LANGUAGE_SUPPORT],
    locale: config.APP_DEFAULT_LOCALE,
    fallbackLocale: config.APP_FALLBACK_LOCALE,
    messages: {
        vi,
    },
}));
