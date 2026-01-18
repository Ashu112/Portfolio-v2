import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
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
                    <p className="text-lg font-medium text-pink-600">
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
                <p className="text-3xl font-bold text-pink-600">3</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-pink-600">20+</p>
                <p className="text-muted-foreground">Projects Shipped</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-pink-600">10k+</p>
                <p className="text-muted-foreground">Users Impacted</p>
              </div>
            </div>
          </div>
        </div>

        {/*Cards section */}
        <div className="grid grid-cols-2"></div>

        {/* Step section */}
        <div className="grid grid-cols-3"></div>
      </div>
    </section>
  );
}
