'use client';
import { useState } from 'react';
import Image from 'next/image';
import { CubeIcon } from '@heroicons/react/24/outline';

export default function SafeImage({
  src,
  alt,
  width,
  height,
  className = '',
  fallbackText = 'Image',
  priority = false,
  fill = false,
  ...props
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center border-2 border-dashed border-gray-300 ${className}`}
        style={fill ? {} : { width: width || '100%', height: height || '100%' }}
      >
        <div className="text-center">
          <CubeIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-600 text-sm font-medium">{fallbackText}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div 
          className={`bg-gray-200 animate-pulse ${className}`}
          style={fill ? {} : { width: width || '100%', height: height || '100%' }}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onError={handleError}
        onLoad={handleLoad}
        priority={priority}
        fill={fill}
        {...props}
      />
    </>
  );
}
