import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
    };

    return (
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest">
            <button
                type="button"
                onClick={() => changeLanguage('nl')}
                className={
                    i18n.language === 'nl'
                        ? 'opacity-100'
                        : 'opacity-40 transition-opacity hover:opacity-100'
                }
            >
                NL
            </button>

            <span className="opacity-40">/</span>

            <button
                type="button"
                onClick={() => changeLanguage('en')}
                className={
                    i18n.language === 'en'
                        ? 'opacity-100'
                        : 'opacity-40 transition-opacity hover:opacity-100'
                }
            >
                EN
            </button>
        </div>
    );
}
