import React from 'react';

const StoryCard: React.FC<{ title: string; imageText: string; color: string }> = ({ title, imageText, color }) => (
  <div className="bg-white rounded-2xl shadow-lg p-4 w-full">
    <h3 className={`font-display text-lg font-bold text-center mb-3 text-${color}`}>{title}</h3>
    <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center p-4">
      <p className="text-center text-gray-500">
        <span className="text-3xl mb-2 block">🖼️</span>
        {imageText}
      </p>
    </div>
  </div>
);

const ArrowIcon: React.FC = () => (
  <svg className="w-12 h-12 text-brand-purple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
  </svg>
);


const StorySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-text-dark">
            Se as palavras "dores", "cansaço" e "instabilidade" fazem parte do seu dia...
          </h2>
          <p className="mt-4 text-lg text-brand-text max-w-3xl mx-auto">
            ...saiba que você não está sozinha. A menopausa traz desafios, mas não precisa ser uma sentença. Existe um caminho suave e poderoso para você se sentir forte, segura e cheia de vida novamente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna da História */}
          <div className="text-left">
            <h3 className="font-display text-3xl font-bold text-brand-purple-dark mb-4">A Virada de Chave da Cláudia</h3>
            <div className="space-y-4 text-brand-text text-lg">
              <p>
                Aos 52 anos, Cláudia sentia que seu corpo não era mais o mesmo. Dores nos joelhos a impediam de caminhar como antes, e o medo de uma queda a assombrava. A falta de energia e as mudanças de humor eram constantes.
              </p>
              <p>
                Com o método do Pilates na Parede, que você está prestes a conhecer, Cláudia fortaleceu suas articulações sem impacto, recuperou o equilíbrio e, o mais importante, a confiança em seu próprio corpo. Ela redescobriu a alegria de se mover sem dor.
              </p>
            </div>
          </div>

          {/* Coluna Antes e Depois */}
          <div className="flex items-center justify-center gap-4 relative">
            <StoryCard title="ANTES" imageText="Mulher sentindo dores e insegurança" color="gray-500" />
            <div className="hidden sm:block">
              <ArrowIcon />
            </div>
            <StoryCard title="DEPOIS" imageText="Mulher se sentindo forte e confiante" color="brand-purple" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
