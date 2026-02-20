
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col items-start gap-4 mb-8">
              <Logo className="invert" size={30} />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Pioneering a personal relationship with medical excellence. Providing premium diagnostic care since 2018.
            </p>
          </div>
          
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-[#00aeef]">Quick Links</h3>
            <ul className="space-y-4 text-slate-400 text-sm font-bold uppercase tracking-wider">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Universal</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Center</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Book Online</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-[#00aeef]">Specialties</h3>
            <ul className="space-y-4 text-slate-400 text-sm font-bold uppercase tracking-wider">
              <li>Ultrasound</li>
              <li>Advanced Lab</li>
              <li>Radiology Hub</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-[#00aeef]">Contact Center</h3>
            <ul className="space-y-5 text-slate-400 text-sm">
              <li className="flex items-start gap-4">
                <span className="text-[#00aeef] text-lg">📍</span>
                <span className="font-medium">130, opposite Guru Nanak Dev Hospital, Majitha Road, Amritsar</span>
                        <span className="font-medium"> 2-Adj, Pahwa Dhabha, opposite Guru Nanak Dev Hospital, Majitha Road, Amritsar</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[#00aeef] text-lg">📞</span>
                <span className="font-bold">7999997090</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[#00aeef] text-lg">✉️</span>
                <span className="font-medium">excellence@universal.med</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] font-bold uppercase tracking-widest">
          <p>© 2024 Universal Diagnostics Center. All Rights Reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
