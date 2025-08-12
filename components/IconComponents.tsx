

import React from 'react';

const commonProps = {
  className: "w-16 h-16 text-brand-purple",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  strokeWidth: "1.5",
  stroke: "currentColor"
};

export const DumbbellIcon: React.FC = () => (
  <svg {...commonProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.63 2.25a14.98 14.98 0 0 0-1.78 4.72m-4.72-1.78a14.983 14.983 0 0 0-6.16 12.12c0 3.43.94 6.63 2.58 9.24m4.8-11.84a6 6 0 0 1-7.38 5.84m12.12-6.16a14.983 14.983 0 0 1 1.78 4.72m-4.72-1.78a14.982 14.982 0 0 1-6.16-12.12A14.983 14.983 0 0 1 8.37 9.63m7.22-7.38a6 6 0 0 0-5.84-7.38v4.8m5.84 2.58a14.983 14.983 0 0 0 6.16 12.12 14.983 14.983 0 0 0-6.16-12.12m-4.8 11.84a6 6 0 0 0 7.38-5.84m-12.12 6.16a14.983 14.983 0 0 0-1.78-4.72" />
  </svg>
);

export const BodyIcon: React.FC = () => (
  <svg {...commonProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const HeartIcon: React.FC = () => (
  <svg {...commonProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

export const SparklesIcon: React.FC = () => (
  <svg {...commonProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM18 13.5a3.375 3.375 0 00-3.375-3.375V9.75a3.375 3.375 0 00-3.375 3.375h1.5a1.875 1.875 0 011.875-1.875v1.875a1.875 1.875 0 01-1.875 1.875h-1.5a3.375 3.375 0 003.375 3.375v-1.5a1.875 1.875 0 01-1.875-1.875v-1.875a1.875 1.875 0 011.875-1.875h1.5z" />
  </svg>
);

export const LockIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);

export const GiftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 00-2 2h2zm0 13l-4-4h8l-4 4zm0 0V8m-4-2h8a2 2 0 002-2v-2a2 2 0 00-2-2h-1a2 2 0 00-2 2v2H9a2 2 0 00-2 2v2a2 2 0 002 2z" />
  </svg>
);