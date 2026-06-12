"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { FiGlobe, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import {
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiDocker,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiNestjs,
  SiPrisma,
  SiSolana,
} from "react-icons/si";

type Tech = { icon: ReactNode; label: string };

const TECH: Record<string, Tech> = {
  python: { icon: <SiPython className="text-[#3776ab]" />, label: "Python" },
  fastapi: { icon: <SiFastapi className="text-[#009688]" />, label: "FastAPI" },
  postgres: {
    icon: <SiPostgresql className="text-[#4169e1]" />,
    label: "PostgreSQL",
  },
  qdrant: {
    icon: <span className="text-[11px] font-bold text-[#dc244c]">Qd</span>,
    label: "Qdrant",
  },
  docker: { icon: <SiDocker className="text-[#2496ed]" />, label: "Docker" },
  next: {
    icon: <SiNextdotjs className="text-neutral-900 dark:text-neutral-100" />,
    label: "Next.js",
  },
  typescript: {
    icon: <SiTypescript className="text-[#3178c6]" />,
    label: "TypeScript",
  },
  mongodb: { icon: <SiMongodb className="text-[#47a248]" />, label: "MongoDB" },
  tailwind: {
    icon: <SiTailwindcss className="text-[#38bdf8]" />,
    label: "Tailwind CSS",
  },
  react: { icon: <SiReact className="text-[#61dafb]" />, label: "React.js" },
  node: { icon: <SiNodedotjs className="text-[#5fa04e]" />, label: "Node.js" },
  nestjs: { icon: <SiNestjs className="text-[#e0234e]" />, label: "NestJS" },
  prisma: {
    icon: <SiPrisma className="text-neutral-900 dark:text-neutral-100" />,
    label: "Prisma",
  },
  solana: { icon: <SiSolana className="text-[#9945ff]" />, label: "Solana" },
};

type Project = {
  name: string;
  description: string;
  image: string;
  tech: string[];
  live: string;
  github: string;
};

const PROJECTS: Project[] = [
  {
    name: "LegalMind",
    description:
      "A production grade legal AI assistant that retrieves and cites relevant case documents in real-time, delivering accurate answers in under 1.5 seconds while running efficiently on minimal infrastructure.",
    image: "/projects/1.png",
    tech: ["python", "fastapi", "postgres", "qdrant", "docker"],
    live: "https://law-rag-production.up.railway.app/",
    github: "https://github.com/Arkin26/Law-RAG",
  },
  {
    name: "Taxi Software",
    description:
      "A multi-tenant taxi fleet management SaaS supporting 50+ concurrent operators with role based access and automated financial settlements, optimized with Docker for fast, lightweight deployments.",
    image: "/projects/2.png",
    tech: ["next", "typescript", "mongodb", "tailwind"],
    live: "https://taxi-saas-curq.vercel.app/",
    github: "https://github.com/Arkin26/Taxi-Saas",
  },
  {
    name: "Quizoma",
    description:
      "An AI powered tool that turns any PDF into structured, accurate quizzes using an optimized LLM pipeline, fine tuned for high context retention and efficient token usage.",
    image: "/projects/3.png",
    tech: ["python", "react", "node"],
    live: "https://q-frontend-75dl.vercel.app/",
    github: "https://github.com/Arkin26/Quizoma",
  },
  {
    name: "K-Intent",
    description:
      "Create and verify non-custodial crypto payment intents across Solana and EVM, settle funds directly to merchant treasuries, and track transactions with dashboards and webhooks.",
    image: "/projects/4.png",
    tech: ["typescript", "nestjs", "next", "react", "prisma", "postgres", "solana"],
    live: "https://kira-clone-frontend.onrender.com/",
    github: "https://github.com/Arkin26/kira-clone",
  },
];

function TechBadge({ tech, index }: { tech: Tech; index: number }) {
  return (
    <div
      className={`group/tech relative flex h-7 items-center rounded-full border border-neutral-300 bg-neutral-100 transition-[margin,background-color] duration-300 ease-out hover:z-10 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800 ${
        index > 0 ? "-ml-2 hover:ml-0" : ""
      }`}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center text-[14px]">
        {tech.icon}
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-[13px] leading-none text-neutral-800 opacity-0 transition-all duration-300 ease-out group-hover/tech:max-w-[160px] group-hover/tech:pr-3 group-hover/tech:opacity-100 dark:text-neutral-200">
        {tech.label}
      </span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-3 dark:border-neutral-800 dark:bg-neutral-900/40 lg:flex-row lg:items-stretch">
      <div className="relative aspect-[16/9] w-full shrink-0 self-start overflow-hidden rounded-lg ring-1 ring-neutral-200 dark:ring-neutral-800 lg:w-[48%]">
        <Image
          src={project.image}
          alt={`${project.name} preview`}
          fill
          sizes="(max-width: 1024px) 100vw, 48vw"
          className="object-cover object-top"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 sm:text-lg">
          {project.name}
        </h3>

        <p className="mt-1 font-mono text-[13px] leading-5 text-neutral-600 dark:text-neutral-400">
          {project.description}
        </p>

        <div className="mt-3 flex items-center">
          {project.tech.map((key, i) => {
            const tech = TECH[key];
            if (!tech) return null;
            return <TechBadge key={key} tech={tech} index={i} />;
          })}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-neutral-100/80 px-3 py-1.5 text-sm text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-neutral-200 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
          >
            <span className="text-[15px] text-neutral-500 dark:text-neutral-400">
              <FiGlobe />
            </span>
            Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-neutral-100/80 px-3 py-1.5 text-sm text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-neutral-200 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
          >
            <span className="text-[15px] text-neutral-500 dark:text-neutral-400">
              <FaGithub />
            </span>
            Github
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <section className="space-y-6">
      <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200 sm:text-xl">
        Curious? Check out my projects.
      </h2>

      <div className="space-y-5">
        {visible.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>

      <div className="flex justify-center pt-2">
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="inline-flex items-center gap-1 rounded-md border border-neutral-200 bg-neutral-100/80 px-4 py-1.5 text-sm text-neutral-700 transition-colors hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:text-neutral-100 sm:text-base"
        >
          {showAll ? (
            <>
              View Less <FiChevronUp className="text-[14px]" />
            </>
          ) : (
            <>
              View All <FiChevronDown className="text-[14px]" />
            </>
          )}
        </button>
      </div>
    </section>
  );
}
