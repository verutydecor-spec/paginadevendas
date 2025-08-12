

import React, { useState } from 'react';
import { QUIZ_DATA } from '../constants';

interface QuizSectionProps {
  onUnlock: () => void;
}

const QuizSection: React.FC<QuizSectionProps> = ({ onUnlock }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswerClick = () => {
    if (currentQuestionIndex < QUIZ_DATA.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setIsCompleted(true);
        onUnlock();
      }, 2500);
    }
  };
  
  const handleReset = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setCurrentQuestionIndex(0);
    setIsAnalyzing(false);
    setIsCompleted(false);
  };

  const handleRedeem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };


  const progressPercentage = ((currentQuestionIndex + 1) / QUIZ_DATA.length) * 100;

  return (
    <section id="desafio" className="py-16 sm:py-24 bg-brand-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 w-full bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200">
            {!isCompleted ? (
                <>
                {!isAnalyzing ? (
                  <div className="animate-fade-in text-center">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-text-dark mb-2">
                        Desafio da Vitalidade
                    </h2>
                     <p className="text-brand-text mb-6">Responda 3 perguntas rápidas para desbloquear uma oferta especial!</p>
                    <h3 className="text-xl md:text-2xl font-semibold text-brand-text-dark mb-6">
                      {QUIZ_DATA[currentQuestionIndex].question}
                    </h3>
                    <div className="space-y-4">
                      {QUIZ_DATA[currentQuestionIndex].answers.map((answer, index) => (
                        <button
                          key={index}
                          onClick={handleAnswerClick}
                          className="w-full bg-brand-purple-light text-brand-purple-dark font-semibold py-4 px-6 rounded-lg text-lg transform transition-all duration-300 hover:scale-105 hover:bg-brand-purple hover:text-white"
                        >
                          {answer.text}
                        </button>
                      ))}
                    </div>
                    {/* Progress Bar */}
                    <div className="mt-8 w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-brand-purple h-2.5 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                    <p className="mt-2 text-sm text-brand-text-light">
                      Passo {currentQuestionIndex + 1} de {QUIZ_DATA.length}
                    </p>
                  </div>
                ) : (
                  <div className="animate-fade-in text-center h-64 flex flex-col justify-center">
                     <svg className="animate-spin h-12 w-12 text-brand-purple mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                     </svg>
                    <h2 className="font-display text-3xl font-bold mb-2 text-brand-text-dark">Analisando suas respostas...</h2>
                    <p className="text-lg text-brand-text">Estamos preparando sua oferta especial!</p>
                  </div>
                )}
                </>
            ) : (
                <div className="animate-scale-in-deep text-center p-4">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-purple-dark">Parabéns! Desafio Concluído!</h2>
                  
                  <div className="my-4 bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-md text-center">
                    <p className="font-bold">Por completar o desafio, você desbloqueou um <span className="underline">DESCONTO EXCLUSIVO!</span></p>
                  </div>

                  <div className="mt-6 text-left p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-display font-bold text-xl text-brand-text-dark">Seu Perfil de Força: <span className="text-red-500">Sinal de Alerta do Corpo</span></h3>
                    <p className="mt-2 text-brand-text">Seu corpo está pedindo atenção. O Pilates na Parede pode ser a virada de chave que você precisa para aliviar as dores e reencontrar a segurança para se mover.</p>
                  </div>
                  
                  <div className="mt-6 flex flex-col items-center gap-4">
                    <a 
                      href="#oferta"
                      onClick={handleRedeem}
                      className="w-full max-w-sm text-center bg-brand-gold text-yellow-900 font-bold text-xl py-4 px-8 rounded-lg shadow-lg transform transition-transform hover:scale-105"
                    >
                      Resgatar meu Prêmio Agora!
                    </a>
                    <a href="#" onClick={handleReset} className="text-sm text-brand-text-light hover:underline">
                      Fazer o teste novamente
                    </a>
                  </div>
                </div>
            )}
          </div>
      </div>
    </section>
  );
};

export default QuizSection;