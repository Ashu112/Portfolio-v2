import { proficiencyData, skillCategories } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen">
      <div className="section-container py-24">
        <div className="space-y-10">
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
                className="bg-card border-border space-y-6 rounded-3xl border p-8"
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
          <div className="bg-card border-border relative overflow-hidden rounded-3xl border p-8">
            <div className="gradient-bg absolute top-0 right-0 h-full w-1/3 opacity-5"></div>
            <h3 className="relative mb-8 text-xl font-semibold">
              Proficiency Levels
            </h3>
            <div className="relative space-y-8">
              {proficiencyData.map((skill) => (
                <div key={skill.name} className="space-y-3">
                  {/* Skill info */}
                  <div className="flex items-center justify-between">
                    <p className="text-foreground font-medium">{skill.name}</p>
                    <p className="text-primary font-semibold">{skill.level}%</p>
                  </div>
                  {/* Skill Precentage bar */}
                  <div className="bg-muted h-3 rounded-full">
                    <div
                      style={{ width: `${skill.level}%` }}
                      className={`h-full rounded-full bg-linear-to-r ${skill.color}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
