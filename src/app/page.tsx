import Link from "next/link";
import Header from "../components/header";
import Introduction from "../components/introduction";
import AboutMe from "../components/aboutMe";
import Skills from "../components/skills";
import ProfessiolnalExperience from "../components/professionalExperience";
import Portflio from "../components/portfolio";

export default function Home() {
  return (
    <main className="bg-[#0E141E] flex flex-col items-center">
      <div className="w-full min-h-screen">
      <Header />
      <Introduction />
      </div>
      <AboutMe />
      <Skills />
      <ProfessiolnalExperience />
      <Portflio />
    </main>
  );
}
