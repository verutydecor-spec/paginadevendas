
import React from 'react';

interface AnimatedLockIconProps {
  unlocked: boolean;
}

const AnimatedLockIcon: React.FC<AnimatedLockIconProps> = ({ unlocked }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="w-20 h-20 text-gray-400" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      strokeWidth={1.5}
    >
      <g transform-origin="12 7">
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M8 7a4 4 0 118 0v4" 
          className={`transition-transform duration-500 ease-out ${unlocked ? 'animate-unlock-rotate' : ''}`}
        />
      </g>
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M6 21h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" 
      />
    </svg>
  );
};

export default AnimatedLockIcon;