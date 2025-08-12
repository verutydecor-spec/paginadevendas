import React from 'react';
import { DumbbellIcon, BodyIcon, HeartIcon, SparklesIcon } from './IconComponents';

const benefits = [
  {
    icon: <DumbbellIcon />,
    title: 'Aumento de Força',
    description: 'Tonifique seus músculos e fortaleça seus ossos, combatendo os efeitos da menopausa de forma segura.'
  },
  {
    icon: <BodyIcon />,
    title: 'Melhora da Postura',
    description: 'Alinhe seu corpo, alivie dores nas costas e no pescoço, e sinta-se mais alta e confiante.'
  },
  {
    icon: <HeartIcon />,
    title: 'Alívio de Dores',
    description: 'Diminua dores articulares e tensões musculares com exercícios de baixo impacto e alta eficácia.'
  },
  {
    icon: <SparklesIcon />,
    title: 'Mais Disposição',
    description: 'Aumente seus níveis de energia e vitalidade para aproveitar ao máximo cada momento do seu dia.'
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-text-dark">Transforme seu corpo e sua mente</h2>
          <p className="mt-4 text-lg text-brand-text max-w-2xl mx-auto">
            O Pilates na Parede é mais que um exercício. É um caminho para uma vida com mais saúde, bem-estar e alegria na maturidade.
          </p>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-brand-purple-light mx-auto shadow-md">
                {benefit.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-brand-text-dark">{benefit.title}</h3>
              <p className="mt-2 text-base text-brand-text">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;