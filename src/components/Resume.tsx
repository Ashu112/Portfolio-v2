import { ArrowDown, FileText } from 'lucide-react';

export default function Resume() {
  return (
    <section className="py-16">
      <div className="section-container">
        <div className="border-border bg-card rounded-3xl border p-10">
          <div className="flex items-center justify-between">
            {/* Resume info */}
            <div className="flex items-center gap-6">
              <div className="from-gradient-start via-gradient-mid to-gradient-end flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r">
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
              className="text-primary-foreground inline-flex items-center gap-3 rounded-xl bg-pink-500 px-8 py-4 font-semibold"
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
