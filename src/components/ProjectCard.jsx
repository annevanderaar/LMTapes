import { Link } from 'react-router-dom';

export default function ProjectCard({ project, index }) {
    const placeholderBackground =
        index % 3 === 0
            ? 'bg-[#29535B]'
            : index % 3 === 1
                ? 'bg-[#396F78]'
                : 'bg-[#18383E]';

    const getProjectImage = () => {
        if (project.image) {
            return project.image;
        }

        if (project.mediaType === 'video' && project.youtubeId) {
            return `https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`;
        }

        return null;
    };

    const handleImageError = (event) => {
        if (project.mediaType !== 'video' || !project.youtubeId) {
            return;
        }

        const fallbackImage = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;

        event.currentTarget.onerror = null;
        event.currentTarget.src = fallbackImage;
    };

    const image = getProjectImage();

    return (
        <Link
            to={`/work/${project.slug}`}
            className="group block"
        >
            <div className="relative overflow-hidden bg-[#D9D5CC]">
                {image ? (
                    <img
                        src={image}
                        alt={project.title}
                        onError={handleImageError}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                ) : (
                    <div
                        className={`relative flex min-h-[400px] items-center justify-center overflow-hidden ${placeholderBackground}`}
                    >
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />

                        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full border border-white/10" />

                        <span className="relative z-10 text-[clamp(3rem,8vw,9rem)] font-black uppercase leading-[0.8] tracking-[-0.08em] text-white/15">
                            {project.title.charAt(0)}
                        </span>
                    </div>
                )}

                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

                <div className="absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                    <div className="flex items-end justify-between bg-gradient-to-t from-black/60 to-transparent p-5 pt-16 text-white">
                        <span className="text-sm uppercase tracking-[0.18em]">
                            {project.category}
                        </span>

                        <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                            ↗
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex items-start justify-between gap-5 pt-4">
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#111111] transition-colors duration-300 group-hover:text-[#29535B] md:text-3xl">
                    {project.title}
                </h3>

                <span className="pt-1 text-sm text-[#111111]/50">
                    {project.year}
                </span>
            </div>
        </Link>
    );
}
