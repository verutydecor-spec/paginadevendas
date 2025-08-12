import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-text-dark">O que nossas alunas estão dizendo</h2>
          <p className="mt-4 text-lg text-brand-text max-w-2xl mx-auto">
            Mulheres reais, resultados reais. Veja quem já transformou a vida com o programa.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-1">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
              <img className="w-24 h-24 rounded-full mx-auto object-cover shadow-md" src={testimonial.photoUrl} alt={`Foto de ${testimonial.name}`} />
              <blockquote className="mt-6 text-brand-text flex-grow">
                <p>"{testimonial.text}"</p>
              </blockquote>
              <footer className="mt-4">
                <p className="text-lg font-bold text-brand-text-dark">{testimonial.name}</p>
                <p className="text-sm text-brand-purple font-semibold">{testimonial.age} anos</p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;