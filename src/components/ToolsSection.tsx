"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import NeonLogo from "@/components/icons/NeonLogo";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
  SiDrizzle,
  SiPython,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiC,
  SiHtml5,
  SiCss,
  SiReact,
  SiFastapi,
  SiNodedotjs,
  SiLangchain,
  SiReactquery,
  SiFramer,
  SiGreensock,
  SiSupabase,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiCelery,
  SiN8N,
  SiK6,
  SiGithub,
  SiVercel,
  SiRender,
  SiRailway,
  SiReplit,
  SiPostman,
  SiGit,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Chip({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <span className="mx-1 inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-neutral-100 px-2 py-1 align-middle text-[13px] leading-none text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900/70 dark:text-neutral-200 sm:text-sm">
      <span className="inline-flex items-center text-[14px] sm:text-[15px]">{icon}</span>
      {label}
    </span>
  );
}

const neonIcon = <NeonLogo className="h-[14px] w-auto text-neutral-800 dark:text-neutral-100" />;
const cursorIcon = (
  <Image
    src="/logos/APP_ICON_25D_DARK.png"
    alt=""
    width={16}
    height={16}
    className="rounded-[3px]"
    aria-hidden
  />
);
const sqlIcon = (
  <Image
    src="/logos/icons8-sql-96.png"
    alt=""
    width={16}
    height={16}
    aria-hidden
  />
);
const qdrantIcon = (
  <Image
    src="/logos/qdrant.svg"
    alt=""
    width={16}
    height={16}
    aria-hidden
  />
);

// Compact chip used inside the expanded category grid.
function GridChip({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-neutral-100 px-2.5 py-1.5 text-[13px] leading-none text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900/70 dark:text-neutral-200 sm:text-sm">
      <span className="inline-flex items-center text-[14px] sm:text-[15px]">{icon}</span>
      {label}
    </span>
  );
}

type Item = { icon: ReactNode; label: string };
type Category = { title: string; items: Item[] };

const CATEGORIES: Category[] = [
  {
    title: "Languages",
    items: [
      { icon: <SiPython className="text-[#3776ab]" />, label: "Python" },
      { icon: <SiTypescript className="text-[#3178c6]" />, label: "TypeScript" },
      { icon: <SiJavascript className="text-[#f7df1e]" />, label: "JavaScript" },
      { icon: <SiCplusplus className="text-[#00599c]" />, label: "C++" },
      { icon: <SiC className="text-[#a8b9cc]" />, label: "C" },
      { icon: <SiHtml5 className="text-[#e34f26]" />, label: "HTML" },
      { icon: <SiCss className="text-[#1572b6]" />, label: "CSS" },
      { icon: sqlIcon, label: "SQL" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { icon: <SiReact className="text-[#61dafb]" />, label: "React" },
      { icon: <SiNextdotjs />, label: "Next.js" },
      { icon: <SiFastapi className="text-[#009688]" />, label: "FastAPI" },
      { icon: <SiNodedotjs className="text-[#5fa04e]" />, label: "Node.js" },
      { icon: <SiTailwindcss className="text-[#38bdf8]" />, label: "Tailwind CSS" },
      { icon: <SiLangchain className="text-[#1c3c3c]" />, label: "LangChain" },
      { icon: <SiReactquery className="text-[#ff4154]" />, label: "TanStack Query" },
      { icon: <SiFramer className="text-[#0055ff]" />, label: "Framer Motion" },
      { icon: <SiGreensock className="text-[#88ce02]" />, label: "GSAP" },
    ],
  },
  {
    title: "Databases",
    items: [
      { icon: <SiPostgresql className="text-[#4169e1]" />, label: "PostgreSQL" },
      { icon: <SiSupabase className="text-[#3ecf8e]" />, label: "Supabase" },
      { icon: <SiMongodb className="text-[#47a248]" />, label: "MongoDB" },
      { icon: <SiRedis className="text-[#ff4438]" />, label: "Redis" },
      { icon: qdrantIcon, label: "Qdrant" },
    ],
  },
  {
    title: "Tools",
    items: [
      { icon: <SiDrizzle className="text-[#c5f74f]" />, label: "Drizzle" },
      { icon: <SiPrisma />, label: "Prisma" },
      { icon: neonIcon, label: "NeonDB" },
      { icon: <SiDocker className="text-[#2496ed]" />, label: "Docker" },
      { icon: <SiCelery className="text-[#37814a]" />, label: "Celery" },
      { icon: <SiN8N className="text-[#ea4b71]" />, label: "n8n" },
      { icon: <SiK6 className="text-[#7d64ff]" />, label: "k6" },
    ],
  },
  {
    title: "Platforms / Deployment",
    items: [
      { icon: <SiGithub />, label: "GitHub" },
      { icon: <SiVercel />, label: "Vercel" },
      { icon: <SiRender className="text-[#46e3b7]" />, label: "Render" },
      { icon: <SiRailway />, label: "Railway" },
      { icon: <FaAws className="text-[#ff9900]" />, label: "AWS" },
      { icon: <SiReplit className="text-[#f26207]" />, label: "Replit" },
    ],
  },
  {
    title: "Software",
    items: [
      { icon: cursorIcon, label: "Cursor" },
      { icon: <SiPostman className="text-[#ff6c37]" />, label: "Postman" },
      { icon: <SiGit className="text-[#f05032]" />, label: "Git" },
    ],
  },
];

export default function ToolsSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="space-y-5">
      <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200 sm:text-xl">
        Tools I use? See below
      </h2>

      <p className="font-mono text-sm leading-8 text-neutral-600 dark:text-neutral-400 sm:text-base sm:leading-9">
        My main Tech stack is
        <Chip icon={<SiNextdotjs />} label="Next.js" /> framework with
        <Chip
          icon={<SiTailwindcss className="text-[#38bdf8]" />}
          label="Tailwind CSS"
        />{" "}
        as a styling library,
        <Chip
          icon={<SiTypescript className="text-[#3178c6]" />}
          label="TypeScript"
        />{" "}
        on the backend, for the database I use
        <Chip
          icon={<SiPostgresql className="text-[#4169e1]" />}
          label="Postgres"
        />{" "}
        deployed on
        <Chip icon={neonIcon} label="NeonDB" /> with
        <Chip icon={<SiDrizzle className="text-[#c5f74f]" />} label="Drizzle" />{" "}
        or
        <Chip icon={<SiPrisma />} label="Prisma" /> as an ORM, and I use
        <Chip icon={cursorIcon} label="Cursor IDE" /> for
        creating awesome projects.
      </p>

      {expanded && (
        <div className="space-y-5">
          <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400 sm:text-base">
            Hmm.. you really are curious. Here&apos;s a few more:
          </p>

          <div className="space-y-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.title} className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-500 sm:text-[13px]">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <GridChip
                      key={item.label}
                      icon={item.icon}
                      label={item.label}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="inline-flex items-center gap-1 rounded-md border border-neutral-200 bg-neutral-100/80 px-3 py-1.5 text-sm text-neutral-600 transition-colors hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:text-neutral-200 sm:text-base"
      >
        {expanded ? (
          <>
            <FiChevronLeft className="text-[14px]" /> Show Less
          </>
        ) : (
          <>
            Show All <FiChevronRight className="text-[14px]" />
          </>
        )}
      </button>
    </section>
  );
}
