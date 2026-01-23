import { skillCategories } from '@/data/skills';

export default function Skills() {
  return (
    <section className="min-h-screen">
      <div className="section-container py-24">
        <div className="space-y-6">
          {/* Skills Heading */}
          <div className="space-y-4">
            <p className="text-primary text-base font-medium">Skills</p>
            <h2 className="text-5xl font-bold">Technical Arsenal</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A comprehensive toolkit built over 4+ years of shipping production
              applications. Always learning, always improving.
            </p>
          </div>
          {/* skills grid*/}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, i) => (
              <div
                key={i}
                className="bg-card border-border space-y-6 rounded-xl border p-8"
              >
                <div className="flex items-center gap-2">
                  <span>{category.icon}</span>
                  <p>{category.name}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((s, i) => (
                    <div
                      key={i}
                      className="bg-muted inline-flex rounded-xl px-2.5 py-1.5"
                    >
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Proficiency level*/}
          <div></div>
        </div>
      </div>
    </section>
  );
}
