
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 40 }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative" style={{ width: size * 1.5, height: size * 1.5 }}>
        {/* Slogan Arc - Simplified for UI integration */}
        <svg viewBox="0 0 200 100" className="absolute -top-6 left-1/2 -translate-x-1/2 w-[180%] h-auto">
          <path id="curve" d="M 20 80 A 80 80 0 0 1 180 80" fill="transparent" />
          <text className="text-[10px] font-bold fill-slate-700 uppercase tracking-tighter">
            <textPath href="#curve" startOffset="50%" textAnchor="middle">
              Personal Relationship with Medical Excellence
            </textPath>
          </text>
        </svg>

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
      <span className="text-2xl font-black text-[#2d3269] tracking-[0.15em] uppercase -mt-2">Universal</span>
    </div>
  );
};

export default Logo;
