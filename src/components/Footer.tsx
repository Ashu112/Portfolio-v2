'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-border relative border-t py-6">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <motion.span
              className="font-display gradient-text text-2xl font-bold"
              whileHover={{ scale: 1.02 }}
            >
              AK
            </motion.span>
            <p className="text-muted-foreground text-xs">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-muted-foreground flex flex-wrap justify-center gap-6 text-sm">
            {[
              'About',
              'Experience',
              'Projects',
              'Education',
              'Skills',
              'Contact',
            ].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(`#${item.toLowerCase()}`)
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-primary animated-underline transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="bg-muted/50 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary rounded-xl border p-3 transition-all duration-300"
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
