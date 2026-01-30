import About from '@/components/About';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Resume />
      <Blogs />
      <Contact />
    </main>
  );
}
