'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, Rocket, Wind, Zap, Scale, Box, Map, CheckCircle2 } from 'lucide-react';
import HawcText from '@/components/HawcText';

export default function AchievementsPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6 }
    };

    const milestones = [
        {
            title: "The Cubic Power Law",
            description: "We learned that wind power increases with the cube of wind speed (P = ½ ρAv³). At altitudes of 300-600 meters, wind speed can double compared to ground level, resulting in an 8-fold increase in potential energy generation.",
            icon: <Zap className="w-6 h-6 text-white" />,
            color: "from-blue-500 to-cyan-400",
            bgLight: "bg-blue-50 dark:bg-blue-900/10",
            borderColor: "border-blue-200 dark:border-blue-900/50"
        },
        {
            title: "Physical Limits of Conventional Systems",
            subtitle: "The HAWT Plateau",
            description: "We realized that existing Horizontal-Axis Wind Turbines (HAWTs) are trapped in the lowest, most turbulent atmospheric layers due to wind shear. Traditional systems are stuck in a costly cycle of building \"taller and heavier\" towers just to capture slightly better winds.",
            icon: <Scale className="w-6 h-6 text-white" />,
            color: "from-orange-500 to-red-400",
            bgLight: "bg-orange-50 dark:bg-orange-900/10",
            borderColor: "border-orange-200 dark:border-orange-900/50"
        },
        {
            title: "Massive Material Efficiency",
            description: <>We discovered that capturing wind energy does not require massive steel towers or hundreds of tons of concrete. By utilizing Lighter-Than-Air (LTA) aerostat systems like <HawcText /> and high-strength polymer tethers, we can reduce the structural material required per megawatt by 80% to 90%.</>,
            icon: <Box className="w-6 h-6 text-white" />,
            color: "from-green-500 to-emerald-400",
            bgLight: "bg-green-50 dark:bg-green-900/10",
            borderColor: "border-green-200 dark:border-green-900/50"
        },
        {
            title: "Leap in Capacity Factor",
            subtitle: "Baseload Potential",
            description: "Data confirms that high-altitude winds are significantly more consistent year-round. While traditional turbines operate at a 30-45% capacity factor, our system can reach 60-70%, transforming wind from an intermittent energy source into a reliable baseload power supply.",
            icon: <Wind className="w-6 h-6 text-white" />,
            color: "from-purple-500 to-indigo-400",
            bgLight: "bg-purple-50 dark:bg-purple-900/10",
            borderColor: "border-purple-200 dark:border-purple-900/50"
        },
        {
            title: "Limitless Mobility & Off-Grid Deployment",
            description: <>Traditional wind infrastructure is restricted by heavy logistics, making it impossible to install in mountainous or remote areas. In contrast, a <HawcText /> system can be packed into a standard shipping container and rapidly deployed for off-grid communities or disaster relief.</>,
            icon: <Map className="w-6 h-6 text-white" />,
            color: "from-sky-500 to-blue-500",
            bgLight: "bg-sky-50 dark:bg-sky-900/10",
            borderColor: "border-sky-200 dark:border-sky-900/50"
        }
    ];

    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark pb-32">
            {/* Hero Header */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[length:40px_40px] pointer-events-none"
                    style={{ backgroundImage: "linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)" }}
                ></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-green-500 transition-colors mb-10 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight uppercase">
                            The Blueprint of <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Innovation</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
                            A journey through the foundational insights and breakthroughs that form the core of the <HawcText /> vision.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-12">
                {/* Vertical Timeline Line */}
                <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-2 rounded-full bg-slate-100 dark:bg-slate-800/50 transform md:-translate-x-1/2 hidden sm:block">
                    {/* Glowing progress line */}
                    <div className="absolute top-0 w-full h-full bg-gradient-to-b from-green-400 via-emerald-500 to-transparent rounded-full opacity-30 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                </div>

                <div className="space-y-16 md:space-y-32 relative">
                    {milestones.map((milestone, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className={`relative flex flex-col sm:flex-row gap-8 sm:gap-0 items-start sm:items-center ${isEven ? 'sm:flex-row-reverse' : ''} group`}
                            >
                                {/* Spacer for Timeline Centering on Desktop */}
                                <div className="hidden sm:block sm:w-1/2"></div>

                                {/* Center Icon / Node */}
                                <div className="sm:absolute sm:left-1/2 shrink-0 sm:-translate-x-1/2 flex justify-center items-center z-10 w-full sm:w-auto relative">
                                    <div className="absolute w-[88px] h-[88px] bg-background-light dark:bg-background-dark rounded-full hidden sm:block"></div>
                                    <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.1)] ring-[6px] ring-white dark:ring-slate-900 z-10 group-hover:scale-110 transition-transform duration-500 mb-4 sm:mb-0 mx-auto sm:mx-0`}>
                                        <div className="scale-125 md:scale-150">
                                            {milestone.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Box */}
                                <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pr-12 md:pr-24 text-center sm:text-right' : 'sm:pl-12 md:pl-24 text-center sm:text-left'}`}>
                                    <div className={`p-8 md:p-10 rounded-[2rem] ${milestone.bgLight} border ${milestone.borderColor} backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group-hover:-translate-y-2`}>
                                        <div className={`absolute -inset-1 bg-gradient-to-r ${milestone.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur`}></div>
                                        <div className="relative z-10">
                                            <div className={`text-[8rem] font-black text-slate-900/5 dark:text-white/5 absolute ${isEven ? 'sm:-left-4 md:-left-8' : 'sm:-right-4 md:-right-8'} top-1/2 -translate-y-1/2 pointer-events-none select-none tracking-tighter mix-blend-overlay hidden sm:block`}>
                                                0{index + 1}
                                            </div>

                                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md border ${milestone.borderColor} shadow-sm`}>
                                                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                                                Milestone 0{index + 1}
                                            </div>

                                            <h3 className="text-2xl md:text-3xl font-display font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight leading-tight">
                                                {milestone.title}
                                            </h3>

                                            {milestone.subtitle && (
                                                <h4 className={`text-lg md:text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${milestone.color} flex justify-center sm:justify-start ${isEven ? 'sm:justify-end' : ''}`}>
                                                    {milestone.subtitle}
                                                </h4>
                                            )}

                                            {!milestone.subtitle && <div className="h-6"></div>}

                                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed md:text-lg font-medium">
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
