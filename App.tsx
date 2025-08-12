

import React, { useState, useEffect, useRef } from 'react';
import ProgressBar from './components/ProgressBar';
import HeroSection from './components/HeroSection';
import QuizSection from './components/QuizSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import OfferSection from './components/OfferSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import NotificationPopup from './components/NotificationPopup';
import { NOTIFICATIONS_DATA } from './constants';
import SectionDivider from './components/SectionDivider';
import IdealForSection from './components/IdealForSection';
import StorySection from './components/StorySection';

declare const confetti: any;

const App: React.FC = () => {
  const [currentNotification, setCurrentNotification] = useState<{ name: string; city: string; } | null>(null);
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) {
        const scrollPosition = window.scrollY;
        const currentProgress = (scrollPosition / totalHeight) * 100;
        setProgress(Math.min(100, Math.round(currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let intervalId: number;
    const showRandomNotification = () => {
      const randomIndex = Math.floor(Math.random() * NOTIFICATIONS_DATA.length);
      setCurrentNotification(NOTIFICATIONS_DATA[randomIndex]);

      setTimeout(() => {
        setCurrentNotification(null);
      }, 6000);
    };
    
    const initialTimeoutId = setTimeout(() => {
      showRandomNotification();
      intervalId = window.setInterval(showRandomNotification, 12000 + Math.random() * 8000);
    }, 10000);

    return () => {
      clearTimeout(initialTimeoutId);
      if(intervalId) clearInterval(intervalId);
    };
  }, []);

  const handleUnlock = () => {
    setChallengeCompleted(true);
    
    // Play sound
    audioRef.current?.play().catch(error => console.error("Audio play failed", error));

    // Confetti effect
    if (typeof confetti === 'function') {
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);

        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);
    }
  };

  return (
    <div className="bg-brand-background min-h-screen text-brand-text overflow-x-hidden">
      <ProgressBar progress={progress} />
      
      <HeroSection />
      
      <main>
        <BenefitsSection />
        <SectionDivider />
        <IdealForSection />
        <SectionDivider color="bg-brand-background" inverted />
        <StorySection />
        <TestimonialsSection />
        <QuizSection onUnlock={handleUnlock} />
        <OfferSection unlocked={challengeCompleted} />
        <FaqSection />
      </main>

      <Footer />

      {currentNotification && (
        <NotificationPopup
          key={currentNotification.name + currentNotification.city}
          name={currentNotification.name}
          city={currentNotification.city}
          onClose={() => setCurrentNotification(null)}
        />
      )}
      <audio ref={audioRef} src="https://cdn.pixabay.com/audio/2022/03/15/audio_2b28b0821f.mp3" preload="auto" />
    </div>
  );
};

export default App;