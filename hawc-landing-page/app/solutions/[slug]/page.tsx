'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, ImageOff } from 'lucide-react';
import HawcText from '@/components/HawcText';
import Spline from '@splinetool/react-spline';
import { solutionsData } from '@/lib/solutionsData';
import EnvironmentalSimulator from '@/components/EnvironmentalSimulator';

export default function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    // Next.js 15+ dynamic params handling pattern
    const resolvedParams = use(params);
    const { slug } = resolvedParams;
    const [imgError, setImgError] = useState(false);

    // Find the current solution
    const solution = solutionsData.find(s => s.slug === slug);

    if (!solution) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#0a0f18] pb-32 relative">
            {/* Background glowing effects for the whole page */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className={`absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-br ${solution.color} rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-[100px] opacity-20 dark:opacity-20 translate-x-1/3 -translate-y-1/3`}></div>
                <div className={`absolute top-1/2 left-0 w-[30rem] h-[30rem] bg-gradient-to-tr ${solution.color} rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-[120px] opacity-10 dark:opacity-10 -translate-x-1/2`}></div>
            </div>

            {/* Hero Header */}
            <div className={`relative pt-32 pb-16 lg:pt-48 lg:pb-24 border-b border-slate-200/50 dark:border-white/5 backdrop-blur-md z-10`}>
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                    style={{ backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)", backgroundSize: "32px 32px" }}
                ></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link
                        href="/solutions"
                        className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors mb-8 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md w-fit"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Solutions
                    </Link>

                    <div className="md:w-2/3">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-slate-300 dark:text-slate-700 font-display font-black text-4xl md:text-5xl tracking-tighter opacity-50">
                                    {solution.id}
                                </span>
                                <div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Status: {solution.status}
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight leading-tight mix-blend-normal">
                                {solution.title}
                            </h1>

                            <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                Addressing Bottleneck: <span className="font-semibold text-slate-800 dark:text-slate-200">{solution.bottleneck}</span>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: 3D Spline or Image Visualization */}
                    {(solution.splineUrl || solution.imageUrl) && (
                        <div className="lg:col-span-5 order-2 lg:order-1 relative z-10">
                            <div className="sticky top-20 lg:top-24">
                                <div className={`absolute -inset-4 bg-gradient-to-br ${solution.color} rounded-[2.5rem] opacity-30 dark:opacity-10 blur-2xl`}></div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
                                    className="w-full aspect-square md:aspect-video lg:aspect-[4/5] max-h-[70vh] lg:max-h-[85vh] min-h-[500px] bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-white dark:border-slate-800/50 flex flex-col relative overflow-hidden shadow-2xl z-10"
                                >
                                    <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md z-20 flex justify-between items-center">
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                            {solution.splineUrl ? "Interactive 3D Model" : "Visualization"}
                                        </span>
                                        <ArrowUpRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <div className={`flex-1 relative w-full h-full ${solution.imageUrl && solution.slug !== 'environmental-hazards' ? 'bg-white p-6' : ''}`}>
                                        <div className={`absolute inset-0 w-full h-full ${solution.slug === 'environmental-hazards' ? 'rounded-b-3xl overflow-hidden' : solution.splineUrl ? 'scale-[1.3] md:scale-[1.1]' : (solution.imageUrl && !imgError) ? 'p-8' : ''}`}>
                                            {solution.slug === 'environmental-hazards' ? (
                                                <EnvironmentalSimulator />
                                            ) : solution.splineUrl ? (
                                                <Spline scene={solution.splineUrl} />
                                            ) : (solution.imageUrl && !imgError) ? (
                                                <img
                                                    src={solution.imageUrl}
                                                    alt={solution.title}
                                                    className={`w-full h-full object-contain mix-blend-multiply transition-transform duration-700 ${solution.imageClassName || ''}`}
                                                    onError={() => setImgError(true)}
                                                />
                                            ) : (solution.imageUrl && imgError) ? (
                                                <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 bg-slate-50 dark:bg-slate-900 absolute inset-0">
                                                    <ImageOff className="w-12 h-12 mb-4 opacity-50" />
                                                    <span className="text-sm font-semibold tracking-wide uppercase opacity-80 mb-2">Image Not Found</span>
                                                    <span className="text-xs text-center px-6 leading-relaxed">
                                                        Please place your image at<br />
                                                        <code className="text-slate-500 font-mono mt-1 inline-block bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded">public{solution.imageUrl}</code>
                                                    </span>
                                                </div>
                                            ) : null}
                                        </div>
                                        {/* Transparent overlay blocks excessive scrolling interference */}
                                        <div className="absolute inset-0 z-10 pointer-events-none"></div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    )}

                    {/* Right Column: Detailed Solutions */}
                    <div className={`${(solution.splineUrl || solution.imageUrl) ? 'lg:col-span-7 order-1 lg:order-2' : 'lg:col-span-12 md:max-w-4xl mx-auto'}`}>
                        <div className="space-y-8 lg:mt-4">

                            {/* Short Desc Intro */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-xl md:text-2xl font-light text-slate-700 dark:text-slate-300 leading-relaxed mb-12"
                            >
                                {solution.shortDescription}
                            </motion.p>

                            {/* Solution Subsections List */}
                            <div className="space-y-6 relative z-10">
                                {solution.subsections.map((sub, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 + (index * 0.1), type: "spring", bounce: 0.3 }}
                                        whileHover={{ y: -4, scale: 1.005 }}
                                        className="relative p-8 md:p-10 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 overflow-hidden group shadow-xl shadow-slate-200/20 dark:shadow-none hover:shadow-2xl transition-all duration-300"
                                    >
                                        {/* Hover Gradient Overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-r ${solution.color} opacity-0 group-hover:opacity-[0.03] dark:group-hover:opacity-[0.05] transition-opacity duration-500`}></div>
                                        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 relative z-10">
                                            <div className="flex-shrink-0">
                                                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center text-white font-display font-black text-2xl md:text-3xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                                                    {String(index + 1).padStart(2, '0')}
                                                </div>
                                            </div>
                                            <div className="flex-1 w-full">
                                                <h3 className="font-bold text-slate-900 dark:text-white text-2xl md:text-3xl tracking-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 dark:group-hover:from-white dark:group-hover:to-slate-300 transition-colors duration-300">
                                                    {sub.subtitle}
                                                </h3>
                                                <div className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg whitespace-pre-wrap">
                                                    {sub.text}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Awaiting More Content Section */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                    className="p-10 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/30 flex flex-col items-center justify-center text-center py-12 relative overflow-hidden backdrop-blur-sm group"
                                >
                                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,64,60,0.03)_50%,transparent_75%,transparent_100%)] dark:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px]"></div>
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${solution.color} flex items-center justify-center mb-6 shadow-lg shadow-black/5 dark:shadow-none relative z-10 group-hover:scale-110 transition-transform duration-500`}>
                                        <div className="absolute inset-2 bg-white/20 dark:bg-black/20 rounded-xl animate-pulse"></div>
                                        <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                                    </div>
                                    <h4 className="font-bold text-slate-800 dark:text-slate-200 text-xl mb-3 relative z-10">Research Ongoing</h4>
                                    <p className="text-slate-500 dark:text-slate-400 max-w-md relative z-10 leading-relaxed font-light">System architecture analysis and mathematical models are actively being refined. Stay tuned for further technical updates.</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
