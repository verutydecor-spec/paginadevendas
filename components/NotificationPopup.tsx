
import React from 'react';

interface NotificationPopupProps {
  name: string;
  city: string;
  onClose: () => void;
}

const CheckCircleIcon: React.FC = () => (
    <svg className="w-8 h-8 text-green-500 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const NotificationPopup: React.FC<NotificationPopupProps> = ({ name, city, onClose }) => {
    return (
        <div 
            className="fixed bottom-5 left-5 bg-white rounded-xl shadow-2xl p-4 flex items-center max-w-sm z-50 animate-slide-in"
            role="alert"
            aria-live="assertive"
        >
            <CheckCircleIcon />
            <div>
                <p className="font-bold text-gray-800">{name} de {city}</p>
                <p className="text-sm text-brand-text">acabou de garantir sua vaga!</p>
            </div>
             <button onClick={onClose} className="absolute top-1.5 right-1.5 text-gray-400 hover:text-gray-700 p-1 rounded-full" aria-label="Fechar notificação">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
    );
};

export default NotificationPopup;
