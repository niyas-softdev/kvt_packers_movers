'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Logo({ 
  src, 
  alt = "KVT Logo", 
  width = 120, 
  height = 60, 
  className = "", 
  variant = "default", // "default" or "white"
  priority = false 
}) {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={`flex items-center ${className}`}>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
          variant === "white" ? "bg-white text-green-600" : "bg-green-600 text-white"
        }`}>
          <span className="font-bold text-lg">K</span>
        </div>
        <div className="text-left">
          <div className={`text-xl font-bold ${
            variant === "white" ? "text-white" : "text-green-600"
          }`}>KVT</div>
          <div className={`text-xs ${
            variant === "white" ? "text-gray-300" : "text-gray-600"
          }`}>Packers & Movers</div>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      priority={priority}
    />
  );
}
