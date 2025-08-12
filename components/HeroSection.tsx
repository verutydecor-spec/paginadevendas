import React from 'react';

const HeroSection: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.href.split('#')[1];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header 
      className="relative pt-32 pb-24 sm:pt-48 sm:pb-32 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop')"}}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-brand-background via-brand-background/70 to-transparent"></div>
      <div className="absolute inset-0 bg-brand-purple/20"></div>

      <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-text-dark tracking-tight">
          O Fim das Dores da Menopausa Começa na <span className="text-brand-purple-dark">Sua Parede</span> 🌸
        </h1>
        <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto text-brand-text-dark font-medium">
          Para mulheres 45+ que buscam uma solução suave e poderosa para dores nas articulações, falta de energia e instabilidade, sem sair de casa.
        </p>
        <div className="mt-10">
           <a
            href="#desafio"
            onClick={handleScroll}
            className="group inline-block bg-gradient-to-r from-brand-purple-dark to-brand-purple text-white font-bold text-xl py-4 px-10 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-pulse-glow"
          >
            <span className="flex items-center justify-center">
              Comece o Desafio e Desbloqueie seu Prêmio
              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-2">✨</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;