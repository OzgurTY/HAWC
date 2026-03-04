'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, Wind, MoveUp, Zap, Server, Activity, ArrowRight, BookOpen, Scaling, Globe, ChevronsUp, Anchor, CheckCircle2, XCircle } from 'lucide-react';
import HawcText from '@/components/HawcText';

export default function ResearchesPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6 }
    };

    const comparisonData = [
        {
            metric: "Operating Altitude",
            hawt: "80m - 150m (Fixed)",
            hawc: "300m - 600m+ (Adjustable)",
            hawcBetter: true,
            icon: <MoveUp className="w-5 h-5" />
        },
        {
            metric: "Average Capacity Factor",
            hawt: "30% - 45%",
            hawc: "60% - 70% (Estimated)",
            hawcBetter: true,
            icon: <Activity className="w-5 h-5" />
        },
        {
            metric: "Material Mass per MW",
            hawt: "~300 - 400 Tons (Steel/Concrete)",
            hawc: "< 50 Tons (Fabric, Polymer, Generator)",
            hawcBetter: true,
            icon: <Server className="w-5 h-5" />
        },
        {
            metric: "Foundation Requirement",
            hawt: "Deep concrete piling (Hundreds of tons)",
            hawc: "Mobile winch station / Ground anchors",
            hawcBetter: true,
            icon: <Anchor className="w-5 h-5" />
        },
        {
            metric: "Deployment Time",
            hawt: "Months (Extensive civil engineering)",
            hawc: "Days (Modular setup)",
            hawcBetter: true,
            icon: <ChevronsUp className="w-5 h-5" />
        },
        {
            metric: "Environmental Footprint",
            hawt: "High (Habitat disruption, concrete CO2)",
            hawc: "Minimal (No permanent earthworks)",
            hawcBetter: true,
            icon: <Globe className="w-5 h-5" />
        },
    ];

    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark pb-32">
            {/* Hero Header */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[length:40px_40px] pointer-events-none"
                    style={{ backgroundImage: "linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)" }}
                ></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-primary transition-colors mb-10 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md"
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
                            The High-Altitude <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Paradigm</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
                            Replacing massive steel towers with buoyancy and tether dynamics to unlock the exponential power curve of high-altitude winds.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

                {/* 1. Traditional vs Limits */}
                <motion.section {...fadeIn} className="relative">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                            <Scaling className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white uppercase">The Physical Limits of HAWTs</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div className="prose prose-lg prose-slate dark:prose-invert">
                            <p className="lead text-xl">
                                Traditional Horizontal-Axis Wind Turbines (HAWTs) operate within the lowest 100 to 200 meters of the atmosphere, subjecting them to severe friction, wind shear, and intermittency.
                            </p>
                            <p>
                                To capture more energy, modern HAWTs must be built taller with massive sweep areas, creating immense logistical bottlenecks. A single 3 MW onshore turbine requires:
                            </p>
                            <ul className="not-prose mt-6 space-y-4">
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                    <span><strong>300 - 500 tons</strong> of concrete for the foundation</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                    <span><strong>150 - 250 tons</strong> of steel for the tower</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                    <span>Transporting rigid 80m+ blades requires specialized convoys</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 relative overflow-hidden">
                            <div className="absolute -right-10 -top-10 opacity-5">
                                <Wind className="w-64 h-64" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 font-display text-slate-900 dark:text-white">The Capacity Factor Issue</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                Because winds near the ground are intermittent, onshore HAWTs typically achieve capacity factors of only <strong>30% to 45%</strong>. This limits wind energy's ability to act as a reliable baseload power source without massive battery infrastructure.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* 2. Physics of <HawcText /> */}
                <motion.section {...fadeIn} className="relative">
                    <div className="flex items-center gap-4 mb-8 justify-center">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white uppercase">The Physics of <HawcText /></h2>
                    </div>

                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl shadow-primary/10 border border-slate-700 mb-12 relative overflow-hidden">
                        {/* Background elements */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.15),transparent_50%)]"></div>

                        <h3 className="text-2xl font-light mb-8 text-slate-300">The power available in the wind is proportional to the <span className="text-primary font-bold">cube</span> of its velocity.</h3>

                        <div className="inline-block bg-black/40 backdrop-blur-md border border-slate-700 rounded-2xl p-8 font-display tabular-nums shadow-inner mb-8">
                            <div className="text-4xl md:text-6xl font-bold tracking-wider flex items-center justify-center gap-4">
                                <span>P</span>
                                <span className="text-primary">=</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl md:text-4xl">1/2</span>
                                    <span>ρ</span>
                                    <span>A</span>
                                    <span>v<sup className="text-2xl md:text-4xl text-primary">3</sup></span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                <div className="text-primary font-bold mb-2 text-xl">v³ (Velocity)</div>
                                <p className="text-sm text-slate-300 leading-relaxed">If wind speed doubles at altitude, the available kinetic energy increases by <strong>8 times</strong> ($2^3$).</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                <div className="text-blue-400 font-bold mb-2 text-xl">ρ (Density)</div>
                                <p className="text-sm text-slate-300 leading-relaxed">Air density drops slightly at higher altitudes, but the exponential gain from velocity vastly outweighs this loss.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                <div className="text-sky-300 font-bold mb-2 text-xl">WPD Stats</div>
                                <p className="text-sm text-slate-300 leading-relaxed">At 80m, WPD is ~300-500 W/m². At 500m, Geostrophic winds routinely exceed <strong>1,500-2,000 W/m²</strong>.</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* 3. The <HawcText /> Solution */}
                <motion.section {...fadeIn} className="relative">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center">
                            <Globe className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white uppercase">The <HawcText /> Solution</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-card-light dark:bg-card-dark p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold mb-4 font-display text-slate-900 dark:text-white">Dynamic Altitude Adjustment</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Traditional turbines are fixed at one height. If wind speeds drop at 300 meters, the <HawcText /> tether can be let out to allow the aerostat to climb to 500 meters, actively seeking optimal wind layers via ground winching.
                            </p>
                        </div>

                        <div className="bg-card-light dark:bg-card-dark p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold mb-4 font-display text-slate-900 dark:text-white">Baseload-like Capacity</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Because high-altitude tropospheric winds are far less intermittent, <HawcText /> systems can theoretically achieve capacity factors of <strong>60% to 70%</strong>, moving wind energy closer to a reliable baseload power source.
                            </p>
                        </div>

                        <div className="bg-card-light dark:bg-card-dark p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold mb-4 font-display text-slate-900 dark:text-white">Massive Material Reduction</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Replaces hundreds of tons of steel and concrete with advanced polymers (Kevlar/Dyneema) and synthetic fabrics, reducing material mass per Megawatt by up to <strong>80% to 90%</strong> compared to traditional systems.
                            </p>
                        </div>

                        <div className="bg-card-light dark:bg-card-dark p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold mb-4 font-display text-slate-900 dark:text-white">Microgrid Deployment</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                The entire <HawcText /> system can be deflated and packed into standard shipping containers, requiring zero heavy concrete pouring, allowing rapid deployment for disaster relief and isolated communities.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* 4. Comparative Matrix */}
                <motion.section {...fadeIn} className="relative">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white uppercase mb-4">HAWT vs <HawcText /> Matrix</h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">A data-driven contrast between traditional ground-based wind energy and next-generation airborne systems.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                        {comparisonData.map((item, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm group hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center shrink-0">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-bold text-slate-900 dark:text-white tracking-wide">{item.metric}</h4>
                                </div>

                                <div className="flex flex-col flex-1">
                                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 flex-1 flex flex-col justify-center">
                                        <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Traditional HAWT</div>
                                        <div className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.hawt}</div>
                                    </div>

                                    <div className="flex justify-center -my-3 relative z-10 shrink-0">
                                        <div className="bg-white dark:bg-slate-900 w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                                            <ArrowRight className="w-4 h-4 text-slate-400 rotate-90" />
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-blue-50 dark:bg-sky-900/20 border border-blue-100 dark:border-sky-800/30 flex-1 flex flex-col justify-center">
                                        <div className="text-xs uppercase tracking-widest text-primary font-bold mb-1 flex items-center justify-between">
                                            <span><HawcText /> System</span>
                                            {item.hawcBetter && <CheckCircle2 className="w-4 h-4 text-primary shrink-0 ml-2" />}
                                        </div>
                                        <div className="text-sm font-medium text-slate-900 dark:text-sky-100">{item.hawc}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* 5. References */}
                <motion.section {...fadeIn} className="pt-20 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-3 mb-8">
                        <BookOpen className="w-6 h-6 text-slate-400" />
                        <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Academic & Industry References</h2>
                    </div>

                    <ul className="space-y-6 text-sm md:text-base">
                        <li className="flex gap-4">
                            <span className="text-primary font-bold">1</span>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                <strong className="text-slate-900 dark:text-slate-200">Archer, C. L., & Caldeira, K. (2009).</strong>
                                <br />Global assessment of high-altitude wind power. <em>Energies, 2(2), 307-319.</em> (Foundational paper proving the massive energy potential at higher altitudes).
                            </p>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-primary font-bold">2</span>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                <strong className="text-slate-900 dark:text-slate-200">Fagiano, L., & Milanese, M. (2012).</strong>
                                <br />Airborne wind energy: an overview. <em>American Control Conference (ACC).</em> (Discusses the material reduction and tether dynamics).
                            </p>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-primary font-bold">3</span>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                <strong className="text-slate-900 dark:text-slate-200">Global Wind Energy Council (GWEC). (2024).</strong>
                                <br />Global Wind Report. (Data on current traditional wind capacity and limitations).
                            </p>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-primary font-bold">4</span>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                <strong className="text-slate-900 dark:text-slate-200">International Renewable Energy Agency (IRENA). (2023).</strong>
                                <br />Renewable Power Generation Costs. (Data regarding LCOE and material costs for onshore wind).
                            </p>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-primary font-bold">5</span>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                <strong className="text-slate-900 dark:text-slate-200">Vermillion, C., et al. (2021).</strong>
                                <br />Electricity in the air: Insights from two decades of advanced control research and experimental flight testing of airborne wind energy systems. <em>Annual Reviews in Control.</em> (Covers LTA and tethered systems' operational models).
                            </p>
                        </li>
                    </ul>
                </motion.section>

            </div>
        </main>
    );
}
