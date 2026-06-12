"use client";

import { useState } from "react";
import { FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineDocumentText, HiOutlineEnvelope } from "react-icons/hi2";
import type { ReactNode } from "react";

const EMAIL = "arkinutmal@gmail.com";

type LinkItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

const LINKS: LinkItem[] = [
  { label: "Twitter", href: "https://x.com/arkdesignss", icon: <FaXTwitter /> },
  { label: "GitHub", href: "https://github.com/Arkin26", icon: <FaGithub /> },
  {
    label: "Resume",
    href: "https://drive.google.com/drive/u/0/folders/10v-LrMZ__evfGXnOjtqpVPocuz1hQKE5",
    icon: <HiOutlineDocumentText />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arkin-singh-907343260/",
    icon: <FaLinkedinIn />,
  },
];

const buttonClass =
  "inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-neutral-100/80 px-3 py-1.5 text-sm text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-neutral-200 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 sm:text-base";

export default function ContactButtons() {
  const [emailCopied, setEmailCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(EMAIL);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  }

  return (
    <div className="flex flex-wrap gap-2">
      {LINKS.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
        >
          <span className="text-[15px] text-neutral-500 dark:text-neutral-400 sm:text-[17px]">
            {l.icon}
          </span>
          {l.label}
        </a>
      ))}
      <button type="button" onClick={copyEmail} className={buttonClass}>
        <span className="text-[15px] text-neutral-500 dark:text-neutral-400 sm:text-[17px]">
          <HiOutlineEnvelope />
        </span>
        {emailCopied ? "Email copied" : "Email"}
      </button>
    </div>
  );
}
