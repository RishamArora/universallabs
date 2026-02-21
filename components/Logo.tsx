
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 40 }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>

      <div className="relative" style={{ width: size*1.35, height: size*1.35 }}>

        {/* Atom Symbol */}
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Orbits */}
          <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="#2d3269" strokeWidth="2" transform="rotate(0 50 50)" />
          <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="#2d3269" strokeWidth="2" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="#2d3269" strokeWidth="2" transform="rotate(120 50 50)" />
          
          {/* Nucleus */}
          <circle cx="50" cy="50" r="10" fill="#fff9c4" />
          
          {/* Electrons */}
          <circle cx="90" cy="50" r="3" fill="#00aeef" />
          <circle cx="30" cy="15" r="3" fill="#00aeef" />
          <circle cx="30" cy="85" r="3" fill="#00aeef" />
        </svg>
      </div>
      <span className="text-xl font-black text-[#2d3269] tracking-[0.15em] uppercase -mt-2">Universal</span>
       <span className="text-xs font-black text-[#2d3269] tracking-[0.08em] uppercase -mt-[2px]">A Unit of Shiva Diagnostics</span>
    </div>
  );
};

export default Logo;
