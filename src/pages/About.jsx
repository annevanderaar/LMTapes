import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function About() {
    const { t } = useTranslation();

    return (
        <main className="bg-[#F5F3EE] text-[#111111]">
            <section className="relative overflow-hidden bg-[#111111] px-5 pb-20 pt-32 text-white md:px-10 md:pb-28 md:pt-40">
                <div className="pointer-events-none absolute -right-[15vw] top-[-15vw] h-[55vw] w-[55vw] rounded-full bg-[#29535B] opacity-70 blur-[150px]" />

                <div className="pointer-events-none absolute bottom-[-20vw] left-[5vw] h-[40vw] w-[40vw] rounded-full bg-[#396F78] opacity-25 blur-[140px]" />

                <div className="relative z-10">
                    <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 md:text-sm">
                        LMTAPES
                    </p>

                    <div className="grid gap-10 md:grid-cols-12 md:items-end">
                        <div className="md:col-span-8">
                            <h1 className="text-[clamp(5rem,15vw,14rem)] font-black uppercase leading-[0.7] tracking-[-0.09em]">
                                {t('about.title')}
                            </h1>
                        </div>

                        <div className="md:col-span-4 md:pb-2">
                            <p className="max-w-md text-lg leading-relaxed text-white/65">
                                {t('about.intro')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-5 py-24 md:px-10 md:py-36">
                <div className="grid gap-16 md:grid-cols-12">
                    <div className="md:col-span-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#29535B]">
                            {t('about.storyLabel')}
                        </p>
                    </div>

                    <div className="md:col-span-8">
                        <div className="max-w-4xl space-y-8">
                            <p className="text-[clamp(2.2rem,4.5vw,5rem)] font-medium leading-[0.98] tracking-[-0.055em]">
                                {t('about.storyTitle')}
                            </p>

                            <div className="grid gap-8 pt-4 text-base leading-8 text-black/65 md:grid-cols-2 md:text-lg">
                                <p>
                                    {t('about.storyOne')}
                                </p>

                                <p>
                                    {t('about.storyTwo')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y border-black/15 px-5 py-20 md:px-10 md:py-28">
                <div className="grid gap-12 md:grid-cols-12">
                    <div className="md:col-span-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#29535B]">
                            {t('about.detailsLabel')}
                        </p>
                    </div>

                    <div className="md:col-span-8">
                        <div className="grid gap-10 sm:grid-cols-2">
                            <div>
                                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-black/35">
                                    {t('about.disciplineLabel')}
                                </p>

                                <p className="text-2xl font-semibold tracking-[-0.03em]">
                                    {t('about.discipline')}
                                </p>
                            </div>

                            <div>
                                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-black/35">
                                    {t('about.educationLabel')}
                                </p>

                                <p className="text-2xl font-semibold tracking-[-0.03em]">
                                    {t('about.education')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-[#29535B] px-5 py-24 text-white md:px-10 md:py-36">
                <div className="pointer-events-none absolute -right-[10vw] -top-[20vw] h-[55vw] w-[55vw] rounded-full border border-white/10" />

                <div className="pointer-events-none absolute -right-[2vw] -top-[10vw] h-[35vw] w-[35vw] rounded-full border border-white/10" />

                <div className="relative z-10 grid gap-12 md:grid-cols-12 md:items-end">
                    <div className="md:col-span-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                            {t('about.contactLabel')}
                        </p>
                    </div>

                    <div className="md:col-span-8">
                        <h2 className="max-w-5xl text-[clamp(3.5rem,8vw,9rem)] font-semibold leading-[0.85] tracking-[-0.07em]">
                            {t('about.contactTitle')}
                        </h2>

                        <a
                            href="mailto:lisamarijvdland@gmail.com"
                            className="group mt-10 inline-flex items-center gap-4 border-b border-white/40 pb-2 text-sm uppercase tracking-[0.2em] transition-colors hover:border-white"
                        >
                            {t('about.contactLink')}

                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
