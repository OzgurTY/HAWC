'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, AlertTriangle, Link as LinkIcon, CloudLightning, Cpu, Zap, Plane, Info, ShieldAlert, Crosshair, Target, Activity } from 'lucide-react';
import HawcText from '@/components/HawcText';

export default function BottlenecksPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6 }
    };

    const bottlenecks = [
        {
            id: "01",
            title: "Airspace Integration and Regulatory Frameworks",
            icon: <Plane className="w-8 h-8 text-white" />,
            color: "from-red-500 to-rose-400",
            bgLight: "bg-red-50 dark:bg-red-900/10",
            borderColor: "border-red-200 dark:border-red-900/40",
            shadowColor: "shadow-red-500/20",
            subsections: [
                {
                    subtitle: "Aviation Safety",
                    text: "A tethered zeppelin represents a significant hazard to general aviation, helicopters, and drones. Currently, regulatory bodies like the FAA (Federal Aviation Administration) and EASA (European Union Aviation Safety Agency) do not have standardized, permanent certification frameworks for grid-scale AWES farms."
                },
                {
                    subtitle: "Restricted Airspace Limitations",
                    text: <>Deploying a <HawcText /> system currently requires establishing permanent restricted airspace zones or issuing continuous NOTAMs (Notice to Air Airmen). This limits deployment locations strictly to remote areas, offshore zones, or highly controlled industrial zones, preventing near-urban deployment.</>
                },
                {
                    subtitle: "Visibility and Radar Signatures",
                    text: "The tether itself is thin and nearly invisible to pilots. Systems must be equipped with high-intensity strobes, radar reflectors, and potentially transponders, adding weight and parasitic power drain."
                }
            ]
        },
        {
            id: "02",
            title: "Material Science: The Tether Paradox",
            icon: <LinkIcon className="w-8 h-8 text-white" />,
            color: "from-orange-500 to-amber-400",
            bgLight: "bg-orange-50 dark:bg-orange-900/10",
            borderColor: "border-orange-200 dark:border-orange-900/40",
            shadowColor: "shadow-orange-500/20",
            subsections: [
                {
                    subtitle: "Tensile Fatigue and Bending",
                    text: "The tether is constantly subjected to massive variable tension from wind gusts. If the system uses a winching mechanism, the tether is repeatedly bent over pulleys under high loads, leading to rapid degradation of synthetic fibers like UHMWPE (Ultra-High-Molecular-Weight Polyethylene)."
                },
                {
                    subtitle: "High-Voltage Transmission Weight",
                    text: "To transmit power efficiently to the ground station without massive energy loss, the voltage must be high, requiring sufficient insulation and copper/aluminum cores. This metal adds immense weight, counteracting the zeppelin's buoyancy."
                },
                {
                    subtitle: "Lightning Strike Vulnerability",
                    text: "A conductive cable stretching 600 meters into the sky is an optimal path for lightning. A direct strike can instantly melt the conductive core and vaporize the synthetic strength members, causing catastrophic system failure and \"flyaway\" scenarios."
                }
            ]
        },
        {
            id: "03",
            title: "Environmental and Weather Hazards",
            icon: <CloudLightning className="w-8 h-8 text-white" />,
            color: "from-blue-500 to-cyan-400",
            bgLight: "bg-blue-50 dark:bg-blue-900/10",
            borderColor: "border-blue-200 dark:border-blue-900/40",
            shadowColor: "shadow-blue-500/20",
            subsections: [
                {
                    subtitle: "Extreme Drag in Storms",
                    text: "While a zeppelin generates excellent lift, its large volumetric envelope creates massive aerodynamic drag during extreme storm events. The ground station must have an autonomous, high-speed winching system to reel the aerostat in before a storm hits, which requires predictive weather algorithms."
                },
                {
                    subtitle: "Atmospheric Icing",
                    text: "At high altitudes, moisture combined with sub-freezing temperatures can cause rapid ice accumulation on the aerostat's envelope. Ice adds dramatic weight, destroying the LTA buoyancy and potentially causing the system to crash."
                },
                {
                    subtitle: "Helium Leakage and Maintenance",
                    text: "Helium, the lifting gas for the zeppelin, consists of incredibly small molecules that slowly escape through almost any fabric over time. Maintaining buoyancy requires regular topping up of helium, which increases operational expenditure (OPEX) and logistical complexity."
                }
            ]
        },
        {
            id: "04",
            title: "Autonomous Control and System Reliability",
            icon: <Cpu className="w-8 h-8 text-white" />,
            color: "from-indigo-500 to-purple-400",
            bgLight: "bg-indigo-50 dark:bg-indigo-900/10",
            borderColor: "border-indigo-200 dark:border-indigo-900/40",
            shadowColor: "shadow-indigo-500/20",
            subsections: [
                {
                    subtitle: "Flight Control Software",
                    text: <>A HAWT (traditional turbine) requires relatively simple yaw and pitch control. A <HawcText /> system is fundamentally a robotic aircraft that must fly 24/7 without human intervention. The system requires military-grade autonomous flight control software to manage altitude adjustments, respond to sudden wind shear, and handle emergency landings.</>
                },
                {
                    subtitle: "Redundancy and Failsafes",
                    text: "If the tether snaps or the ground station loses power, the zeppelin cannot simply float away into commercial air traffic. It requires onboard emergency deflation mechanisms or autonomous free-flight gliding capabilities to land safely, adding complexity to the payload."
                }
            ]
        },
        {
            id: "05",
            title: "Energy Transmission and Downlink Inefficiency",
            icon: <Zap className="w-8 h-8 text-white" />,
            color: "from-yellow-500 to-amber-300",
            bgLight: "bg-yellow-50 dark:bg-yellow-900/10",
            borderColor: "border-yellow-200 dark:border-yellow-900/40",
            shadowColor: "shadow-yellow-500/20",
            subsections: [
                {
                    subtitle: "The Weight-Conductivity Trade-off",
                    text: "To transmit megawatt-scale power over a 600 to 1000-meter tether without severe resistive (I²R) losses, high-voltage conductive cores, typically made of copper or aluminum, are required. These metals are inherently dense and heavy, which directly counteracts the aerostat's buoyancy and drastically reduces the system's net lifting capacity."
                },
                {
                    subtitle: "High-Voltage Insulation and Drag",
                    text: "Transmitting power at high voltages minimizes energy loss but demands thick, robust dielectric insulation to prevent arcing, particularly in damp, cloud-level environments. This insulation not only adds further weight but also increases the physical diameter of the tether, thereby maximizing unwanted aerodynamic drag."
                },
                {
                    subtitle: "Power Conditioning and Grid Integration",
                    text: "Raw power transmitted down the tether still fluctuates with wind gusts and zeppelin movement. This requires complex, heavy, and expensive power electronics (rectifiers, inverters) and localized battery storage at the ground station to \"smooth\" the electrical output before it can be safely synchronized and fed into the commercial grid."
                },
                {
                    subtitle: "The Onboard Storage Impossibility",
                    text: "Attempting to bypass the conductive tether by storing energy aloft (e.g., using onboard battery banks) and periodically reeling the zeppelin down to \"unload\" the power is mathematically unfeasible. The extreme weight-to-energy-density ratio of current battery technologies would make the zeppelin too heavy to maintain flight."
                }
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark pb-32">
            {/* Hero Header */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-100 dark:bg-slate-900/30">
                <div className="absolute inset-0 opacity-5 bg-[length:30px_30px] pointer-events-none"
                    style={{ backgroundImage: "radial-gradient(circle at center, #ef4444 1px, transparent 1px)" }}
                ></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-red-500 transition-colors mb-10 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md"
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
                            The Reality of <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Innovation</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
                            Critical Bottlenecks and Challenges in Airborne Wind Energy Systems (AWES)
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
                {/* Executive Summary Block */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white dark:bg-slate-800/90 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-red-200 dark:border-red-900/50 shadow-2xl shadow-red-500/10 mb-20 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                        <AlertTriangle className="w-48 h-48 text-red-500" />
                    </div>
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500 shrink-0">
                            <Info className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                            Executive Summary
                        </h2>
                    </div>
                    <div className="w-16 h-1 bg-red-500 mb-8 relative z-10"></div>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light relative z-10">
                        While the aerodynamic principles and material economics of High-Altitude Wind Capture (<HawcText />) strongly favor Airborne Wind Energy Systems (AWES), the commercialization of this technology faces significant multidisciplinary hurdles. The transition from theoretical models to grid-scale deployment is currently bottlenecked by aviation regulations, extreme material fatigue on the tether, unpredictable high-altitude weather events, and the necessity for flawless autonomous control systems.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {bottlenecks.map((item, index) => (
                        <motion.section
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className={`bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}
                        >
                            {/* Decorative Background Gradient Hover Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>

                            <div className="flex flex-col lg:flex-row gap-10 items-start relative z-10">
                                {/* Left Side: Title & Icon */}
                                <div className="lg:w-1/3 shrink-0">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg ${item.shadowColor} text-white shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                                            {item.icon}
                                        </div>
                                        <span className="text-slate-300 dark:text-slate-700 font-display font-black text-6xl tracking-tighter opacity-50">
                                            {item.id}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white uppercase tracking-tight leading-tight">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Right Side: Content Blocks */}
                                <div className="lg:w-2/3 space-y-6">
                                    {item.subsections.map((sub, subIndex) => (
                                        <div key={subIndex} className={`p-6 rounded-2xl ${item.bgLight} border ${item.borderColor} backdrop-blur-md transition-transform duration-300 hover:-translate-y-1`}>
                                            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-3">
                                                <h4 className="font-bold text-slate-900 dark:text-white text-lg tracking-wide uppercase">
                                                    {sub.subtitle}
                                                </h4>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {sub.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* Conclusion Block */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mt-20 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-black dark:to-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800 text-center relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.15),transparent_70%)]"></div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <Activity className="w-12 h-12 text-red-500 mx-auto mb-6" />
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-wider mb-6">
                            Conclusion on Bottlenecks
                        </h2>
                        <p className="text-lg text-slate-300 leading-relaxed font-light">
                            For <HawcText /> to disrupt the traditional wind energy market, the focus must shift from proving the physics (which are already validated) to solving airspace regulation and material longevity. The successful AWES company will be the one that designs a tether capable of surviving 10+ years of UV exposure, tension, and electrical load, while simultaneously working with aviation authorities to create standardized "airborne wind farm" zones.
                        </p>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
