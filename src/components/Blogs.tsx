import { blogTopicsData } from '@/data/blogTopics';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';

export default function Blogs() {
  return (
    <section className="py-24 lg:p-32">
      <div className="section-container">
        {/* Blogs Info */}
        <div className="space-y-4">
          <p className="text-primary font-medium">Blog</p>
          <h2 className="text-5xl font-bold">Thoughts & Insights</h2>
          <p className="text-muted-foreground max-w-2xl">
            Coming soon! I&apos;ll be sharing my learnings, tutorials, and
            perspectives on software development, architecture, and the journey
            from frontend to fullstack.
          </p>
        </div>
        {/* Blogs Card */}
        <div className="bg-card mt-16 flex items-center gap-8 rounded-xl p-12">
          <div className="flex size-28 shrink-0 items-center justify-center rounded-3xl bg-pink-400">
            <BookOpen className="text-primary-foreground size-14" />
          </div>
          <div className="space-y-5">
            <div className="bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-full px-4 py-1.5 opacity-40">
              <Clock className="size-4" />
              Coming Soon
            </div>
            <h2 className="text-4xl font-bold">Blog launching soon!</h2>
            <p className="text-muted-foreground flex flex-col leading-relaxed">
              <span>
                I&apos;m preparing in-depth articles on modern web development.
              </span>
              <span>
                Subscribe to be notified when I publish my first article.
              </span>
            </p>
            <div className="space-y-2">
              <p>Upcoming topics:</p>
              <div className="flex flex-wrap items-center gap-2">
                {blogTopicsData.map((topic) => (
                  <div
                    key={topic}
                    className="bg-muted/90 text-muted-foreground rounded-xl px-3 py-2"
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </div>
            <button className="bg-muted/50 border-border inline-flex items-center gap-2 rounded-xl border px-6 py-3">
              <span>Notify Me</span>
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
