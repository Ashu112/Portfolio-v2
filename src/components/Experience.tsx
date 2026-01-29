import { experienceData } from '@/data/experienceData';
import { cn } from '@/utils/cn';
import { Calendar, ChevronRight, MapPin } from 'lucide-react';

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
                          'text-primary-foreground inline-flex rounded-2xl bg-linear-to-r px-4 py-1.5 text-sm font-medium',
                          item.color,
                        )}
                      >
                        {item.role}
                      </div>
                      <h3 className="text-2xl font-bold">{item.companyName}</h3>
                      <div className="text-muted-foreground flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="size-4" />
                          {item.period}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="size-4" />
                          {item.location}
                        </div>
                      </div>
                    </div>

                    {/* highlight */}
                    <ul
                      className={cn(
                        'space-y-3',
                        index % 2 === 0 ? 'md:text-left' : '',
                      )}
                    >
                      {item.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground flex items-start gap-3"
                        >
                          <ChevronRight className="text-primary mt-1 size-4 shrink-0" />
                          <span className="text-sm leading-relaxed">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* spacer for alternating layout */}
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
