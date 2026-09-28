import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineScene() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = (splineApp) => {
    setIsLoading(false);
    // Spline handles animations and interactions for this scene automatically.
  };

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-blue-50/50">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <Spline
        scene="https://prod.spline.design/Comh9kwtv46lC7aX/scene.splinecode"
        onLoad={handleLoad}
        className="w-full h-full"
      />
    </div>
  );
}
