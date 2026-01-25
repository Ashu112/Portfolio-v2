import About from '@/components/About';
import Blogs from '@/components/Blogs';
import Education from '@/components/Education';
import Hero from '@/components/Hero';
import Resume from '@/components/Resume';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Resume />
      <Blogs />
    </main>
  );
}
