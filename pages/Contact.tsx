
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', test: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormState({ name: '', email: '', test: '', message: '' });
  };

  return (
    <div className="animate-fade-in pb-24">
      {/* Hero Header */}
      <div className="bg-[#2d3269] py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#00aeef" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl font-black mb-6 uppercase tracking-tighter">Universal Access</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium">
            Book your appointment or consult our technical desk for diagnostic requirements.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-10 rounded-lg shadow-2xl border border-slate-100 group hover:bg-[#2d3269] transition-all">
              <div className="text-[#00aeef] text-4xl mb-6">📍</div>
              <h3 className="text-xl font-black mb-2 uppercase tracking-tight group-hover:text-white">Main Center</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium group-hover:text-blue-100">
                130, opposite Guru Nanak Dev hospital, Majitha Road, Amritsar
              </p>
               <p className="text-slate-500 text-sm leading-relaxed font-medium group-hover:text-blue-100">
                2-Adj, Pahwa Dhaba, opposite Guru Nanak Dev Hospital, Majitha Road, Amritsar
              </p>
        
            </div>
            <div className="bg-white p-10 rounded-lg shadow-2xl border border-slate-100 group hover:bg-[#2d3269] transition-all">
              <div className="text-[#00aeef] text-4xl mb-6">📞</div>
              <h3 className="text-xl font-black mb-2 uppercase tracking-tight group-hover:text-white">Support</h3>
              <p className="text-slate-500 text-sm font-bold group-hover:text-white">7999997090</p>
              <p className="text-[#00aeef] text-[10px] font-black uppercase tracking-widest mt-2">Open Daily: 7 AM - 9 PM</p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-2xl border border-slate-100 group hover:bg-[#2d3269] transition-all">
              <div className="text-[#00aeef] text-4xl mb-6">✉️</div>
              <h3 className="text-xl font-black mb-2 uppercase tracking-tight group-hover:text-white">Email Us</h3>
              <p className="text-slate-500 text-sm font-medium group-hover:text-blue-100">info@universaldiagnostics.med</p>
              <p className="text-slate-400 text-[10px] mt-2 group-hover:text-blue-200">2 Hour Response Time</p>
            </div>
          </div>

        </div>
      </div>

      {/* Map Section */}
      <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 w-full h-[450px] rounded-lg overflow-hidden relative shadow-2xl border-4 border-[#2d3269]">
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="text-center">
              <div className="text-6xl mb-4 text-[#00aeef]">🌍</div>
              <div className="text-white font-black uppercase tracking-[0.5em] text-lg">Universal Location Matrix</div>
            </div>
          </div>
          <div className="absolute bottom-8 left-8 bg-[#00aeef] p-5 rounded-lg shadow-2xl flex items-center gap-5">
             <div className="w-4 h-4 bg-white rounded-full animate-ping"></div>
             <span className="text-xs font-black text-[#2d3269] uppercase tracking-widest">Center Active & Ready</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
