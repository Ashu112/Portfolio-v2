export default function Hero() {
  return (
    <section className="min-h-screen">
      <div className="section-container pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Hero left */}
          <div className="space-y-8">
            <div className="text-primary bg-primary/10 border-primary/20 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
              <span className="bg-primary h-2 w-2 rounded-full"></span>
              Open to opportunities
            </div>
          </div>

          {/* Hero right */}
          <div></div>
        </div>
      </div>
    </section>
  );
}
