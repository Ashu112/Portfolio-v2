import {
  ArrowDown,
  Github,
  Linkedin,
  LucideIcon,
  Mail,
  MapPin,
} from 'lucide-react';

type SocialLinkTypes = {
  name: string;
  url: string;
  icon: LucideIcon;
}[];

const socialLinks: SocialLinkTypes = [
  { name: 'github', url: 'https://github.com/Ashu112', icon: Github },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/ashutosh-1126',
    icon: Linkedin,
  },
  { name: 'mail', url: 'kashu2611@gmail.com', icon: Mail },
];

export default function Hero() {
  return (
    <section className="min-h-screen">
      <div className="section-container pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Hero left */}
          <div className="space-y-8">
            <div className="text-primary bg-primary/10 border-primary/20 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
              <span className="bg-primary h-2 w-2 rounded-full"></span>
              Open to opportunities
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl leading-tight font-bold sm:text-6xl lg:text-7xl">
                <span className="text-foreground"> Hi, I&apos;m</span>
                <br />
                <span> Ashutosh Kumar</span>
              </h1>
              <p className="text-muted-foreground text-xl sm:text-2xl">
                Software Engineer
              </p>
            </div>
            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
              Crafting performant, scalable web experiences with a focus on
              clean architecture and delightful user interactions. IIT Guwahati
              alumnus turning complex problems into elegant solutions.
            </p>
            <div className="text-muted-foreground flex items-center gap-2">
              <MapPin className="text-primary h-4 w-4" />
              <span>India</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-primary-foreground bg-primary/90 inline-flex items-center gap-2 rounded-xl px-6 py-3"
              >
                <span>Explore My Work</span>
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-muted/50 border-border inline-flex items-center gap-2 rounded-xl border px-6 py-3 font-medium"
              >
                Get in Touch
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <span className="text-muted-foreground text-sm">Find me on</span>
              <div className="flex gap-3">
                {socialLinks.map((item, i) => (
                  <a
                    href={item.url}
                    target="_blank"
                    key={i}
                    className="bg-muted/50 border-border/50 text-muted-foreground rounded-xl border p-2.5"
                  >
                    <item.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Hero right */}
          <div></div>
        </div>
      </div>
    </section>
  );
}
