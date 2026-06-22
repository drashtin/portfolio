import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/common/back-to-top";
import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Skills } from "@/sections/skills";
import { Experience } from "@/sections/experience";
import { Projects } from "@/sections/projects";
import { GitHubShowcase } from "@/sections/github-showcase";
import { Contact } from "@/sections/contact";
import { getGitHubData } from "@/lib/github";

// Revalidate the page hourly so the GitHub showcase stays fresh (ISR).
export const revalidate = 3600;

export default async function HomePage() {
  const githubData = await getGitHubData();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHubShowcase data={githubData} />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
