import React from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ href, children, className = '', onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-block bg-gradient-to-r from-brand-purple-dark to-brand-purple text-white font-bold text-lg py-4 px-10 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${className}`}
    >
      <span className="flex items-center justify-center">
        {children}
        <span className="ml-3 transition-transform duration-300 group-hover:translate-x-2">→</span>
      </span>
    </a>
  );
};

export default Button;