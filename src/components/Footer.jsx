import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-[#111111] px-5 py-8 text-white md:px-10">
            <div className="flex flex-col gap-5 border-t border-white/20 pt-6 md:flex-row md:items-center md:justify-between">
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                    © {new Date().getFullYear()} LMTAPES
                </div>

                <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                    {t("footer.madeBy")}

                    <a
                        href="https://everlastingwild.nl/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative ml-1 inline-block font-semibold text-white"
                    >
                        Everlasting Wild
                        <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                    </a>
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="https://www.instagram.com/lm.tapes/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                        className="text-xl text-white/60 transition-all duration-300 hover:-translate-y-1 hover:text-white"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>

                    <a
                        href="https://www.youtube.com/@LMtapes"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="YouTube"
                        className="text-xl text-white/60 transition-all duration-300 hover:-translate-y-1 hover:text-white"
                    >
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
