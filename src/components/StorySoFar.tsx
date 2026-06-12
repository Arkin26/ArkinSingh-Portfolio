"use client";

import Image from "next/image";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

type Role = {
  title: string;
  meta: string;
  bullets?: string[];
};

type Entry = {
  company: string;
  current?: boolean;
  image: string;
  /** White pad behind the logo — useful for logos with transparency. */
  whiteBg?: boolean;
  roles: Role[];
};

const ENTRIES: Entry[] = [
  {
    company: "Media Agency",
    current: true,
    image: "/logos/mediaagency.gif",
    roles: [
      {
        title: "Co-Founder",
        meta: "Feb 2024 - Present · Remote · Full-Time",
        bullets: [
          "Handles sales and software development work",
          "Catered 100+ clients globally",
          "Brought in sales totalling over $7000+",
          "Created multiple websites and softwares for clients",
        ],
      },
    ],
  },
  {
    company: "Education",
    current: true,
    image: "/logos/iiitn.webp",
    whiteBg: true,
    roles: [
      {
        title: "Bachelor of Technology",
        meta: "2023 - Present · IIIT Nagpur · CSE",
      },
    ],
  },
];

function Avatar({
  src,
  alt,
  whiteBg,
}: {
  src: string;
  alt: string;
  whiteBg?: boolean;
}) {
  return (
    <div
      className={`relative h-8 w-8 shrink-0 overflow-hidden rounded-md ring-1 ring-neutral-200 dark:ring-neutral-800 ${
        whiteBg ? "bg-white" : ""
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={whiteBg ? "object-contain p-1" : "object-cover"}
        sizes="32px"
      />
    </div>
  );
}

// Pulsing presence indicator — signals a currently-active role.
function LiveDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neutral-500 opacity-75 dark:bg-neutral-400" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-neutral-500 dark:bg-neutral-400" />
    </span>
  );
}

function RoleBlock({ role }: { role: Role }) {
  const [open, setOpen] = useState(true);
  const expandable = !!role.bullets?.length;

  return (
    <div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 sm:text-lg">
            {role.title}
          </h4>
          <p className="mt-1 text-sm text-neutral-500">{role.meta}</p>
        </div>
        {expandable && (
          <button
            type="button"
            aria-label={open ? "Collapse" : "Expand"}
            onClick={() => setOpen((v) => !v)}
            className="mt-0.5 text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-200"
          >
            <FiChevronDown
              className={`text-base transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>

      {expandable && open && (
        <ul className="mt-4 space-y-3 pl-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:text-base sm:leading-7">
          {role.bullets!.map((b) => (
            <li key={b} className="flex gap-2.5">
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-neutral-500 dark:bg-neutral-400" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function StorySoFar() {
  return (
    <section className="space-y-6">
      <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200 sm:text-xl">
        Story So Far
      </h2>

      <div className="space-y-8">
        {ENTRIES.map((entry) => (
          <div key={entry.company} className="flex gap-3">
            <div className="relative">
              <Avatar
                src={entry.image}
                alt={entry.company}
                whiteBg={entry.whiteBg}
              />
              {/* Curved connector from the logo down into the role. */}
              <span className="absolute left-[15px] top-[32px] h-4 w-[22px] rounded-bl-[10px] border-b border-l border-neutral-300 dark:border-neutral-700" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold text-neutral-900 dark:text-neutral-100 sm:text-lg">
                  {entry.company}
                </span>
                {entry.current && <LiveDot />}
              </div>

              <div className="mt-3 space-y-5">
                {entry.roles.map((role) => (
                  <RoleBlock key={role.title} role={role} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
