import About from '@/components/About';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import Expereince from '@/components/Experience';
import Hero from '@/components/Hero';
import Resume from '@/components/Resume';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Expereince />
      <Education />
      <Skills />
      <Resume />
      <Blogs />
      <Contact />
    </main>
  );
}
