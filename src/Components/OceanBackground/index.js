import React from 'react';
import Lottie from 'react-lottie';
import oceanAnimation from '../../oceanAnimation.json'; // Importez votre fichier JSON

const OceanBackground = () => {
  const defaultOptions = {
    loop: true, // Répète l'animation
    autoplay: true, // Démarre automatiquement
    animationData: oceanAnimation, // Données JSON de l'animation
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice', // Ajuste l'animation au conteneur
    },
  };

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <Lottie options={defaultOptions} height="100%" width="100%" />
    </div>
  );
};

export default OceanBackground;
