import { ArrowDown, FileText } from 'lucide-react';

export default function Resume() {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Background */}
      <div className="from-gradient-start/10 via-gradient-mid/10 to-gradient-end/10 absolute inset-0 bg-gradient-to-r" />
      <div className="section-container">
        <div className="border-border bg-card rounded-3xl border p-10">
          <div className="flex items-center justify-between">
            {/* Resume info */}
            <div className="flex items-center gap-6">
              <div className="gradient-bg-strong flex h-16 w-16 items-center justify-center rounded-2xl">
                <FileText className="text-primary-foreground size-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-foreground text-2xl font-bold">
                  Want my full resume?
                </h3>
                <p className="text-muted-foreground">
                  Download my detailed resume with all experience, skills, and
                  achievements.
                </p>
              </div>
            </div>
            {/* Resume CTA */}
            <a
              href="/Ashutosh_Kumar_Resume.pdf"
              download
              className="text-primary-foreground gradient-bg-strong inline-flex items-center gap-3 rounded-xl px-8 py-4 font-semibold"
            >
              <ArrowDown className="size-5" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
