import TopControls from "@/components/TopControls";
import ContactButtons from "@/components/ContactButtons";
import ContributionGraph from "@/components/ContributionGraph";
import ToolsSection from "@/components/ToolsSection";
import StorySoFar from "@/components/StorySoFar";
import ProjectsSection from "@/components/ProjectsSection";
import { getContributions } from "@/lib/github";

function B({ children }: { children: React.ReactNode }) {
  return (
    <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
      {children}
    </strong>
  );
}

export default async function Home() {
  const contributions = await getContributions();

  return (
    <main className="mx-auto w-full max-w-4xl px-6 sm:px-8 py-16 sm:py-24">
      {/* Header */}
      <header className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-200 sm:text-3xl">
            Hi, I&apos;m Arkin Singh
          </h1>
          <div className="mt-2 h-[2px] w-10 rounded-full bg-gradient-to-r from-neutral-500 to-transparent" />
        </div>
        <TopControls />
      </header>

      {/* Intro */}
      <section className="space-y-5 text-base leading-7 text-neutral-600 dark:text-neutral-400 sm:text-lg sm:leading-8">
        <p>
          A <B>22-year-old developer</B> based in <B>India</B>, currently in my
          final year at <B>IIIT Nagpur</B>.
        </p>
        <p>
          For the past 2 years, I&apos;ve run a <B>media agency end-to-end</B>
          , sales, client negotiations, architecture, deployment, all of it.
          I&apos;ve shipped <B>15+ production apps</B> for clients across{" "}
          <B>Europe</B>, with a <B>100% on-time delivery record</B>.
        </p>
        <p>
          That taught me to think like an <B>owner, not just a contributor</B>
          , the why behind a feature matters to me as much as the how.
          <br />
          I&apos;m <B>obsessed</B> with building things that work under{" "}
          <B>real constraints</B>: low memory, tight deadlines, messy
          requirements.
        </p>
        <p>
          Whether it&apos;s a <B>RAG pipeline answering in under a second</B>,
          or a <B>multi-tenant system handling real money</B>, I love solving
          problems that actually <B>move the needle</B>.
        </p>
      </section>

      {/* Contact */}
      <section className="mt-10 space-y-4">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200 sm:text-xl">
          Got an interesting problem to solve? I&apos;m in.
        </h2>
        <ContactButtons />
      </section>

      {/* Contribution graph */}
      <section className="mt-10">
        <ContributionGraph data={contributions} />
      </section>

      {/* Tools */}
      <div className="mt-12">
        <ToolsSection />
      </div>

      {/* Story So Far */}
      <div className="mt-16">
        <StorySoFar />
      </div>

      {/* Projects */}
      <div className="mt-16">
        <ProjectsSection />
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-neutral-500 dark:text-neutral-600">
        © 2026 Arkin Singh
      </footer>
    </main>
  );
}
