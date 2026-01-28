import { experienceData } from '@/data/experienceData';
import { cn } from '@/utils/cn';

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20">
      <div className="section-container">
        {/* text section */}
        <div className="max-w-3xl space-y-4">
          <p className="text-primary font-medium">Experience</p>
          <h2 className="text-5xl font-bold">Professional Journey</h2>
          <p className="text-muted-foreground leading-relaxed">
            From optimizing enterprise dashboards to building real-time systems,
            each role has shaped my approach to crafting scalable, user-focused
            solutions.
          </p>
        </div>
        {/* timeline section */}
        <div className="relative mt-16">
          {/* timeline line */}
          <div className="timeline-line absolute top-0 bottom-0 left-8 w-px md:left-1/2"></div>
          {/* Experience item */}
          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div
                key={item.companyName}
                className={cn(
                  'relative flex flex-col gap-8',
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
                )}
              >
                {/* timeline dot */}
                <div className="timeline-dot absolute top-8 left-8 z-10 -translate-x-1/2 rounded-full md:left-1/2"></div>

                {/* timeline card */}
                <div
                  className={cn(
                    'flex-1 pl-20 md:pl-0',
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12',
                  )}
                >
                  <div className="bg-card border-border rounded-2xl border p-6 lg:p-8">
                    {/* header */}
                    <div
                      className={cn(
                        'mb-6 flex flex-col gap-4',
                        index % 2 === 0 ? 'md:items-end' : 'md:items-start',
                      )}
                    >
                      <div
                        className={cn(
                          'inline-flex rounded-2xl bg-linear-to-r px-4 py-1.5 text-sm font-medium',
                          item.color,
                        )}
                      >
                        {item.role}
                      </div>
                    </div>

                    {/* highlight */}
                  </div>
                </div>
                {/* spacer */}
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
