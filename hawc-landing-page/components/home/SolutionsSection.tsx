'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Beaker } from 'lucide-react';
import { solutionsData } from '@/lib/solutionsData';
import HawcText from '@/components/HawcText';

const SolutionsSection = () => {
    return (
        <section id="solutions" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-bold mb-6 tracking-widest uppercase"
                        >
                            <Beaker className="w-4 h-4" />
                            Our Engineering
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 dark:text-white uppercase tracking-tight"
                        >
                            Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-primary">Solutions</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-600 dark:text-slate-400 mt-6 font-light leading-relaxed"
                        >
                            We don&apos;t just identify bottlenecks; we engineer around them. <HawcText /> is developing a robust multidisciplinary lifecycle to ensure grid-scale reliability.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link
                            href="/solutions"
                            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-emerald-500 transition-colors"
                        >
                            View All Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutionsData.slice(0, 3).map((solution, index) => (
                        <motion.div
                            key={solution.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative h-full"
                        >
                            {/* Card Glow Effect */}
                            <div className={`absolute -inset-2 bg-gradient-to-br ${solution.color} rounded-[2rem] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}></div>
                            
                            <div className="relative h-full bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-8 rounded-3xl overflow-hidden flex flex-col transition-all duration-500 group-hover:-translate-y-2 group-hover:border-emerald-500/30 group-hover:shadow-[0_20px_40px_-20px_rgba(16,185,129,0.2)]">
                                {/* Icon Background Circle */}
                                <div className={`absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br ${solution.color} opacity-[0.03] rounded-full group-hover:scale-150 transition-transform duration-700`}></div>
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className={`w-14 h-14 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-500`}>
                                        {React.cloneElement(solution.icon as React.ReactElement<any>, { className: "w-7 h-7 text-white" })}
                                    </div>

                                    <h3 className="text-2xl font-display font-black text-slate-900 dark:text-white mb-3 uppercase tracking-tight leading-tight group-hover:text-emerald-500 transition-colors">
                                        {solution.title}
                                    </h3>

                                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-8 flex-grow">
                                        {solution.shortDescription}
                                    </p>

                                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
                                        <Link 
                                            href={`/solutions/${solution.slug}`}
                                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 hover:gap-3 transition-all"
                                        >
                                            Technical Brief <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Explore All Link */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 flex justify-center"
                >
                    <Link 
                        href="/solutions"
                        className="group relative px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-display font-black uppercase tracking-widest rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-emerald-500/10"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        <span className="relative flex items-center gap-3">
                            Explore Full Solutions Suite
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default SolutionsSection;
