import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ProjectCard from '../components/ProjectCard.jsx';
import projects from '../data/projects.js';

export default function Home() {
    const { t } = useTranslation();

    const featuredProjects = projects.filter((project) => project.featured);

    return (
        <>
            <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-[#111111] px-5 pb-8 pt-32 text-white md:px-10 md:pb-12">
                <div className="absolute right-[-10vw] top-[15vh] h-[45vw] w-[45vw] rounded-full bg-[#ff5638] blur-[120px] opacity-60" />

                <div className="absolute bottom-[-10vw] left-[20vw] h-[35vw] w-[35vw] rounded-full bg-[#8d7cff] blur-[130px] opacity-50" />

                <div className="relative z-10">
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] opacity-60 md:text-sm">
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

                        <div className="text-sm uppercase tracking-[0.2em] text-white/60">
                            ↓ {t('home.scroll')}
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-5 py-24 md:px-10 md:py-36">
                <div className="mb-16 flex items-end justify-between gap-10 border-b border-black/20 pb-5">
                    <h2 className="text-[clamp(3rem,7vw,7rem)] font-semibold leading-none tracking-[-0.07em]">
                        {t('home.selectedWork')}
                    </h2>

                    <Link
                        to="/work"
                        className="hidden text-sm uppercase tracking-[0.2em] transition-opacity hover:opacity-50 md:block"
                    >
                        {t('home.viewAll')} ↗
                    </Link>
                </div>

                <div className="space-y-28">
                    {featuredProjects.map((project, index) => (
                        <div
                            key={project.slug}
                            className={
                                index === 1
                                    ? 'ml-auto max-w-4xl'
                                    : index === 2
                                        ? 'max-w-5xl'
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
                    className="mt-16 inline-flex text-sm uppercase tracking-[0.2em] md:hidden"
                >
                    {t('home.viewAll')} ↗
                </Link>
            </section>

            <section className="bg-[#111111] px-5 py-28 text-white md:px-10 md:py-40">
                <div className="grid gap-16 md:grid-cols-12">
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
                            className="mt-12 inline-flex border-b border-white pb-2 text-sm uppercase tracking-[0.2em]"
                        >
                            {t('home.moreAbout')} ↗
                        </Link>
                    </div>
                </div>
            </section>

            <section className="flex min-h-[70vh] items-end bg-[#ddff00] px-5 py-10 md:px-10 md:py-14">
                <a
                    href="mailto:lisamarijvdland@gmail.com"
                    className="group w-full"
                >
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em]">
                        {t('home.contactLabel')}
                    </p>

                    <div className="flex items-end justify-between gap-5">
                        <h2 className="text-[clamp(4rem,12vw,12rem)] font-black uppercase leading-[0.75] tracking-[-0.08em]">
                            {t('home.letsTalk')}
                        </h2>

                        <span className="pb-2 text-5xl transition-transform duration-300 group-hover:translate-x-3 md:text-8xl">
                            ↗
                        </span>
                    </div>
                </a>
            </section>
        </>
    );
}
