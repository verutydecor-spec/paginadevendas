import React from 'react';

interface SectionDividerProps {
  color?: string;
  inverted?: boolean;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ color = 'bg-brand-background', inverted = false }) => {
  const transformClass = inverted ? 'scale-x-[-1] scale-y-[-1]' : '';

  return (
    <div className={`${color} leading-none -mb-1`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`relative block w-full h-[150px] ${transformClass}`}
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-current text-brand-background"
        ></path>
        <path
          d="M985.66,92.83C906.67,72,823.78,31,741.22,14.02,658.86,2.3,573.07,1.3,490.67,13.23c-58,8.22-114,22.17-172,31.78C258.75,53.4,197.69,59.3,136.34,58.5,88.31,57.8,40.45,49.8,0,32.23V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className="fill-current text-white"
        ></path>
      </svg>
    </div>
  );
};

export default SectionDivider;
