import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import LanguageSwitcher from './LanguageSwitcher.jsx';

export default function Navigation() {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <header className="fixed left-0 top-0 z-[60] w-full mix-blend-difference">
                <div className="flex items-center justify-between px-5 py-5 text-white md:px-10 md:py-7">
                    <NavLink
                        to="/"
                        onClick={closeMenu}
                        className="text-xl font-black uppercase tracking-[-0.05em] transition-opacity duration-300 hover:opacity-50 md:text-2xl"
                    >
                        LMTAPES
                    </NavLink>

                    <div className="flex items-center gap-5 md:gap-10">
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

                        <button
                            type="button"
                            onClick={() => setMenuOpen((current) => !current)}
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={menuOpen}
                            className="flex h-8 w-8 cursor-pointer items-center justify-center text-xl transition-opacity duration-300 hover:opacity-50 md:hidden"
                        >
                            <FontAwesomeIcon
                                icon={menuOpen ? faXmark : faBars}
                            />
                        </button>
                    </div>
                </div>
            </header>

            <div
                className={`fixed inset-0 z-50 overflow-hidden bg-[#111111] text-white transition-all duration-500 md:hidden ${
                    menuOpen
                        ? 'visible opacity-100'
                        : 'invisible pointer-events-none opacity-0'
                }`}
            >
                <div className="absolute -right-40 -top-32 h-[450px] w-[450px] rounded-full bg-[#29535B] opacity-70 blur-[120px]" />

                <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#396F78] opacity-30 blur-[120px]" />

                <div className="relative flex min-h-screen flex-col justify-between px-5 pb-8 pt-32">
                    <nav className="flex flex-col">
                        <NavLink
                            to="/work"
                            onClick={closeMenu}
                            className="group border-b border-white/20 py-5"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-[clamp(3.5rem,15vw,6rem)] font-black uppercase leading-none tracking-[-0.07em]">
                                    {t('navigation.work')}
                                </span>

                                <span className="text-3xl transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                                    ↗
                                </span>
                            </div>
                        </NavLink>

                        <NavLink
                            to="/about"
                            onClick={closeMenu}
                            className="group border-b border-white/20 py-5"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-[clamp(3.5rem,15vw,6rem)] font-black uppercase leading-none tracking-[-0.07em]">
                                    {t('navigation.about')}
                                </span>

                                <span className="text-3xl transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                                    ↗
                                </span>
                            </div>
                        </NavLink>

                        <a
                            href="mailto:lisamarijvdland@gmail.com"
                            onClick={closeMenu}
                            className="group border-b border-white/20 py-5"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-[clamp(3.5rem,15vw,6rem)] font-black uppercase leading-none tracking-[-0.07em]">
                                    {t('navigation.contact')}
                                </span>

                                <span className="text-3xl transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                                    ↗
                                </span>
                            </div>
                        </a>
                    </nav>

                    <div className="flex items-end justify-between border-t border-white/20 pt-5">
                        <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                                LMTAPES
                            </p>

                            <p className="mt-2 text-sm text-white/60">
                                Animation & Illustration
                            </p>
                        </div>

                        <a
                            href="mailto:lisamarijvdland@gmail.com"
                            className="text-sm text-white/60 transition-colors duration-300 hover:text-white"
                        >
                            Email ↗
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
