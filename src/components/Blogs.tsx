import { BookOpen } from 'lucide-react';

export default function Blogs() {
  return (
    <section className="min-h-screen py-20">
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
        <div className="bg-card mt-16 flex items-center rounded-xl p-8">
          <div className="flex size-28 items-center justify-center rounded-3xl bg-pink-400">
            <BookOpen className="text-primary-foreground size-14" />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
