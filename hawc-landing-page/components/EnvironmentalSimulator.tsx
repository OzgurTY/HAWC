"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation, ShieldCheck, Wind } from 'lucide-react';

export default function EnvironmentalSimulator() {
    type Scenario = "Clear Sky" | "Severe Storm" | "Icing Conditions" | "Helium Leak";
    const [scenario, setScenario] = useState<Scenario>("Clear Sky");
    const [aiEnabled, setAiEnabled] = useState(true);
    const [coatingEnabled, setCoatingEnabled] = useState(true);
    const [hybridLiftEnabled, setHybridLiftEnabled] = useState(true);

    // Logic implementation
    let zeppelinY = -50; // -50 means high altitude, 70 means grounded
    let zeppelinX = 0;
    let zeppelinRotation = 0;
    let zeppelinColor = "cyan"; // cyan normal, red critical, ice blue for icing
    let tetherColor = "#06b6d4"; // Cyan
    let isFlashing = false;
    let alertMessage = "";

    if (scenario === "Severe Storm") {
        if (aiEnabled) {
            zeppelinY = 70; // Grounded safely
            tetherColor = "#10b981"; // Emerald safe
            alertMessage = "System Safely Grounded via Predictive AI";
            zeppelinColor = "emerald";
        } else {
            zeppelinY = -70; // High tension
            zeppelinX = 25; // blown away
            zeppelinRotation = -15; // pitched up
            tetherColor = "#ef4444"; // Red critical
            isFlashing = true;
            alertMessage = "System Failure - High Tension & Extreme Drag";
            zeppelinColor = "red";
        }
    } else if (scenario === "Icing Conditions") {
        if (!coatingEnabled) {
            zeppelinY = 90; // Falling
            zeppelinRotation = 45; // Nose down
            zeppelinColor = "blue"; // Iced
            isFlashing = true;
            tetherColor = "#ef4444";
            alertMessage = "LTA Buoyancy Lost - Ice Accumulation";
        } else {
            zeppelinY = -50; // Stable
            zeppelinColor = "slate"; // Operating normal shedding ice
            tetherColor = "#06b6d4";
            alertMessage = "Ice Deflected by Active Coating";
        }
    } else if (scenario === "Helium Leak") {
        if (!hybridLiftEnabled) {
            zeppelinY = 40; // Losing altitude slowly
            zeppelinRotation = 10; // Nose dipping slightly
            zeppelinColor = "red";
            tetherColor = "#f59e0b"; // Warning amber
            alertMessage = "Critical Altitude Loss - Static Buoyancy Failing";
            isFlashing = true;
        } else {
            zeppelinY = -40; // Slightly lower but flying stable
            zeppelinRotation = -5; // Nose up catching lift
            zeppelinColor = "cyan";
            tetherColor = "#06b6d4";
            alertMessage = "Hybrid Lift Compensating for Leakage";
        }
    } else {
        zeppelinY = -50;
        zeppelinColor = "cyan";
        tetherColor = "#06b6d4";
        alertMessage = "Clear Sky - Optimal Energy Generation";
    }

    // Colors mapping for the gradients
    const colors = {
        cyan: "from-cyan-400 to-blue-500 shadow-cyan-500/50",
        emerald: "from-emerald-400 to-teal-500 shadow-emerald-500/50",
        red: "from-red-500 to-rose-600 shadow-red-500/50",
        blue: "from-blue-300 to-indigo-300 shadow-blue-500/50",
        slate: "from-slate-300 to-slate-500 shadow-slate-500/50"
    };

    return (
        <div className="w-full h-full flex flex-col bg-slate-900 overflow-hidden text-white font-sans absolute inset-0 z-20">
            {/* Visual Area */}
            <div className="relative flex-1 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
                {/* Weather Effects Background */}
                <div className="absolute inset-0 z-0">
                    {scenario === "Severe Storm" && (
                        <div className="w-full h-full bg-slate-900/50 animate-pulse mix-blend-overlay"></div>
                    )}
                    {scenario === "Icing Conditions" && (
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
                    )}
                </div>

                {/* Ground Station */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-12 bg-slate-800 border-t border-slate-600 rounded-t-2xl z-20 flex items-center justify-center shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
                    <div className="w-12 h-2.5 bg-slate-500 rounded-full"></div>
                </div>

                {/* Tether */}
                <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" preserveAspectRatio="none">
                    <motion.line 
                        x1="50%" 
                        y1="100%" 
                        x2={`calc(50% + ${zeppelinX}px)`} 
                        y2={`calc(50% + ${zeppelinY}px)`}
                        stroke={tetherColor}
                        strokeWidth="3"
                        strokeDasharray={isFlashing ? "6 6" : "1"}
                        animate={{
                            x2: `calc(50% + ${zeppelinX}px)`,
                            y2: `calc(50% + ${zeppelinY}px)`,
                            stroke: tetherColor
                        }}
                        transition={{ type: "spring", bounce: 0.2, duration: 1 }}
                    />
                </svg>

                {/* Zeppelin */}
                <motion.div 
                    className="absolute left-1/2 top-1/2 z-20 flex items-center justify-center drop-shadow-2xl"
                    animate={{ 
                        x: zeppelinX, 
                        y: zeppelinY, 
                        rotate: zeppelinRotation,
                        opacity: isFlashing && scenario !== "Icing Conditions" ? [1, 0.6, 1] : 1
                    }}
                    transition={{ 
                        type: "spring", bounce: 0.4, duration: 1.5,
                        opacity: { repeat: Infinity, duration: 0.5 }
                    }}
                    style={{ transformOrigin: 'center center', marginLeft: '-70px' }} // half width
                >
                    {/* The Airframe shape */}
                    <div className={`w-[140px] h-[45px] rounded-full bg-gradient-to-r ${colors[zeppelinColor as keyof typeof colors]} shadow-xl flex items-center justify-center relative`}>
                        {/* Fin Left */}
                        <div className={`absolute -left-4 top-2.5 w-10 h-6 bg-gradient-to-br ${colors[zeppelinColor as keyof typeof colors]} rounded-l-full -z-10`}></div>
                        <div className={`absolute -left-3 -top-1 w-6 h-4 bg-gradient-to-br ${colors[zeppelinColor as keyof typeof colors]} rounded-tl-full -z-10 rotate-12`}></div>
                        <div className={`absolute -left-3 -bottom-1 w-6 h-4 bg-gradient-to-br ${colors[zeppelinColor as keyof typeof colors]} rounded-bl-full -z-10 -rotate-12`}></div>
                        
                        {/* Detail lines */}
                        <div className="w-full h-full border-b border-t border-white/20 rounded-full px-5 flex items-center justify-between">
                            <div className="w-2.5 h-2.5 rounded-full bg-white/40 shadow-inner"></div>
                            <span className="text-[10px] font-black tracking-[0.2em] text-white/70 uppercase">HAWC</span>
                            <div className="w-2.5 h-2.5 rounded-full bg-white/40 shadow-inner"></div>
                        </div>
                    </div>
                </motion.div>


            </div>

            {/* Controls Area */}
            <div className="bg-slate-900 border-t border-slate-700/50 p-4 z-30 shrink-0">
                {/* Live Alert Banner */}
                <div className="h-[38px] mb-3">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={alertMessage}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className={`w-full h-full flex items-center justify-center px-4 rounded-lg border text-xs font-bold tracking-widest uppercase shadow-md ${
                                isFlashing 
                                ? 'bg-red-500/10 border-red-500/30 text-red-400' 
                                : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                            }`}
                        >
                            {alertMessage}
                        </motion.div>
                    </AnimatePresence>
                </div>
                
                <div className="mb-3">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Environmental Scenario</label>
                    <select 
                        className="w-full bg-slate-800 border border-slate-600 text-slate-100 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm font-semibold shadow-inner appearance-none relative"
                        style={{
                            backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1rem center',
                            backgroundSize: '1em'
                        }}
                        value={scenario}
                        onChange={(e) => setScenario(e.target.value as Scenario)}
                    >
                        <option value="Clear Sky">☀️ Clear Sky Operation</option>
                        <option value="Severe Storm">🌪 Severe Storm (Extreme Drag)</option>
                        <option value="Icing Conditions">❄️ Icing Conditions (-50°C)</option>
                        <option value="Helium Leak">🎈 Internal Helium Leak</option>
                    </select>
                </div>

                <div className="space-y-1.5">
                    <ToggleControl 
                        label="AI Predictive Weather" 
                        description="Autonomously winds down before storm hits"
                        enabled={aiEnabled} 
                        setEnabled={setAiEnabled}
                        icon={<Navigation className="w-4 h-4" />}
                        scenario={scenario}
                        relevantScenario="Severe Storm"
                    />
                    <ToggleControl 
                        label="Advanced Material Coating" 
                        description="Tedlar layer deflects supercooled water"
                        enabled={coatingEnabled} 
                        setEnabled={setCoatingEnabled}
                        icon={<ShieldCheck className="w-4 h-4" />}
                        scenario={scenario}
                        relevantScenario="Icing Conditions"
                    />
                    <ToggleControl 
                        label="Hybrid Lift Architecture" 
                        description="Aerodynamic lift compensates gas loss"
                        enabled={hybridLiftEnabled} 
                        setEnabled={setHybridLiftEnabled}
                        icon={<Wind className="w-4 h-4" />}
                        scenario={scenario}
                        relevantScenario="Helium Leak"
                    />
                </div>
            </div>
        </div>
    );
}

function ToggleControl({ label, description, enabled, setEnabled, icon, scenario, relevantScenario }: { label: string, description: string, enabled: boolean, setEnabled: (v: boolean) => void, icon: React.ReactNode, scenario: string, relevantScenario: string }) {
    const isRelevant = scenario === relevantScenario || scenario === "Clear Sky";
    
    return (
        <div className={`flex items-center justify-between py-2.5 px-3 bg-slate-800/80 border rounded-lg hover:bg-slate-700/80 transition-all cursor-pointer ${
            isRelevant ? 'border-slate-600/50 shadow-sm' : 'border-slate-800 opacity-60 grayscale'
        }`} onClick={() => setEnabled(!enabled)}>
            <div className="flex gap-2.5 items-center">
                <div className={`p-1.5 rounded-md ${enabled ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-700 text-slate-400'}`}>
                    {icon}
                </div>
                <div>
                    <h4 className={`text-sm font-bold transition-colors ${enabled ? 'text-slate-100' : 'text-slate-400'}`}>{label}</h4>
                    <p className="text-[10px] font-medium text-slate-500 mt-0">{description}</p>
                </div>
            </div>
            <button 
                onClick={(e) => { e.stopPropagation(); setEnabled(!enabled); }}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                    enabled ? 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]' : 'bg-slate-600'
                }`}
                role="switch"
                aria-checked={enabled}
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-300 ease-in-out ${
                        enabled ? 'translate-x-5' : 'translate-x-0'
                    }`}
                />
            </button>
        </div>
    );
}
