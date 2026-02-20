
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const efficiencyData = [
  { name: 'Universal', time: 1.2, color: '#2d3269' },
  { name: 'Average Lab', time: 4.8, color: '#94a3b8' },
  { name: 'Hospital', time: 10.0, color: '#cbd5e1' },
];

const About: React.FC = () => {
  return (
    <div className="animate-fade-in pb-24">
      {/* Header */}
      <div className="bg-[#2d3269] py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#00aeef] opacity-5 translate-y-20 scale-150 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-6xl font-black mb-6 uppercase tracking-tighter">Medical Excellence</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-medium">
            Building a Personal Relationship with your health through precision, empathy, and innovation.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-black text-[#2d3269] mb-8 uppercase tracking-tight">The Universal Story</h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              Universal Diagnostics was established about eight years ago with a singular focus: bridging the gap between clinical coldness and patient care. We believe every diagnosis is a personal journey.
            </p>
            <div className="space-y-6">
              <div className="flex gap-6 p-8 bg-white rounded-lg border-l-8 border-[#2d3269] shadow-xl shadow-blue-50">
                <div className="text-4xl">🔬</div>
                <div>
                  <h3 className="font-black text-[#2d3269] uppercase text-sm mb-1 tracking-widest">Our Mission</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">To deliver absolute diagnostic accuracy while maintaining a deep personal relationship with every patient.</p>
                </div>
              </div>
              <div className="flex gap-6 p-8 bg-white rounded-lg border-l-8 border-[#00aeef] shadow-xl shadow-blue-50">
                <div className="text-4xl">🌐</div>
                <div>
                  <h3 className="font-black text-[#2d3269] uppercase text-sm mb-1 tracking-widest">Our Vision</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">To lead the global standard in medical imaging by integrating human empathy with next-generation machine intelligence.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" className="rounded-lg shadow-2xl border-4 border-[#2d3269]" alt="Universal Medical Center" />
            <div className="absolute -bottom-10 -left-10 bg-[#00aeef] text-[#2d3269] p-10 rounded-lg hidden md:block shadow-2xl">
              <div className="text-5xl font-black mb-1">99.9%</div>
              <div className="text-xs font-black uppercase tracking-widest opacity-80">Report Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Experts */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-[#00aeef] font-black uppercase tracking-[0.3em] text-sm mb-4">Board of Radiologists</h2>
            <p className="text-3xl sm:text-5xl font-black text-[#2d3269] uppercase">The Universal Team</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Dr. A.G.K Pal Rana', specialty: 'M.D. Pathology' },
              { name: 'Mr. Hemaant Arora', specialty: 'Lab Director' },
              { name: 'Dr. Saksham', specialty: 'M.D. Radiology' }
            ].map((dr, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transition-all border border-blue-50">
                <div className="p-10 text-center">
                  <h3 className="text-xl font-black text-[#2d3269] mb-1 uppercase tracking-tight">{dr.name}</h3>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] pt-5 border-t border-slate-100">Specialist: {dr.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Efficiency Chart */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-black text-[#2d3269] mb-8 uppercase tracking-tighter">Universal Speed</h2>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              Diagnostic speed saves lives. At Universal, we utilize high-throughput machines and pre-screening to provide validated results faster than standard clinics.
            </p>
            <div className="h-80 w-full bg-white p-6 rounded-lg shadow-inner border border-slate-100">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={efficiencyData} layout="vertical" margin={{ left: 20, right: 30, top: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    width={100} 
                    tick={{ fontSize: 10, fontWeight: '900', letterSpacing: '0.1em' }} 
                    tickFormatter={(value) => String(value).toUpperCase()}
                  />
                  <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '4px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', fontSize: '12px', fontWeight: 'bold' }} />
                  <Bar dataKey="time" radius={[0, 4, 4, 0]} barSize={35}>
                    {efficiencyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-slate-400 text-[10px] mt-6 italic font-bold uppercase tracking-widest text-center">Avg. Report Turnaround (Hours) - Clinical Data 2024</p>
          </div>
          <div className="lg:w-1/2 bg-[#2d3269] p-16 rounded-lg shadow-2xl">
            <h3 className="text-2xl font-black text-white mb-10 uppercase tracking-widest border-b border-white/10 pb-4">The Universal Pillars</h3>
            <div className="space-y-10">
              {[
                { title: 'Personalized Care', desc: 'Assigned health concierge for every patient.' },
                { title: 'Robotic Precision', desc: 'Zero-human error diagnostic machinery.' },
                { title: 'Global Standards', desc: 'Results accepted by top international clinics.' },
                { title: 'Health Portal', desc: 'Encrypted lifetime access to your medical history.' }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-lg bg-[#00aeef] text-[#2d3269] flex items-center justify-center font-black text-lg flex-shrink-0">
                    0{i+1}
                  </div>
                  <div>
                    <h4 className="font-black text-white uppercase tracking-wider text-sm mb-1">{benefit.title}</h4>
                    <p className="text-xs text-blue-200 font-medium leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
