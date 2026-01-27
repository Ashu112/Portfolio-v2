import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="min-h-screen py-20">
      <div className="section-container space-y-6 text-center">
        {/*Contact section content */}
        <div className="space-y-4">
          <p className="text-primary">Contact</p>
          <h2 className="text-4xl font-bold lg:text-5xl">
            Let&apos;s Build Something <br /> <span>Amazing Together</span>{' '}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl leading-relaxed">
            Have a project in mind? Looking for a dedicated developer? I&apos;d
            love to hear from you. Let&apos;s create something extraordinary.
          </p>
        </div>
        {/*Contact section Info and form */}
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-5">
            <h4>Get in Touch</h4>
            <p>
              I&apos;m currently open to new opportunities and exciting
              projects. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>
          </div>
          <div className="bg-card border-border rounded-2xl border p-6">
            <form className="flex flex-col items-start gap-6">
              <label>Your Name</label>
              <input
                placeholder="John Doe"
                className="bg-muted border-border w-full rounded-2xl border px-4 py-2.5"
              />
              <label>Email Address</label>
              <input
                placeholder="john@example.com"
                className="bg-muted border-border w-full rounded-2xl border px-4 py-2.5"
              />
              <label>Your Message</label>
              <textarea
                placeholder="Tell me about your project"
                className="bg-muted border-border w-full rounded-2xl border px-4 py-2.5"
                rows={6}
              />
              <button className="text-primary-foreground flex w-full items-center justify-center gap-4 rounded-xl bg-pink-500 py-2.5">
                <Send />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
