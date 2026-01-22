import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className="min-h-screen">
      <div className="section-container py-20">
        <div className="space-y-10">
          <div className="space-y-6">
            <p className="text-primary text-sm font-medium">EDUCATION</p>
            <h2 className="text-3xl font-bold">Academic Foundation</h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              A strong foundation in Computer Science from one of India&apso;s
              premier institutions.
            </p>
          </div>
          <div className="bg-card grid gap-8 rounded-md px-10 py-8 md:grid-cols-2">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-pink-500">
              <GraduationCap className="h-10 w-10 text-black" />
            </div>
            <div className="space-y-4">
              <h3>Indian Institute of Technology, Guwahati</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
