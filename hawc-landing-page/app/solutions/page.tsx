'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, Lightbulb, ArrowRight } from 'lucide-react';
import HawcText from '@/components/HawcText';
import { solutionsData } from '@/lib/solutionsData';

export default function SolutionsPage() {
    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark pb-32">
            {/* Hero Header */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-100 dark:bg-slate-900/30">
                <div className="absolute inset-0 opacity-5 bg-[length:30px_30px] pointer-events-none"
                    style={{ backgroundImage: "radial-gradient(circle at center, #10b981 1px, transparent 1px)" }}
                ></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-emerald-500 transition-colors mb-10 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight leading-tight">
                            The Path to <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Commercialization</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
                            Engineering Proposed Solutions for <HawcText /> System Bottlenecks
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
                {/* Executive Summary Block */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white dark:bg-slate-800/90 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-emerald-200 dark:border-emerald-900/50 shadow-2xl shadow-emerald-500/10 mb-20 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center text-center md:text-left"
                >
                    <div className="flex-1">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-6 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-500 shrink-0">
                                <Lightbulb className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                                Ongoing Research
                            </h2>
                        </div>
                        <div className="w-16 h-1 bg-emerald-500 mb-8 relative z-10 mx-auto md:mx-0"></div>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light relative z-10">
                            Research into viable solutions for Airborne Wind Energy bottlenecks is a constantly evolving endeavor. Select any focus area below to dive deep into our proposed technical breakthroughs.
                        </p>
                    </div>
                </motion.div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutionsData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={`/solutions/${item.slug}`} className="block h-full group">
                                <div className={`h-full bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col hover:-translate-y-2`}>
                                    {/* Hover Gradient Base */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>
                                    
                                    <div className="flex items-center gap-4 mb-6 relative z-10">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg ${item.shadowColor} text-white shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                                            {item.icon}
                                        </div>
                                        <span className="text-slate-200 dark:text-slate-800 font-display font-black text-5xl tracking-tighter opacity-50 absolute right-4 top-4">
                                            {item.id}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white uppercase tracking-tight leading-tight mb-4 relative z-10 pr-8">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-1 relative z-10">
                                        {item.shortDescription}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto relative z-10">
                                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                            {item.status}
                                        </div>
                                        
                                        <div className={`w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-gradient-to-br ${item.color} text-slate-400 group-hover:text-white transition-all duration-300`}>
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
