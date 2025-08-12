

import React, { useState } from 'react';
import Button from './Button';
import { CHECKOUT_URL, CHECKOUT_URL_BUMP, BONUSES_DATA } from '../constants';
import AnimatedLockIcon from './AnimatedLockIcon';
import GuaranteeSeal from './GuaranteeSeal';
import { GiftIcon } from './IconComponents';

interface OfferSectionProps {
  unlocked: boolean;
}

const OfferSection: React.FC<OfferSectionProps> = ({ unlocked }) => {
  const [orderBump, setOrderBump] = useState(false);
  const finalCheckoutUrl = orderBump ? CHECKOUT_URL_BUMP : CHECKOUT_URL;

  return (
    <section id="oferta" className={`py-16 sm:py-24 transition-colors duration-500 ${unlocked ? 'bg-geometric-pattern' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className={`transition-all duration-700 ease-in-out ${!unlocked ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
             <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-2xl border-4 border-dashed border-brand-purple-light">
                <AnimatedLockIcon unlocked={false} />
                <h3 className="font-display text-2xl font-bold text-brand-text-dark mt-4">Sua Oferta Especial está Quase Pronta!</h3>
                <p className="mt-2 text-lg text-brand-text">Complete o desafio acima para desbloquear seu desconto exclusivo e transformar sua vitalidade.</p>
             </div>
          </div>
          
          <div className={`transition-all duration-700 ease-in-out ${unlocked ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <div className="animate-scale-in-deep text-center text-white">
                  <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                    Hoje, Você Não Compra.<br/>Você <span className="text-brand-gold">INVESTE</span> na Sua Força.
                  </h2>
                  <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                    Chegou o momento de dar ao seu corpo o cuidado que ele merece. E por seu comprometimento, você receberá um presente.
                  </p>

                  <div className="mt-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sm:p-10 shadow-2xl">
                    <div className="mb-6">
                        <span className="font-display text-brand-gold font-bold text-lg bg-yellow-400/20 px-4 py-2 rounded-full border border-yellow-500">
                            🏆 PRÊMIO DESBLOQUEADO 🏆
                        </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white">SEU ACESSO VITALÍCIO COM DESCONTO</h3>
                    <p className="text-gray-400 mt-2">De <del>R$ 67,00</del></p>
                    <p className="mt-2 text-gray-300">Por completar o desafio, seu investimento será de apenas:</p>
                    <p className="font-display text-brand-gold text-6xl sm:text-7xl font-extrabold my-2 animate-pulse-strong" style={{textShadow: '0 0 20px rgba(251, 191, 36, 0.6)'}}>
                        R$ 23,99
                    </p>
                    <p className="text-gray-300 mt-2 font-semibold">Pagamento único, acesso vitalício.</p>

                    <div className="my-8 text-left">
                        <h4 className="font-display text-xl font-bold text-white mb-4">E você ainda leva <span className="text-brand-gold">GRATUITAMENTE:</span></h4>
                        <div className="space-y-3">
                            {BONUSES_DATA.map((bonus, index) => (
                                <div key={index} className="flex items-center bg-gray-700/50 p-3 rounded-lg">
                                    <GiftIcon className="w-6 h-6 text-brand-gold mr-3 flex-shrink-0" />
                                    <span className="text-gray-200">{bonus.title} <span className="text-gray-400">(<del>{bonus.value}</del>)</span></span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 bg-brand-gold text-yellow-900 font-bold p-3 rounded-lg text-center">
                            Valor total dos bônus: R$ 141,00 | HOJE: GRÁTIS
                        </div>
                    </div>

                    {/* Order Bump */}
                    <div 
                      className={`border-2 rounded-lg p-4 my-8 transition-all duration-300 cursor-pointer text-left ${orderBump ? 'border-brand-gold bg-yellow-500/10 ring-2 ring-brand-gold' : 'border-gray-600'}`}
                      onClick={() => setOrderBump(!orderBump)}
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <input 
                              type="checkbox" 
                              id="order-bump"
                              checked={orderBump}
                              readOnly
                              className="h-6 w-6 text-brand-gold bg-gray-700 border-gray-500 rounded focus:ring-brand-gold focus:ring-offset-gray-800"
                            />
                        </div>
                        <label htmlFor="order-bump" className="ml-4 cursor-pointer">
                          <span className="block text-lg font-bold text-white">SIM! Quero adicionar o Guia de Exercícios com Faixa Elástica</span>
                          <span className="block text-sm text-gray-300">para acelerar meus resultados por <span className="font-bold text-brand-gold">apenas R$ 19,90</span>. <span className="text-gray-400">(Normalmente R$ 97,00)</span></span>
                        </label>
                      </div>
                    </div>
                  
                    <Button href={finalCheckoutUrl} className="w-full sm:w-auto text-xl py-5 animate-pulse-glow from-brand-gold via-amber-400 to-yellow-500 text-yellow-900">
                      QUERO MEU ACESSO COM DESCONTO
                    </Button>
                  
                    <div className="mt-8 flex flex-col items-center space-y-4">
                       <GuaranteeSeal />
                       <img src="https://d2p1a2p19zfl0x.cloudfront.net/wp-content/uploads/2023/12/28140411/bandeiras-cartao-credito-1.png" alt="Bandeiras de cartões de crédito aceitas" className="mx-auto h-12 object-contain" />
                      <p className="text-sm text-gray-400 mt-2">Ambiente de pagamento 100% seguro.</p>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default OfferSection;