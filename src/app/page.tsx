import Header from "@/components/header";
import Introduction from "@/components/introduction";
import AboutMe from "@/components/aboutMe";
import Skills from "@/components/skills";
import ProfessionalExperience from "@/components/professionalExperience";
import Portflio from "@/components/portfolio";
import Footer from "@/components/footer";
import { ThemeProvider } from 'next-themes'

export default function Home() {

  return (
    <ThemeProvider attribute="class">
    <main className="bg-[--bg] flex flex-col items-center text-[--text] w-full overflow-x-hidden">
      <div className="min-w-full min-h-screen flex flex-col">
      <Header />
      <Introduction />
      </div>
      <AboutMe />
      <Skills />
      <ProfessionalExperience />
      <Portflio />
      <Footer />
    </main>
    </ThemeProvider>
  );
}
