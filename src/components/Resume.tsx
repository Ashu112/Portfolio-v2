import { ArrowDown, FileText } from 'lucide-react';

export default function Resume() {
  return (
    <section className="section-container py-16">
      <div className="border-border bg-card/90 rounded-xl border p-10">
        <div className="flex items-center justify-between">
          {/* Resume info */}
          <div className="flex items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-500">
              <FileText className="text-primary-foreground size-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-foreground text-2xl font-semibold">
                Want my full resume?
              </h3>
              <p className="text-muted-foreground text-lg">
                Download my detailed resume with all experience, skills, and
                achievements.
              </p>
            </div>
          </div>
          {/* Resume CTA */}
          <a
            href="/Ashutosh_Kumar_Resume.pdf"
            target="_blank"
            className="text-primary-foreground inline-flex items-center gap-4 rounded-2xl bg-pink-500 px-6 py-4"
          >
            <ArrowDown className="size-5" />
            <span className="text-base font-semibold">Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
