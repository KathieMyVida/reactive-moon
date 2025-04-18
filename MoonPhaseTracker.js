import React, { useEffect, useState } from 'react';

const MoonPhaseTracker = () => {
  const [moonPhase, setMoonPhase] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const phase = getMoonPhase(date);
      setMoonPhase(phase);
    }, 3600000); // Update every hour
    return () => clearInterval(interval);
  }, []);

  const getMoonPhase = (date) => {
    const diff = (date - new Date(2001, 0, 1)) / 1000 / 60 / 60 / 24;
    const phase = (diff / 29.53058867) % 1;
    if (phase < 0.03) return 'New Moon';
    if (phase < 0.25) return 'First Quarter';
    if (phase < 0.5) return 'Full Moon';
    if (phase < 0.75) return 'Last Quarter';
    return 'New Moon';
  };

  return (
    <div>
      <h2>Current Moon Phase: {moonPhase}</h2>
    </div>
  );
};
