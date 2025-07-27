import Navbar from "./components/maincomponents/Navbar";
import Whoami from "./components/maincomponents/Whoami";
import Contact from "./components/maincomponents/Contact";
import Footer from "./components/maincomponents/Footer";
import Aboutme from "./components/maincomponents/Aboutme";
import SkillsSection from "./components/maincomponents/SkillsSection";
import Projects from "./components/sharedcomponents/three";
import Timeline from "./components/maincomponents/Timeline";

export default function Home() {
  return (
    <div className="relative bg-[#062743]">
      <Navbar />
      <div className="relative">
        <section id="Home">
          <Whoami />
        </section>
        <section>
          <Timeline />
        </section>
        <section id="About"></section>
        <section id="BOUT">
          <Aboutme />
        </section>
        <section>{/* <Certificate /> */}</section>
        <section id="Project">
          <Projects />
        </section>
        <section id="Services"></section>
        <section>
          <SkillsSection />
        </section>
        <section id="Contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  );
}
