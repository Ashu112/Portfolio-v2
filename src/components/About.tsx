import { CodeXml, Lightbulb, LucideIcon, Rocket, Users } from 'lucide-react';
import Image from 'next/image';

type AboutSectionCardType = {
  heading: string;
  description: string;
  icon: LucideIcon;
}[];

type ValuesType = {
  number: string;
  name: string;
  description: string;
}[];

const aboutSectionCard: AboutSectionCardType = [
  {
    heading: 'Problem First',
    description:
      'I start every project by deeply understanding the problem space. The best solution solves the actual problem—not the most interesting one to build.',
    icon: Lightbulb,
  },
  {
    heading: 'Clean Architecture',
    description:
      'Code should be a pleasure to read and maintain. I believe in modular designs, clear interfaces, and patterns that scale with team growth.',
    icon: CodeXml,
  },
  {
    heading: 'Performance Obsessed',
    description:
      'A 200ms delay feels slow. From Core Web Vitals to bundle optimization, I sweat the details that make experiences feel instant.',
    icon: Rocket,
  },
  {
    heading: 'User-Centric',
    description:
      "Every technical decision should trace back to user impact. Beautiful code means nothing if it doesn't serve real people.",
    icon: Users,
  },
];

const values: ValuesType = [
  {
    number: '01',
    name: 'Ownership',
    description:
      "I treat every project like it's my own. From first commit to production, I'm invested in the outcome.",
  },
  {
    number: '02',
    name: 'Iteration',
    description:
      'Perfect is the enemy of shipped. I build, measure, learn then improve based on real feedback.',
  },
  {
    number: '03',
    name: 'Collaboration',
    description:
      'The best solutions emerge from diverse perspectives. I thrive in cross-functional teams.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background accent */}
      <div className="gradient-bg absolute inset-0 opacity-50" />
      <div className="section-container">
        {/* Image and about */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image container */}
          <div className="relative">
            <div className="relative mx-auto aspect-4/5 max-w-md lg:mx-0">
              <div className="border-border bg-muted relative overflow-hidden rounded-3xl border-2">
                <Image
                  src="/Ashu_profile.png"
                  width={400}
                  height={500}
                  alt="Profile Picture"
                  className="h-full w-full object-cover"
                />
                <div className="absolute right-6 bottom-6 left-6">
                  <div className="bg-card space-y-1 rounded-3xl px-4 py-3">
                    <p className="gradient-text text-lg font-medium">
                      Software Engineer
                    </p>
                    <p className="text-muted-foreground text-xs">
                      IIT GUwahati &apos;21
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide">About Me</p>
              <h2 className="text-4xl font-bold sm:text-5xl">
                How I Think & Build
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I&apos;m a Software Engineer who sees code as craft, not just
                syntax. With a Computer Science degree from IIT Guwahati and
                experience shipping products at scale, I bring both rigor and
                creativity to every challenge.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every project is an opportunity to solve real problems for real
                people—and that purpose shapes every decision I make. I&apos;m
                passionate about building interfaces that feel instant,
                intuitive, and delightful.
              </p>
            </div>
            <div className="border-border mt-8 grid grid-cols-3 gap-6 border-t pt-8">
              <div className="space-y-1">
                <p className="gradient-text text-3xl font-bold">3</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="space-y-1">
                <p className="gradient-text text-3xl font-bold">20+</p>
                <p className="text-muted-foreground">Projects Shipped</p>
              </div>
              <div className="space-y-1">
                <p className="gradient-text text-3xl font-bold">10k+</p>
                <p className="text-muted-foreground">Users Impacted</p>
              </div>
            </div>
          </div>
        </div>

        {/*Cards section */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {aboutSectionCard.map((item, i) => (
            <div
              key={i}
              className="bg-card border-border h-full rounded-2xl border p-8"
            >
              <div className="from-gradient-start to-gradient-end mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-r">
                <item.icon className="text-primary-foreground h-6 w-6" />
              </div>
              <h3 className="text-xl">{item.heading}</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Step section */}
        <div className="mt-20 grid gap-12 lg:grid-cols-3">
          {values.map((item, i) => (
            <div key={i}>
              <h2 className="text-6xl font-bold text-pink-300 opacity-20">
                {item.number}
              </h2>
              <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
