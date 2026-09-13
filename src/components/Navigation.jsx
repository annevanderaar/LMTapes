import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher.jsx';

export default function Navigation() {
    const { t } = useTranslation();

    return (
        <header className="fixed left-0 top-0 z-50 w-full mix-blend-difference">
            <div className="flex items-center justify-between px-5 py-5 text-white md:px-10 md:py-7">
                <NavLink
                    to="/"
                    className="text-xl font-black uppercase tracking-[-0.05em] transition-opacity duration-300 hover:opacity-50 md:text-2xl"
                >
                    LMTAPES
                </NavLink>

                <div className="flex items-center gap-6 md:gap-10">
                    <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.12em] md:flex">
                        <NavLink
                            to="/work"
                            className="transition-opacity duration-300 hover:opacity-50"
                        >
                            {t('navigation.work')}
                        </NavLink>

                        <NavLink
                            to="/about"
                            className="transition-opacity duration-300 hover:opacity-50"
                        >
                            {t('navigation.about')}
                        </NavLink>

                        <a
                            href="mailto:lisamarijvdland@gmail.com"
                            className="transition-opacity duration-300 hover:opacity-50"
                        >
                            {t('navigation.contact')}
                        </a>
                    </nav>

                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    );
}
