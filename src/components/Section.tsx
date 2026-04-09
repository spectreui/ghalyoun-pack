import React, { forwardRef } from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(({
  title,
  subtitle,
  children,
  className = '',
  id
}, ref) => {
  return (
    <section className={`py-16 ${className}`} ref={ref} id={id}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
            {subtitle && <p className="text-xl text-gray-700 dark:text-gray-400">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
});

Section.displayName = 'Section';

export default Section;
