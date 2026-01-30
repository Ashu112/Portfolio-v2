'use client';

import { projectData } from '@/data/ProjectsData';
import { cn } from '@/utils/cn';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projectData[activeIndex];

  const nextProject = () => {
    setActiveIndex((prev) => prev + 1);
  };

  const previousProject = () => {
    setActiveIndex((prev) => prev - 1);
  };

  return (
    <section id="projects" className="min-h-screen py-32">
      <div className="section-container">
        {/* Project header */}
        <div className="max-w-3xl space-y-4">
          <p className="text-primary font-medium">Projects</p>
          <h2 className="text-5xl font-bold">Featured Work</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            A selection of projects that showcase my approach to solving complex
            problems with clean, performant code. Each project represents real
            challenges and measurable outcomes.
          </p>
        </div>

        {/* Project Highlight */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Project Image */}
          <div className="rounded-2xl">
            <Image
              width={500}
              height={400}
              src={activeProject.image}
              alt={activeProject.title}
              className="aspect-video h-full w-full rounded-2xl object-cover"
            />
          </div>
          {/* Project info */}
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-primary text-sm font-medium">
                Project {activeIndex + 1} / {projectData.length}
              </p>
              <h3 className="text-4xl font-bold">{activeProject.title}</h3>
            </div>

            <div className="space-y-3">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {activeProject.description}
              </p>
              <p className="text-muted-foreground/80 leading-relaxed">
                {activeProject.longDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {activeProject.techStack.map((skill) => (
                <div
                  key={skill}
                  className="border-border bg-card text-primary rounded-full border px-3 py-1.5 text-xs font-bold"
                >
                  {skill}
                </div>
              ))}
            </div>

            <div className="flex gap-6">
              <button className="from-gradient-start text-primary-foreground via-gradient-mid to-gradient-end flex items-center gap-2 rounded-2xl bg-linear-to-r px-4 py-2">
                <ExternalLink className="size-4" />
                <span className="text-sm font-medium">View Project</span>
              </button>
              <button className="bg-muted/60 border-border/60 flex items-center gap-2 rounded-2xl border px-4 py-2">
                <Github className="size-4" />
                <span className="text-sm font-medium">GitHub</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="my-10 flex items-center justify-center gap-4">
          <button
            onClick={previousProject}
            className="bg-card flex h-8 w-8 items-center justify-center rounded-full"
          >
            <ChevronLeft className="size-4" />
          </button>

          {projectData.map((_, index) => (
            <div
              key={index}
              className={cn(
                'bg-muted size-3 rounded-full',
                activeIndex === index
                  ? 'from-gradient-start to-gradient-end w-6 bg-linear-to-r'
                  : '',
              )}
            ></div>
          ))}
          <button
            className="bg-card flex h-8 w-8 items-center justify-center rounded-full"
            onClick={nextProject}
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
        {/* image cards */}
      </div>
    </section>
  );
}
