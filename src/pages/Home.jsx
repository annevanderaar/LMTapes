import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ProjectCard from '../components/ProjectCard.jsx';
import projects from '../data/projects.js';

export default function Home() {
    const { t } = useTranslation();

    const featuredProjects = projects.filter((project) => project.featured);

    const scrollToWork = () => {
        document.getElementById('selected-work')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <>
            <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-[#111111] px-5 pb-8 pt-32 text-white md:px-10 md:pb-12">
                <div className="absolute right-[-15vw] top-[5vh] h-[55vw] w-[55vw] rounded-full bg-[#29535B] opacity-90 blur-[140px]" />

                <div className="absolute bottom-[-20vw] left-[10vw] h-[45vw] w-[45vw] rounded-full bg-[#396F78] opacity-40 blur-[140px]" />

                <div className="absolute left-[45%] top-[30%] h-[25vw] w-[25vw] rounded-full bg-[#18383E] opacity-50 blur-[120px]" />

                <div className="relative z-10">
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-white/60 md:text-sm">
                        {t('home.eyebrow')}
                    </p>

                    <h1 className="max-w-[1400px] text-[clamp(4rem,14vw,13rem)] font-black uppercase leading-[0.72] tracking-[-0.085em]">
                        Lisa
                        <br />
                        Marij
                    </h1>

                    <div className="mt-10 flex flex-col justify-between gap-6 border-t border-white/30 pt-5 md:flex-row md:items-end">
                        <p className="max-w-md text-lg leading-relaxed text-white/70 md:text-xl">
                            {t('home.intro')}
                        </p>

                        <button
                            type="button"
                            onClick={scrollToWork}
                            className="group flex w-fit cursor-pointer items-center gap-2 text-sm uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-white"
                        >
                            <span className="transition-transform duration-300 group-hover:translate-y-1">
                                ↓
                            </span>

                            {t('home.scroll')}
                        </button>
                    </div>
                </div>
            </section>

            <section className="scroll-mt-20 bg-[#F5F3EE] px-5 py-24 text-[#111111] md:px-10 md:py-36">
                <div
                    id="selected-work"
                    className="mb-16 flex items-end justify-between gap-10 border-b border-black/20 pb-5">
                    <div>
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#29535B]">
                            LMTAPES
                        </p>

                        <h2 className="text-[clamp(3rem,7vw,7rem)] font-semibold leading-none tracking-[-0.07em]">
                            {t('home.selectedWork')}
                        </h2>
                    </div>

                    <Link
                        to="/work"
                        className="hidden text-sm uppercase tracking-[0.2em] transition-opacity hover:opacity-50 md:block"
                    >
                        {t('home.viewAll')} ↗
                    </Link>
                </div>

                <div className="space-y-28 md:space-y-40">
                    {featuredProjects.map((project, index) => (
                        <div
                            key={project.slug}
                            className={
                                index === 1
                                    ? 'ml-auto max-w-4xl'
                                    : index === 2
                                        ? 'max-w-5xl'
                                        : index === 3
                                            ? 'ml-auto max-w-6xl'
                                            : ''
                            }
                        >
                            <ProjectCard
                                project={project}
                                index={index}
                            />
                        </div>
                    ))}
                </div>

                <Link
                    to="/work"
                    className="mt-16 inline-flex border-b border-black pb-2 text-sm uppercase tracking-[0.2em] md:hidden"
                >
                    {t('home.viewAll')} ↗
                </Link>
            </section>

            <section className="relative overflow-hidden bg-[#111111] px-5 py-28 text-white md:px-10 md:py-40">
                <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#29535B] opacity-40 blur-[140px]" />

                <div className="relative z-10 grid gap-16 md:grid-cols-12">
                    <div className="md:col-span-4">
                        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                            {t('home.aboutLabel')}
                        </p>
                    </div>

                    <div className="md:col-span-8">
                        <p className="max-w-5xl text-[clamp(2.5rem,5vw,6rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                            {t('home.aboutText')}
                        </p>

                        <Link
                            to="/about"
                            className="group mt-12 inline-flex items-center gap-4 border-b border-white/40 pb-2 text-sm uppercase tracking-[0.2em] transition-colors hover:border-white"
                        >
                            {t('home.moreAbout')}

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                ↗
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-[#29535B] px-5 py-10 text-white md:px-10 md:py-14">
                <div className="absolute -right-[15vw] -top-[20vw] h-[55vw] w-[55vw] rounded-full border border-white/10" />

                <div className="absolute -right-[5vw] -top-[10vw] h-[35vw] w-[35vw] rounded-full border border-white/10" />

                <a
                    href="mailto:lisamarijvdland@gmail.com"
                    className="group relative z-10 w-full"
                >
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
                        {t('home.contactLabel')}
                    </p>

                    <div className="flex items-end justify-between gap-5">
                        <h2 className="text-[clamp(4rem,12vw,12rem)] font-black uppercase leading-[0.75] tracking-[-0.08em]">
                            {t('home.letsTalk')}
                        </h2>

                        <span className="pb-2 text-5xl transition-transform duration-300 group-hover:translate-x-3 group-hover:-translate-y-3 md:text-8xl">
                            ↗
                        </span>
                    </div>
                </a>
            </section>
        </>
    );
}
