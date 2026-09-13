import { Link } from 'react-router-dom';

export default function ProjectCard({ project, index }) {
    return (
        <Link
            to={`/work/${project.slug}`}
            className="group block"
        >
            <div className="relative overflow-hidden bg-[#d9d5cc]">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                ) : (
                    <div
                        className={`flex min-h-[400px] items-center justify-center ${
                            index % 3 === 0
                                ? 'bg-[#ddff00]'
                                : index % 3 === 1
                                    ? 'bg-[#ff5638]'
                                    : 'bg-[#8d7cff]'
                        }`}
                    >
                        <span className="text-[clamp(3rem,8vw,9rem)] font-black uppercase leading-[0.8] tracking-[-0.08em] opacity-20">
                            {project.title.charAt(0)}
                        </span>
                    </div>
                )}

                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                <div className="absolute bottom-0 left-0 flex w-full translate-y-full items-end justify-between p-5 text-white transition-transform duration-500 group-hover:translate-y-0">
                    <span className="text-sm uppercase tracking-widest">
                        {project.category}
                    </span>

                    <span>↗</span>
                </div>
            </div>

            <div className="flex items-start justify-between gap-5 pt-4">
                <h3 className="text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                    {project.title}
                </h3>

                <span className="pt-1 text-sm opacity-50">
                    {project.year}
                </span>
            </div>
        </Link>
    );
}
