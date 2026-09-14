import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

import projects from '../data/projects.js';

export default function Project() {
    const { slug } = useParams();
    const { t } = useTranslation();

    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#F5F3EE] px-5 text-[#111111]">
                <div className="text-center">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#29535B]">
                        404
                    </p>

                    <h1 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
                        {t('project.notFound')}
                    </h1>

                    <Link
                        to="/work"
                        className="mt-8 inline-flex items-center gap-3 border-b border-black pb-2 text-sm uppercase tracking-[0.2em]"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                        {t('project.backToWork')}
                    </Link>
                </div>
            </main>
        );
    }

    const currentIndex = projects.findIndex(
        (item) => item.slug === project.slug,
    );

    const nextProject =
        projects[(currentIndex + 1) % projects.length];

    return (
        <main className="bg-[#F5F3EE] text-[#111111]">
            <section className="relative overflow-hidden bg-[#111111] px-5 pb-16 pt-32 text-white md:px-10 md:pb-24 md:pt-40">
                <div className="pointer-events-none absolute -right-[15vw] top-[-15vw] h-[55vw] w-[55vw] rounded-full bg-[#29535B] opacity-70 blur-[150px]" />

                <div className="relative z-10">
                    <Link
                        to="/work"
                        className="mb-12 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50 transition-colors duration-300 hover:text-white"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                        {t('project.backToWork')}
                    </Link>

                    <div className="grid gap-10 md:grid-cols-12 md:items-end">
                        <div className="md:col-span-9">
                            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
                                {t(
                                    `work.categories.${project.category}`,
                                )}{' '}
                                · {project.year}
                            </p>

                            <h1 className="max-w-6xl text-[clamp(4rem,11vw,11rem)] font-black uppercase leading-[0.75] tracking-[-0.08em]">
                                {project.title}
                            </h1>
                        </div>

                        <div className="md:col-span-3 md:text-right">
                            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                                LMTAPES
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-5 py-10 md:px-10 md:py-16">
                {project.mediaType === 'video' && project.youtubeId ? (
                    <div className="aspect-video w-full overflow-hidden bg-black">
                        <iframe
                            src={`https://www.youtube.com/embed/${project.youtubeId}?rel=0&modestbranding=1`}
                            title={project.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="h-full w-full border-0"
                        />
                    </div>
                ) : (
                    project.image && (
                        <div className="flex justify-center overflow-hidden bg-[#111111]">
                            <img
                                src={project.image}
                                alt={project.title}
                                className={`h-auto max-h-[85vh] max-w-full ${
                                    project.size === 'portrait'
                                        ? 'object-contain'
                                        : 'w-full object-cover'
                                }`}
                            />
                        </div>
                    )
                )}
            </section>

            <section className="px-5 pb-24 pt-10 md:px-10 md:pb-36 md:pt-16">
                <div className="grid gap-12 md:grid-cols-12">
                    <div className="md:col-span-4">
                        <div className="border-t border-black/20 pt-5">
                            <div className="flex justify-between gap-5">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                                    {t('project.year')}
                                </p>

                                <p className="text-sm">
                                    {project.year}
                                </p>
                            </div>

                            <div className="mt-5 flex justify-between gap-5 border-t border-black/10 pt-5">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                                    {t('project.category')}
                                </p>

                                <p className="text-sm">
                                    {t(
                                        `work.categories.${project.category}`,
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-8">
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#29535B]">
                            {t('project.about')}
                        </p>

                        <p className="max-w-4xl text-[clamp(2rem,4vw,4.5rem)] font-medium leading-[1] tracking-[-0.055em]">
                            {t(`projects.${project.slug}.intro`)}
                        </p>

                        <p className="mt-8 max-w-2xl text-base leading-8 text-black/60 md:text-lg">
                            {t(
                                `projects.${project.slug}.description`,
                            )}
                        </p>
                    </div>
                </div>
            </section>

            {project.gallery?.length > 0 && (
                <section className="bg-[#111111] px-5 py-20 text-white md:px-10 md:py-32">
                    <div className="mb-14 border-b border-white/20 pb-6 md:mb-20">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#396F78]">
                            {t('project.galleryLabel')}
                        </p>

                        <h2 className="text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                            {t('project.galleryTitle')}
                        </h2>

                        {project.galleryIntro && (
                            <p className="mt-6 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
                                {project.galleryIntro}
                            </p>
                        )}
                    </div>

                    <div
                        className={`grid items-start gap-x-5 gap-y-14 ${
                            project.slug ===
                            'the-death-of-imagination'
                                ? 'md:grid-cols-2'
                                : 'sm:grid-cols-2 lg:grid-cols-3'
                        }`}
                    >
                        {project.gallery.map((item, index) => (
                            <figure
                                key={`${project.slug}-${index}`}
                                className="group"
                            >
                                <div className="overflow-hidden bg-white/5">
                                    <img
                                        src={item.image}
                                        alt={`${project.title} ${index + 1}`}
                                        loading="lazy"
                                        className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                                    />
                                </div>

                                {item.caption && (
                                    <figcaption className="mt-5 border-t border-white/15 pt-4">
                                        <p className="max-w-xl whitespace-pre-line text-sm leading-7 text-white/65 md:text-base">
                                            {item.caption}
                                        </p>
                                    </figcaption>
                                )}
                            </figure>
                        ))}
                    </div>
                </section>
            )}

            <section className="relative overflow-hidden bg-[#29535B] px-5 py-20 text-white md:px-10 md:py-28">
                <div className="pointer-events-none absolute -right-[10vw] -top-[15vw] h-[45vw] w-[45vw] rounded-full border border-white/10" />

                <Link
                    to={`/work/${nextProject.slug}`}
                    className="group relative z-10 block"
                >
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                        {t('project.nextProject')}
                    </p>

                    <div className="flex items-end justify-between gap-6">
                        <h2 className="max-w-5xl text-[clamp(3rem,8vw,9rem)] font-semibold uppercase leading-[0.8] tracking-[-0.07em]">
                            {nextProject.title}
                        </h2>

                        <FontAwesomeIcon
                            icon={faArrowRight}
                            className="mb-2 text-3xl transition-transform duration-300 group-hover:translate-x-3 md:text-6xl"
                        />
                    </div>
                </Link>
            </section>
        </main>
    );
}
