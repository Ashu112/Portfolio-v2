import { experienceData } from '@/data/expereinceData';

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
        <div className="relative">
          {/* timeline line */}
          <div className="absolute top-0 bottom-0 left-8 w-px bg-white md:left-1/2"></div>
          {/* Experience item */}
          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div
                key={item.companyName}
                className={`relative flex flex-col gap-8 md:flex-row`}
              >
                {/* timeline dot */}
                <div className="absolute top-0 bottom-0 left-8 rounded-full bg-red-500 md:left-1/2"></div>

                {/* timeline card */}
                <div className="flex-1">
                  <div className="bg-card border-border rounded-2xl border p-6 lg:p-8">
                    {/* header */}
                    <div className="flex flex-col">
                      <div
                        className={`inline-flex rounded-2xl bg-linear-to-r ${item.color} px-4 py-1.5 text-sm font-medium`}
                      >
                        {item.role}
                      </div>
                    </div>

                    {/* highlight */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
