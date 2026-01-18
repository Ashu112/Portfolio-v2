import { Github, Linkedin, LucideIcon, Mail, MapPin } from 'lucide-react';

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
            <div>
              <h1>Hi, I&apos;m Ashutosh Kumar</h1>
              <div>Software Engineer</div>
            </div>
            <p>
              Crafting performant, scalable web experiences with a focus on
              clean architecture and delightful user interactions. IIT Guwahati
              alumnus turning complex problems into elegant solutions.
            </p>
            <div className="inline-flex gap-2">
              <MapPin />
              India
            </div>
            <div>
              <button>Explore My Work</button>
              <button>Get in Touch</button>
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
