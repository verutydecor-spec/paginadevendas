import React from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-10 bg-brand-purple-light z-50 shadow-md">
      <div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-purple to-brand-purple-dark transition-all duration-300 ease-linear"
        style={{ width: `${progress}%` }}
      ></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <span className="font-bold text-sm text-white tracking-wider" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}>
          SUA JORNADA DE TRANSFORMAÇÃO: {progress}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;