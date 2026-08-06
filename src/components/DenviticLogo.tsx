import React from 'react';

interface DenviticLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const DenviticLogo: React.FC<DenviticLogoProps> = ({
  className = '',
  variant = 'color',
  showTagline = false,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: { icon: 'h-8 w-8', text: 'text-lg', tagline: 'text-[9px]' },
    md: { icon: 'h-10 w-10', text: 'text-2xl', tagline: 'text-[11px]' },
    lg: { icon: 'h-14 w-14', text: 'text-3xl', tagline: 'text-[13px]' },
  };

  const textColors = {
    color: 'text-slate-900',
    light: 'text-white',
    dark: 'text-slate-900',
  };

  const taglineColors = {
    color: 'text-[#235347]',
    light: 'text-emerald-200',
    dark: 'text-[#163832]',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Geometric Denvitic Symbol */}
      <div className={`relative flex items-center justify-center ${sizeClasses[size].icon} transition-transform duration-300 hover:scale-105 shrink-0`}>
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Top Inverted Triangle */}
          <path
            d="M 183 128 H 398 C 405 128 409 136 404 141 L 298 263 C 294 268 286 268 282 263 L 177 141 C 172 136 176 128 183 128 Z"
            fill="#4D7B6C"
          />

          {/* Main Left Wing */}
          <path
            d="M 65 137 C 65 131 72 127 77 131 L 293 328 C 295 330 298 330 300 328 L 434 214 C 439 210 446 214 446 220 V 395 C 446 403 440 410 432 410 H 79 C 71 410 65 403 65 395 V 137 Z"
            fill="#528374"
          />

          {/* Top-Right Lighter Flap */}
          <path
            d="M 293 328 L 435 213 C 441 208 446 213 446 219 V 358 L 293 328 Z"
            fill="#75A091"
          />

          {/* Bottom-Right Darker Shadow Polygon */}
          <path
            d="M 200 410 L 446 219 V 395 C 446 403 440 410 432 410 H 200 Z"
            fill="#365C50"
          />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <span className={`font-heading font-extrabold tracking-tight uppercase ${sizeClasses[size].text} ${textColors[variant]}`}>
          DENVITIC
        </span>
        {showTagline && (
          <span className={`font-medium tracking-wide mt-1 ${sizeClasses[size].tagline} ${taglineColors[variant]}`}>
            Tecnologia que cresce com o seu negócio
          </span>
        )}
      </div>
    </div>
  );
};

