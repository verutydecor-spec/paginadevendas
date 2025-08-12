import React from 'react';
import { IDEAL_FOR_DATA } from '../constants';

const CheckIcon: React.FC = () => (
  <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const CrossIcon: React.FC = () => (
  <svg className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const IdealForSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-text-dark">Este programa é para você?</h2>
          <p className="mt-4 text-lg text-brand-text max-w-3xl mx-auto">
            Criamos uma solução específica para um público específico. Veja se você se encaixa no perfil e pode ter os melhores resultados.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Para quem É */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm">
            <h3 className="font-display text-2xl font-bold text-green-800 mb-4">
              É perfeito para você que:
            </h3>
            <ul className="space-y-3">
              {IDEAL_FOR_DATA.idealFor.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon />
                  <span className="text-brand-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Para quem NÃO É */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg shadow-sm">
            <h3 className="font-display text-2xl font-bold text-red-800 mb-4">
              Pode não ser ideal se você:
            </h3>
            <ul className="space-y-3">
              {IDEAL_FOR_DATA.notIdealFor.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CrossIcon />
                  <span className="text-brand-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdealForSection;
