'use client';

import Image from 'next/image';

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ProfileImage({ src, alt, className = '' }: ProfileImageProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          target.style.display = 'none';
        }}
        priority
      />
      {/* Emoji fallback — always rendered behind, shows if image fails */}
      <div className="absolute inset-0 flex items-center justify-center text-7xl pointer-events-none">
        👨‍💻
      </div>
    </div>
  );
}