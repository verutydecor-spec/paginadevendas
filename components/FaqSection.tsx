import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import { FaqItem as FaqItemType } from '../types';

interface FaqItemProps {
  item: FaqItemType;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-brand-border py-6">
      <dt>
        <button onClick={onClick} className="w-full flex justify-between items-center text-left text-brand-text">
          <span className="text-lg font-medium text-brand-text-dark">{item.question}</span>
          <span className="ml-6 h-7 flex items-center">
            <svg className={`h-6 w-6 transform transition-transform duration-300 text-brand-purple ${isOpen ? '-rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </dt>
      <dd className={`mt-2 pr-12 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="text-base text-brand-text pt-2">{item.answer}</p>
      </dd>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-brand-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-center text-3xl sm:text-4xl font-extrabold text-brand-text-dark">
          Perguntas Frequentes
        </h2>
        <div className="mt-12">
          <dl className="space-y-2">
            {FAQ_DATA.map((faq, index) => (
              <FaqItem 
                key={index} 
                item={faq}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;