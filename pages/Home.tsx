
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 py-16 md:py-32 lg:max-w-2xl lg:w-full">
            <main className="text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-[#2d3269] text-xs font-bold mb-6 tracking-widest uppercase border border-blue-100">
                <span>Personal Relationship With Medical Excellence</span>
              </div>
              <h1 className="text-4xl tracking-tight font-black text-[#2d3269] sm:text-5xl md:text-7xl mb-6 uppercase">
                <span className="block">Universal</span>
                <span className="block text-[#00aeef]">Diagnostics</span>
              </h1>
              <p className="text-base text-slate-500 sm:text-lg md:text-xl md:max-w-xl leading-relaxed mb-10">
                A personal relationship with medical excellence. Experience precision diagnostic services with top-tier radiologists and the most advanced imaging technology in the region.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-bold uppercase tracking-widest rounded-sm text-white bg-[#2d3269] hover:bg-[#00aeef] md:text-lg transition-all shadow-xl shadow-blue-100"
                >
                  Book Appointment
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-10 py-4 border-2 border-[#2d3269] text-base font-bold uppercase tracking-widest rounded-sm text-[#2d3269] bg-white hover:bg-blue-50 md:text-lg transition-all"
                >
                  Our Philosophy
                </Link>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200"
            alt="Universal Diagnostics Facility"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent lg:block hidden"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#00aeef] font-black tracking-widest uppercase text-sm mb-3">Diagnostic Expertise</h2>
            <p className="text-3xl sm:text-5xl font-black text-[#2d3269] mb-4 uppercase">
              Precision Services
            </p>
            <p className="text-slate-500 text-lg leading-relaxed">
              Universal Diagnostics provides comprehensive medical imaging and pathological tests with a human touch and cutting-edge automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="bg-white p-10 rounded-xl shadow-sm hover:shadow-2xl transition-all border border-blue-50 group hover:-translate-y-2"
              >
                <div className="text-4xl mb-6 bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-[#2d3269] group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-[#2d3269] mb-3 uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link 
                  to="/contact" 
                  className="text-[#00aeef] font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Explore Service
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#2d3269] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00aeef] opacity-10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-[#00aeef] font-black tracking-widest uppercase text-sm mb-3">Our Legacy</h2>
            <p className="text-3xl sm:text-5xl font-black uppercase tracking-tight">Patient Stories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white/5 p-12 rounded-lg border border-white/10 backdrop-blur-md group hover:bg-white/10 transition-all">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-[#00aeef]">★</span>
                  ))}
                </div>
                <p className="text-xl font-medium mb-10 leading-relaxed text-blue-50">"{t.text}"</p>
                <div className="flex items-center gap-5 border-t border-white/10 pt-8">
                  <div className="w-14 h-14 bg-[#00aeef] rounded-lg flex items-center justify-center font-black text-2xl text-[#2d3269]">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-black uppercase tracking-widest text-white">{t.name}</div>
                    <div className="text-xs font-bold text-blue-300 uppercase tracking-tighter">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-[#2d3269] rounded-lg p-20 relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-6xl font-black text-white mb-8 uppercase tracking-tighter">Your Health, Our Priority.</h2>
            <p className="text-blue-100 text-lg mb-12 max-w-3xl mx-auto font-medium">
              Take the first step towards medical excellence. Book your test at Universal Diagnostics today and receive professional results within 24 hours.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#00aeef] text-[#2d3269] px-14 py-5 rounded-sm font-black text-lg uppercase tracking-[0.2em] hover:bg-white transition-all shadow-2xl"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
