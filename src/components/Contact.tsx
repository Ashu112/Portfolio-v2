import { contactData } from '@/data/contactData';
import { ContactDataType } from '@/types/generic';
import { ArrowUpRight, Send } from 'lucide-react';
import Link from 'next/link';

function ContactInfoCard({ data }: { data: ContactDataType }) {
  return (
    <>
      <div className="flex items-center gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${data.style}`}
        >
          <data.icon className="size-5" />
        </div>
        <div className="flex-1 space-y-2 text-start">
          <p className="text-muted-foreground">{data.name}</p>
          <p className="text-foreground">{data.value}</p>
        </div>
      </div>
      {data.arrowIcon && <ArrowUpRight />}
    </>
  );
}

export default function Contact() {
  return (
    <section className="relative min-h-screen overflow-hidden py-20">
      {/* Background */}
      <div className="gradient-bg absolute inset-0 opacity-50" />
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
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-start">
            <h4 className="text-2xl font-bold">Get in Touch</h4>
            <p className="text-muted-foreground">
              I&apos;m currently open to new opportunities and exciting
              projects. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>
            <div className="mt-7 space-y-6">
              {contactData.map((data) =>
                data.link ? (
                  <Link
                    key={data.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={data.link}
                    className="border-border bg-card flex items-center justify-between rounded-3xl border p-4"
                  >
                    <ContactInfoCard data={data} />
                  </Link>
                ) : (
                  <div
                    key={data.name}
                    className="border-border bg-card flex items-center justify-between rounded-3xl border p-4"
                  >
                    <ContactInfoCard data={data} />
                  </div>
                ),
              )}
            </div>
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
              <button className="text-primary-foreground gradient-bg-strong flex w-full items-center justify-center gap-4 rounded-xl py-2.5">
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
