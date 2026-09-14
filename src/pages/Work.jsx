import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faImage,
    faPlay,
} from '@fortawesome/free-solid-svg-icons';

import projects from '../data/projects.js';

const otherWorkImports = import.meta.glob(
    [
        '../images/other-work/*.jpg',
        '../images/other-work/*.jpeg',
        '../images/other-work/*.png',
        '../images/other-work/*.webp',
    ],
    {
        eager: true,
        import: 'default',
    },
);

const otherWorkImages = Object.entries(otherWorkImports)
    .map(([path, src]) => ({
        path,
        src,
    }))
    .sort((a, b) => a.path.localeCompare(b.path));

export default function Work() {
    const { t } = useTranslation();
    const [filter, setFilter] = useState('all');

    const filteredProjects = useMemo(() => {
        if (filter === 'all') {
            return projects;
        }

        return projects.filter((project) => project.category === filter);
    }, [filter]);

    const getProjectImage = (project) => {
        if (project.image) {
            return project.image;
        }

        if (project.mediaType === 'video' && project.youtubeId) {
            return `https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`;
        }

        return null;
    };

    const handleImageError = (event, project) => {
        if (project.mediaType !== 'video' || !project.youtubeId) {
            return;
        }

        const fallbackImage = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;

        if (event.currentTarget.src === fallbackImage) {
            return;
        }

        event.currentTarget.onerror = null;
        event.currentTarget.src = fallbackImage;
    };

    const getColumnSize = (project, index) => {
        if (project.size === 'large') {
            return 'md:col-span-7';
        }

        if (project.size === 'portrait') {
            return 'md:col-span-5';
        }

        if (project.size === 'square') {
            return 'md:col-span-5';
        }

        if (index % 4 === 1 || index % 4 === 2) {
            return 'md:col-span-5';
        }

        return 'md:col-span-7';
    };

    const getAspectRatio = (project) => {
        if (project.size === 'portrait') {
            return 'aspect-[4/5]';
        }

        if (project.size === 'square') {
            return 'aspect-square';
        }

        if (project.size === 'large') {
            return 'aspect-[16/10]';
        }

        return 'aspect-[16/10]';
    };

    const getPlaceholderBackground = (index) => {
        if (index % 3 === 0) {
            return 'bg-[#29535B]';
        }

        if (index % 3 === 1) {
            return 'bg-[#18383E]';
        }

        return 'bg-[#396F78]';
    };

    return (
        <main className="bg-[#F5F3EE] text-[#111111]">
            <section className="relative overflow-hidden bg-[#111111] px-5 pb-16 pt-32 text-white md:px-10 md:pb-24 md:pt-40">
                <div className="pointer-events-none absolute -right-[15vw] top-[-15vw] h-[55vw] w-[55vw] rounded-full bg-[#29535B] opacity-70 blur-[150px]" />

                <div className="pointer-events-none absolute bottom-[-20vw] left-[10vw] h-[40vw] w-[40vw] rounded-full bg-[#396F78] opacity-30 blur-[150px]" />

                <div className="relative z-10">
                    <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 md:text-sm">
                        LMTAPES
                    </p>

                    <div className="grid gap-10 md:grid-cols-12 md:items-end">
                        <div className="md:col-span-8">
                            <h1 className="text-[clamp(5rem,15vw,14rem)] font-black uppercase leading-[0.7] tracking-[-0.09em]">
                                {t('work.title')}
                            </h1>
                        </div>

                        <div className="md:col-span-4 md:pb-3">
                            <p className="max-w-md text-base leading-relaxed text-white/60 md:text-lg">
                                {t('work.intro')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sticky top-0 z-30 border-b border-black/15 bg-[#F5F3EE]/95 px-5 backdrop-blur md:px-10">
                <div className="flex items-center gap-7 overflow-x-auto py-5 text-xs font-semibold uppercase tracking-[0.2em] md:gap-10 md:text-sm">
                    <button
                        type="button"
                        onClick={() => setFilter('all')}
                        className={`cursor-pointer whitespace-nowrap transition-opacity duration-300 ${
                            filter === 'all'
                                ? 'opacity-100'
                                : 'opacity-35 hover:opacity-70'
                        }`}
                    >
                        {t('work.filters.all')}
                    </button>

                    <button
                        type="button"
                        onClick={() => setFilter('animation')}
                        className={`cursor-pointer whitespace-nowrap transition-opacity duration-300 ${
                            filter === 'animation'
                                ? 'opacity-100'
                                : 'opacity-35 hover:opacity-70'
                        }`}
                    >
                        {t('work.filters.animation')}
                    </button>

                    <button
                        type="button"
                        onClick={() => setFilter('illustration')}
                        className={`cursor-pointer whitespace-nowrap transition-opacity duration-300 ${
                            filter === 'illustration'
                                ? 'opacity-100'
                                : 'opacity-35 hover:opacity-70'
                        }`}
                    >
                        {t('work.filters.illustration')}
                    </button>

                    <span className="ml-auto hidden whitespace-nowrap text-black/30 md:block">
                        {String(filteredProjects.length).padStart(2, '0')}{' '}
                        {t('work.projects')}
                    </span>
                </div>
            </section>

            <section className="px-5 py-20 md:px-10 md:py-32">
                <div className="grid grid-cols-1 gap-x-6 gap-y-20 md:grid-cols-12 md:gap-x-8 md:gap-y-32">
                    {filteredProjects.map((project, index) => {
                        const image = getProjectImage(project);

                        return (
                            <article
                                key={project.slug}
                                className={getColumnSize(project, index)}
                            >
                                <Link
                                    to={`/work/${project.slug}`}
                                    className="group block"
                                >
                                    <div
                                        className={`relative overflow-hidden ${getAspectRatio(project)} ${getPlaceholderBackground(index)}`}
                                    >
                                        {image ? (
                                            <img
                                                src={image}
                                                alt={project.title}
                                                onError={(event) =>
                                                    handleImageError(
                                                        event,
                                                        project,
                                                    )
                                                }
                                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                                            />
                                        ) : (
                                            <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                                                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />

                                                <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full border border-white/10" />

                                                <span className="text-[clamp(5rem,12vw,12rem)] font-black uppercase leading-none tracking-[-0.09em] text-white/10">
                                                    {project.title.charAt(0)}
                                                </span>
                                            </div>
                                        )}

                                        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

                                        <div className="absolute left-5 top-5">
                                            {project.mediaType === 'video' ? (
                                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm text-[#111111] shadow-lg transition-transform duration-300 group-hover:scale-110 md:h-14 md:w-14">
                                                    <FontAwesomeIcon
                                                        icon={faPlay}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm text-[#111111] shadow-lg transition-transform duration-300 group-hover:scale-110 md:h-14 md:w-14">
                                                    <FontAwesomeIcon
                                                        icon={faImage}
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-black/80 via-black/40 to-transparent px-5 pb-5 pt-24 text-white transition-transform duration-500 group-hover:translate-y-0">
                                            <div className="flex items-end justify-between gap-5">
                                                <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                                                    {t('work.viewProject')}
                                                </span>

                                                <FontAwesomeIcon
                                                    icon={faArrowRight}
                                                    className="-rotate-45 text-xl"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-5 border-t border-black/20 pt-4">
                                        <div className="flex items-start justify-between gap-5">
                                            <div>
                                                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#29535B]">
                                                    {t(
                                                        `work.categories.${project.category}`,
                                                    )}
                                                </p>

                                                <h2 className="text-2xl font-semibold tracking-[-0.04em] transition-colors duration-300 group-hover:text-[#29535B] md:text-3xl">
                                                    {project.title}
                                                </h2>
                                            </div>

                                            <span className="shrink-0 pt-1 text-sm text-black/40">
                                                {project.year}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        );
                    })}
                </div>
            </section>

            {filter === 'all' && otherWorkImages.length > 0 && (
                <section className="overflow-hidden bg-[#111111] px-5 py-24 text-white md:px-10 md:py-36">
                    <div className="mb-14 grid gap-8 border-b border-white/20 pb-8 md:mb-20 md:grid-cols-12 md:items-end">
                        <div className="md:col-span-8">
                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#396F78]">
                                LMTAPES
                            </p>

                            <h2 className="text-[clamp(3.5rem,8vw,8rem)] font-semibold uppercase leading-[0.82] tracking-[-0.07em]">
                                {t('work.otherWork.title')}
                            </h2>
                        </div>

                        <div className="md:col-span-4">
                            <p className="max-w-md leading-relaxed text-white/50 md:text-lg">
                                {t('work.otherWork.intro')}
                            </p>
                        </div>
                    </div>

                    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
                        {otherWorkImages.map((image, index) => (
                            <figure
                                key={image.path}
                                className="group relative mb-4 break-inside-avoid overflow-hidden"
                            >
                                <img
                                    src={image.src}
                                    alt={`${t('work.otherWork.imageAlt')} ${index + 1}`}
                                    loading="lazy"
                                    className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                                />

                                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                                <div className="pointer-events-none absolute bottom-3 left-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-60">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                            </figure>
                        ))}
                    </div>
                </section>
            )}

            <section className="relative overflow-hidden bg-[#29535B] px-5 py-24 text-white md:px-10 md:py-36">
                <div className="pointer-events-none absolute -right-[10vw] -top-[20vw] h-[55vw] w-[55vw] rounded-full border border-white/10" />

                <div className="pointer-events-none absolute -right-[2vw] -top-[10vw] h-[35vw] w-[35vw] rounded-full border border-white/10" />

                <div className="relative z-10 grid gap-12 md:grid-cols-12 md:items-end">
                    <div className="md:col-span-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                            {t('work.footerLabel')}
                        </p>
                    </div>

                    <div className="md:col-span-8">
                        <h2 className="max-w-4xl text-[clamp(3rem,7vw,8rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
                            {t('work.footerTitle')}
                        </h2>

                        <Link
                            to="/about"
                            className="group mt-10 inline-flex items-center gap-4 border-b border-white/40 pb-2 text-sm uppercase tracking-[0.2em] transition-colors hover:border-white"
                        >
                            {t('work.aboutLink')}

                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
