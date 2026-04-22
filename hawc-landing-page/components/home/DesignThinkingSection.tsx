'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Search, PenTool, Lightbulb, Wrench, Activity } from 'lucide-react';
import HawcText from '@/components/HawcText';

const steps = [
  {
    id: '01',
    title: 'Empathize',
    icon: <Search className="w-6 h-6 text-blue-400" />,
    color: 'from-blue-500 to-cyan-400',
    description: 'Understanding the global energy crisis map. Identifying the limitations of existing infrastructure and the pressing need for scalable, decentralized clean energy.'
  },
  {
    id: '02',
    title: 'Define',
    icon: <PenTool className="w-6 h-6 text-emerald-400" />,
    color: 'from-emerald-500 to-teal-400',
    description: 'Pinpointing the exact engineering bottlenecks in high-altitude capture: airspace integration, material limitations, and extreme weather hazards.'
  },
  {
    id: '03',
    title: 'Ideate',
    icon: <Lightbulb className="w-6 h-6 text-amber-400" />,
    color: 'from-amber-500 to-yellow-400',
    description: 'Brainstorming radical aerospace paradigms. Conceptualizing hybrid-lift aerostats and AI-driven autonomous control algorithms to bypass traditional limits.'
  },
  {
    id: '04',
    title: 'Prototype',
    icon: <Wrench className="w-6 h-6 text-purple-400" />,
    color: 'from-purple-500 to-fuchsia-400',
    description: 'Constructing digital twins and physical sub-scale soft airframes. Developing the multi-layer smart laminate and high-voltage transmission tethers.'
  },
  {
    id: '05',
    title: 'Test',
    icon: <Activity className="w-6 h-6 text-red-400" />,
    color: 'from-red-500 to-rose-400',
    description: 'Rigorous simulation runs and real-world environment stress testing. Iterating avionics models to achieve commercial aerospace safety certifications.'
  }
];

const DesignThinkingSection = () => {
  return (
    <section id="methodology" className="py-24 bg-slate-900 relative overflow-hidden border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-primary/5 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-400 text-sm font-bold mb-6 tracking-widest uppercase backdrop-blur-sm">
            <Search className="w-4 h-4" />
            Our Methodology
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Design Thinking</span> <br />
            Process
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            At <HawcText />, we don&apos;t just build hardware; we follow a rigorous, iterative design thinking methodology to transform conceptual physics into commercial grid-scale reality.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/4 left-0 w-full h-0.5 bg-slate-800 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Step Number Badge */}
                <div className={`absolute top-0 right-4 text-6xl font-black text-slate-800/50 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:${step.color} transition-all duration-500 z-0`}>
                  {step.id}
                </div>

                {/* Hexagon Node */}
                <div className="relative w-20 h-20 mb-8 flex items-center justify-center z-10 bg-slate-900 border-2 border-slate-700 group-hover:border-slate-500 rounded-2xl rotate-45 transition-all duration-500 group-hover:scale-110 shadow-2xl overflow-hidden mt-4">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  <div className="-rotate-45 relative z-10 flex flex-col items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl border border-slate-700/50 w-full flex-grow relative overflow-hidden group-hover:border-slate-600 transition-colors duration-300">
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${step.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}></div>
                  <h3 className="text-xl font-display font-bold text-white mb-3 uppercase tracking-wider">{step.title}</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignThinkingSection;
