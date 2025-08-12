import React from 'react';

const GuaranteeSeal: React.FC = () => {
    return (
        <div className="flex items-center p-3 bg-yellow-50 border-2 border-yellow-200 rounded-lg max-w-md mx-auto">
            <div className="flex-shrink-0">
                <svg className="h-12 w-12 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.25 2.25A.75.75 0 009.5 3v1.01a6.74 6.74 0 00-4.183 2.126.75.75 0 00.99 1.124 5.242 5.242 0 016.386 0 .75.75 0 10.99-1.124A6.74 6.74 0 0010.25 4.01V3a.75.75 0 00-.75-.75z" />
                    <path fillRule="evenodd" d="M4 8a.75.75 0 01.67-.745C5.472 7.152 6.47 7 7.5 7h4.25c1.03 0 2.028.152 2.83.255A.75.75 0 0115.25 8v6.25a.75.75 0 01-1.07.69l-2.433-.81a.75.75 0 00-.596 0l-2.433.81A.75.75 0 015.65 15.2l-1.57-4.95a.75.75 0 01.67-.9zM8.5 10.5a.75.75 0 00-1.5 0v.25a.75.75 0 001.5 0v-.25z" clipRule="evenodd" />
                </svg>
            </div>
            <div className="ml-4 text-left">
                <h4 className="font-display text-base font-bold text-yellow-900">Garantia de 7 Dias!</h4>
                <p className="text-sm text-yellow-800">Risco zero! Se não amar o programa, seu dinheiro de volta sem perguntas.</p>
            </div>
        </div>
    );
};

export default GuaranteeSeal;