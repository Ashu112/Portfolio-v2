import { Award, GraduationCap, MapPin } from 'lucide-react';

const courses: string[] = [
  'Data Structure',
  'Algorithms',
  'System Design',
  'Operating Systems',
  'Computer Networks',
  'DBMS',
];

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
          <div className="bg-card flex max-w-4xl gap-8 rounded-md px-10 py-8">
            <div className="flex h-28 min-w-28 items-center justify-center rounded-2xl bg-pink-600">
              <GraduationCap className="h-16 w-16 text-black" />
            </div>
            <div className="space-y-4">
              {/* Education title */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-pink-600">
                  Indian Institute of Technology, Guwahati
                </h3>
                <p className="text-xl font-semibold">
                  Bachelor of Technology in Computer Science and Engineering
                </p>
              </div>

              {/* education info */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <Award className="text-primary h-6 w-6" />
                  <p className="text-muted-foreground text-lg">Class of 2021</p>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="text-primary h-6 w-6" />
                  <p className="text-muted-foreground text-lg">
                    Guwahati, India
                  </p>
                </div>
              </div>

              {/* Education description */}
              <div className="border-border border-t pt-8">
                <p className="text-muted-foreground text-xl">
                  IIT Guwahati is one of India&apos;s premier engineering
                  institutions, consistently ranked among the top technical
                  universities. The rigorous curriculum and competitive
                  environment shaped my problem-solving approach and technical
                  foundations.
                </p>
              </div>

              {/* Courses Pill */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {courses.map((c) => (
                  <div
                    className="bg-primary/10 text-primary text-medium inline-flex rounded-xl px-2.5 py-1.5 text-sm"
                    key={c}
                  >
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
