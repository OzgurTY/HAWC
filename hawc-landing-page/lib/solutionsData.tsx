import React from 'react';
import { ShieldCheck, CheckCircle2, Activity, Lightbulb, Zap } from 'lucide-react';
import HawcText from '@/components/HawcText';

export const solutionsData = [
    {
        id: "01",
        slug: "airspace-integration",
        title: "Solving Airspace Integration",
        icon: <ShieldCheck className="w-8 h-8 text-white" />,
        color: "from-emerald-500 to-teal-400",
        bgLight: "bg-emerald-50 dark:bg-emerald-900/10",
        borderColor: "border-emerald-200 dark:border-emerald-900/40",
        shadowColor: "shadow-emerald-500/20",
        status: "Active Strategy",
        bottleneck: "Airspace Integration and Regulatory Frameworks",
        subsections: [
            {
                subtitle: "Dynamic Airspace Management Systems",
                text: (
                    <div className="space-y-4">
                        <p>Instead of remaining invisible obstacles, our systems actively communicate with the sky. We develop real-time geofencing systems integrated directly with existing aviation networks.</p>
                        <p>By utilizing standard <strong>ADS-B</strong> (Automatic Dependent Surveillance-Broadcast) technology, every <HawcText /> zeppelin continuously broadcasts its precise location and altitude to all surrounding aircraft and Air Traffic Control.</p>
                    </div>
                )
            },
            {
                subtitle: "AI-Based Collision Avoidance",
                text: (
                    <div className="space-y-4">
                        <p>Our flight control software is equipped to handle unpredictable airspace intrusions by integrating advanced autonomous avoidance algorithms.</p>
                        <ul className="list-disc pl-5 space-y-2 mt-4">
                            <li>If an aircraft strays near our operational radius, the system enables rapid, real-time altitude adjustment.</li>
                            <li>The zeppelin is automatically winched down to a safe clearance level until the airspace is secure.</li>
                        </ul>
                    </div>
                )
            },
            {
                subtitle: "Dedicated Energy Air Corridors",
                text: (
                    <div className="space-y-4">
                        <p>For permanent grid-scale deployments, we advocate for and aim to establish designated airspace zones strictly for airborne wind systems.</p>
                        <p>This zoning approach is similar to established drone corridors or restricted military zones, providing long-term legal security for energy production.</p>
                    </div>
                )
            },
            {
                subtitle: "Modular / Temporary Deployment Licensing",
                text: (
                    <div className="space-y-4">
                        <p>As our primary go-to-market strategy, we bypass the decades-long process of permanent airspace rezoning by introducing flexible regulatory frameworks for temporary installations.</p>
                        <p>This makes our modular systems perfectly suited for rapid, short-term deployment in disaster zones or offshore environments, where airspace is often already restricted.</p>
                    </div>
                )
            }
        ],
        splineUrl: "",
        shortDescription: <>To transform regulatory bottlenecks into operational standards, <HawcText /> is implementing a proactive, four-pillar airspace strategy.</>
    },
    {
        id: "02",
        slug: "material-limitations",
        title: "Overcoming Material Limitations",
        icon: <CheckCircle2 className="w-8 h-8 text-white" />,
        color: "from-blue-500 to-indigo-400",
        bgLight: "bg-blue-50 dark:bg-blue-900/10",
        borderColor: "border-blue-200 dark:border-blue-900/40",
        shadowColor: "shadow-blue-500/20",
        status: "Active Strategy",
        bottleneck: "Material Science: Engineering the Soft Airframe",
        subsections: [
            {
                subtitle: "The High-Altitude Material Challenge",
                text: (
                    <div className="space-y-4">
                        <p>Operating a grid-scale Airborne Wind Energy System (AWES) at altitudes exceeding 600 meters requires rethinking traditional aerospace materials. The <HawcText /> aerostat is not merely a "balloon"; it is a highly engineered, lighter-than-air (LTA) soft airframe.</p>
                        <p>To maintain continuous flight and aerodynamic stability, the external envelope must simultaneously defeat three relentless environmental adversaries: severe ultraviolet (UV) radiation, hurricane-force mechanical shear, and the atomic-level escape of helium gas.</p>
                        <p>Because no single fabric in existence can survive these three threats simultaneously, we rely on a proprietary multi-layer composite approach.</p>
                    </div>
                )
            },
            {
                subtitle: "Extreme Limitations of Standalone Fabrics",
                text: (
                    <div className="space-y-4">
                        <p>To understand our final architecture, we must first evaluate the fatal flaws of standalone aerospace materials:</p>
                        <ul className="list-disc pl-5 space-y-4 mt-4">
                            <li><strong>Vectran (Liquid Crystal Polymer):</strong> Famous for being used in NASA's Mars Rover landing airbags, it possesses an incredible strength-to-weight ratio and exceptional tear resistance. If a bird or debris strikes during a storm, Vectran prevents catastrophic ripping. <strong>The Flaw:</strong> It is highly vulnerable to UV degradation and turns brittle in sunlight. Furthermore, it is porous and cannot contain lifting gases.</li>
                            <li><strong>Tedlar (Polyvinyl Fluoride - PVF):</strong> Manufactured by DuPont, it acts as an absolute UV shield. It has a highly lubricious (Teflon-like) surface, meaning atmospheric ice and snow cannot adhere to it—crucial for preventing weight-buildup. <strong>The Flaw:</strong> It lacks tensile strength and stretches or breaks easily under mechanical stress.</li>
                            <li><strong>Mylar (BoPET) and TPU:</strong> Helium is the second smallest element in the universe and slowly leaks through conventional fabrics. High-density films like Mylar act as an exceptional gas barrier. TPU allows the panels to be seamlessly welded together using heat or lasers, eliminating microscopic leaks caused by stitching. <strong>The Flaw:</strong> These films are extremely thin and possess virtually zero structural strength.</li>
                        </ul>
                    </div>
                )
            },
            {
                subtitle: "The Solution: Multi-Layer Aerospace Laminate",
                text: (
                    <div className="space-y-4">
                        <p>Instead of searching for a single miracle fabric, <HawcText /> engineers have conceptualized a multi-layer smart laminate—fusing the specific strengths of Vectran, Tedlar, and Mylar into a single, impenetrable armor structured from the outside in:</p>
                        <ul className="list-disc pl-5 space-y-4 mt-4">
                            <li><strong>The Outer Shell (Weather & UV Shield):</strong> Coated with a thin layer of Tedlar. This serves as the first line of defense, deflecting intense high-altitude UV radiation, protecting the inner structural fibers from sun rot, and providing an anti-icing surface.</li>
                            <li><strong>The Structural Skeleton (Load-Bearing Matrix):</strong> Beneath the weather shield lies a cross-woven matrix of Vectran (or high-tenacity Dacron). This acts as the skeletal muscle of the aerostat, absorbing massive tensile loads, tether tension, and aerodynamic drag caused by turbulent storm winds.</li>
                            <li><strong>The Inner Core (Gas Barrier & Weldability):</strong> The innermost layer consists of Mylar film bonded with TPU. This completely locks the helium inside, drastically reducing OPEX by minimizing helium top-ups, and allows for flawless thermal welding to create a unified airframe.</li>
                        </ul>
                    </div>
                )
            }
        ],
        splineUrl: "",
        imageUrl: "/material-solution.png",
        imageClassName: "scale-[1.35]",
        shortDescription: <>By engineering a proprietary smart laminate that utilizes Tedlar to deflect the elements, Vectran to withstand the storm, and Mylar to lock in the lift, we have transformed the traditional blimp into a resilient <HawcText /> energy vessel.</>
    },
    {
        id: "03",
        slug: "environmental-hazards",
        title: "Defying Environmental Hazards",
        icon: <Activity className="w-8 h-8 text-white" />,
        color: "from-cyan-500 to-sky-400",
        bgLight: "bg-cyan-50 dark:bg-cyan-900/10",
        borderColor: "border-cyan-200 dark:border-cyan-900/40",
        shadowColor: "shadow-cyan-500/20",
        status: "Active Strategy",
        bottleneck: "Environmental and Weather Hazards",
        subsections: [
            {
                subtitle: "The Threat of Extreme Storm Drag",
                text: (
                    <div className="space-y-4">
                        <p>While a zeppelin generates excellent lift, its large volumetric envelope creates massive aerodynamic drag during extreme storm events. If left exposed to hurricane-force winds, the structural limits of the tether and the envelope will be catastrophically breached.</p>
                        <ul className="list-disc pl-5 space-y-4 mt-4">
                            <li><strong>Morphology vs AI:</strong> Designing flexible structures that physically alter shape to reduce surface area during storms is mechanically complex and prone to failure in freezing conditions. Therefore, we rely on <strong>Predictive Weather AI Systems</strong>.</li>
                            <li><strong>Predictive Weather AI Systems:</strong> This software-driven approach uses machine learning forecasting models integrated with global meteorological data and onboard sensors to automatically trigger early retrieval.</li>
                            <li><strong>The Verdict:</strong> Highly Viable. By automatically reeling the aerostat down to a safe ground-docking station hours before a destructive weather front arrives, we implement the most practical, safest, and most cost-effective method to protect a multi-million-dollar asset.</li>
                        </ul>
                    </div>
                )
            },
            {
                subtitle: "Defeating Atmospheric Icing",
                text: (
                    <div className="space-y-4">
                        <p>At high altitudes, moisture combined with sub-freezing temperatures can cause rapid ice accumulation on the aerostat's envelope. Ice adds dramatic weight, destroying the LTA buoyancy.</p>
                        <p><strong>The Integrated Solution:</strong> Active de-icing systems require too much power and weight. Instead, <HawcText /> relies on a combination of Material Science and Predictive AI:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-4">
                            <li><strong>Advanced Outer Coatings:</strong> Utilizing a Tedlar layer which possesses highly lubricious, anti-icing properties prevents supercooled water droplets from adhering to the surface.</li>
                            <li><strong>Altitude Adjustment:</strong> Predictive AI detects specific humidity and temperature dew points that lead to icing, autonomously lowering the system to a warmer altitude layer to shed the ice.</li>
                        </ul>
                    </div>
                )
            },
            {
                subtitle: "Combating Helium Leakage",
                text: (
                    <div className="space-y-4">
                        <p>Helium consists of incredibly small molecules that slowly escape through almost any fabric over time. Maintaining buoyancy typically requires regular topping up, increasing operational expenditure.</p>
                        <ul className="list-disc pl-5 space-y-4 mt-4">
                            <li><strong>Improved Gas Retention:</strong> We rely on advanced highly-impermeable layers (like TPU-bonded Mylar) to drastically extend the intervals between top-ups. However, no membrane is 100% impermeable to helium.</li>
                            <li><strong>Hybrid Lift Systems (The Ultimate Solution):</strong> Instead of relying solely on the buoyancy of the gas, the <HawcText /> aerostat is designed as a lifting body. This combines the static lift of helium with the dynamic aerodynamic lift generated by the wind flowing over the zeppelin's wing-like shape.</li>
                            <li><strong>The Verdict:</strong> By using the wind to push the aerostat upward like a kite, the system requires significantly less helium volume over time. If helium slowly leaks, the aerodynamic lift compensates for the minor loss in static buoyancy, dramatically cutting maintenance downtime.</li>
                        </ul>
                    </div>
                )
            }
        ],
        splineUrl: "",
        imageUrl: "/environmental-solution.png",
        imageClassName: "scale-[1.2]",
        shortDescription: <>To conquer the troposphere, we reject brute-force resistance in favor of smart adaptable engineering. <HawcText /> employs Predictive Weather AI for storm defense and a Hybrid Lift Architecture to combat helium loss.</>
    },
    {
        id: "04",
        slug: "autonomous-control",
        title: "Autonomous Control & Safety",
        icon: <Lightbulb className="w-8 h-8 text-white" />,
        color: "from-purple-500 to-fuchsia-400",
        bgLight: "bg-purple-50 dark:bg-purple-900/10",
        borderColor: "border-purple-200 dark:border-purple-900/40",
        shadowColor: "shadow-purple-500/20",
        status: "Active Strategy",
        bottleneck: "Autonomous Control and System Reliability",
        subsections: [
            {
                subtitle: "Redundant Control Systems (The Baseline Safety Net)",
                text: (
                    <div className="space-y-4">
                        <p>To mitigate the risk of hardware failure in the sky, <HawcText /> employs triple-redundant flight control systems—the gold standard in commercial aviation—alongside backup communication channels.</p>
                        <ul className="list-disc pl-5 space-y-4 mt-4">
                            <li><strong>Advantages:</strong> Triple redundancy means that if one onboard computer or sensor fails, two backup systems immediately override it to maintain stable flight. The backup communication channels ensure that the ground station never loses telemetry, even in heavy electromagnetic interference.</li>
                            <li><strong>Disadvantages:</strong> Adding multiple flight computers, sensors, and independent battery backups increases the overall weight of the avionics payload, which marginally reduces the system's net lifting capacity.</li>
                            <li><strong>Verdict:</strong> Mandatory. Aviation authorities will not certify an autonomous tethered system operating in navigable airspace without strictly proven hardware redundancy.</li>
                        </ul>
                    </div>
                )
            },
            {
                subtitle: "AI-Based Adaptive Control (The Active Brain)",
                text: (
                    <div className="space-y-4">
                        <p>The troposphere is highly volatile. To maintain stability, <HawcText /> utilizes AI-based adaptive control systems powered by reinforcement learning models to deliver real-time responses to unpredictable wind shear and turbulence.</p>
                        <ul className="list-disc pl-5 space-y-4 mt-4">
                            <li><strong>Advantages:</strong> Traditional static controllers (like PID loops) react <em>after</em> a disturbance pushes the aerostat off-course. Our models, trained on thousands of hours of data, can proactively adjust pitch, yaw, and tether tension the millisecond a gust hits.</li>
                            <li><strong>Disadvantages:</strong> Neural networks are complex and sometimes act as "black boxes," making it difficult to prove mathematical determinism to safety regulators. They also require massive amounts of accurate training data.</li>
                            <li><strong>Verdict:</strong> Highly Viable. AI is the only mechanism fast enough to handle high-altitude turbulence efficiently. We restrict boundaries with hard-coded safety limits to satisfy regulatory concerns.</li>
                        </ul>
                    </div>
                )
            },
            {
                subtitle: "Digital Twin Simulation (The Predictive Oracle)",
                text: (
                    <div className="space-y-4">
                        <p>Instead of waiting for a component to break, we employ a Digital Twin Simulation to continuously simulate system behavior and predict mechanical or electrical failures before they occur in the real world.</p>
                        <ul className="list-disc pl-5 space-y-4 mt-4">
                            <li><strong>Advantages:</strong> This shifts maintenance from a reactive to a predictive model. By feeding real-time sensor data into a virtual replica on the ground, the system can foresee tether fatigue, motor overheating, or aerodynamic instability.</li>
                            <li><strong>Disadvantages:</strong> Running high-fidelity physics simulations in real-time requires significant localized computational power and demands perfect, uninterrupted sensor telemetry from the aerostat.</li>
                            <li><strong>Verdict:</strong> Highly Viable. Because the heavy computational load is handled by the ground station rather than the airborne zeppelin, there is no weight penalty. It represents the ultimate insurance policy for AWES operations.</li>
                        </ul>
                    </div>
                )
            }
        ],
        splineUrl: "",
        imageUrl: "",
        shortDescription: <>By combining Triple-Redundant Hardware, AI-Based Adaptive Control, and Digital Twin predictive maintenance, <HawcText /> transforms from an experimental kite into a fail-safe, commercially viable energy vessel.</>
    },
    {
        id: "05",
        slug: "energy-downlink",
        title: "Optimized Energy Downlink",
        icon: <Zap className="w-8 h-8 text-white" />,
        color: "from-amber-500 to-yellow-400",
        bgLight: "bg-amber-50 dark:bg-amber-900/10",
        borderColor: "border-amber-200 dark:border-amber-900/40",
        shadowColor: "shadow-amber-500/20",
        status: "Proposed Solution",
        bottleneck: "Energy Transmission and Downlink Inefficiency",
        subsections: [
            {
                subtitle: "Why was Airborne Storage (Li-Air Batteries) Dismissed?",
                text: (
                    <div className="space-y-4">
                        <p>While storing energy on the zeppelin rather than transmitting it via a tether might seem like a solid aerodynamic aerodynamic solution initially, it is completely inviable due to the weight-energy paradox.</p>
                        <ul className="list-disc pl-5 space-y-3 mt-4">
                            <li><strong>Statistical Comparison:</strong> Standard Lithium-Ion (Li-Ion) batteries used in electric vehicles average around 250 Wh/kg in energy density. Next-generation Lithium-Air (Li-Air) batteries jump to impressive practical applications of 1,000 - 3,000 Wh/kg, far outperforming standard chemical cells.</li>
                            <li><strong>Logistic & Operational Collapse:</strong> Even utilizing superior technologies like Li-Air, storing just 10 hours of a 100 kW turbine's maximum capacity (1 MWh) would require the zeppelin to carry approximately 1 ton of battery weight. When full, the system must descend to the ground, swap or discharge batteries, and climb back to 600m. A system ascending and descending multiple times a day misses vital wind streams and cannot provide continuous power. Thus, grid-scale on-board storage is fundamentally irrational.</li>
                        </ul>
                    </div>
                )
            },
            {
                subtitle: "Core Solution: Uninterrupted Transmission & Smart Tether Architecture",
                text: (
                    <div className="space-y-4">
                        <p>Instead of flying tons of batteries, utilizing a physical tether to simultaneously transmit energy to the grid is the most rational engineering solution. This tether is architected in a tri-layer hybrid structure, accounting for aerodynamic drag and load-bearing capacity:</p>
                        <ul className="list-disc pl-5 space-y-3 mt-4">
                            <li><strong>Material Trade-offs:</strong> Copper is an excellent electrical conductor but inherently heavy (8.96 g/cm³). A 600m copper cable would systematically drag the system down. We opted for Aluminum Composite strands, which are 70% lighter while maintaining acceptable conductivity levels.</li>
                            <li><strong>Core Layer:</strong> The innermost layer consists of Kevlar or Dyneema—materials immensely stronger than steel yet as light as water. This core handles all physical tension and atmospheric drag, taking the structural load off the aluminum.</li>
                            <li><strong>Conductive Layer:</strong> Wound around the core, aluminum composite strands carry the generator's current back down to Earth.</li>
                            <li><strong>Jacket Layer:</strong> The outermost layer is an aerospace-grade Teflon/Polymer insulator protecting inner layers from weather, friction, and environmental wear.</li>
                        </ul>
                    </div>
                )
            },
            {
                subtitle: "The Heating Problem & HVDC (High Voltage) Solution",
                text: (
                    <div className="space-y-4">
                        <p>Attempting to transmit massive power across an aluminum tether at standard grid voltage would cause the electrical resistance to turn the cable into a giant heater within seconds, losing most of the energy into the atmosphere (I²R losses). To prevent this, we focus on the fundamental physics power equation:</p>

                        <div className="my-8 p-8 bg-slate-50 dark:bg-slate-900/40 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center shadow-inner relative overflow-hidden">
                            <div className="absolute -inset-10 bg-gradient-to-tr from-transparent via-amber-500/5 to-transparent blur-2xl"></div>
                            <span className="text-3xl md:text-4xl font-serif font-black tracking-widest text-slate-800 dark:text-slate-100 mb-2 mt-2 relative z-10">
                                P = V &times; I
                            </span>
                        </div>

                        <ul className="list-disc pl-5 space-y-3 mt-4">
                            <li>To keep the total Power (<span className="font-serif italic font-semibold">P</span>) constant while reducing the cable-melting Current (<span className="font-serif italic font-semibold">I</span>), we must drastically increase the Voltage (<span className="font-serif italic font-semibold">V</span>).</li>
                            <li><strong>Step-up Transformer:</strong> We integrate a lightweight step-up transformer within the zeppelin. Instead of feeding generator power directly to the tether, we step up the voltage to 10 kV (10,000 Volts) or higher right at the gondola.</li>
                            <li><strong>Result:</strong> With increased voltage, the amperage running down the tether drops dramatically. This allows us to transmit megawatts of energy through a thin, lightweight aluminum wire with virtually zero resistance heating or energy loss.</li>
                        </ul>
                    </div>
                )
            }
        ],
        imageUrl: "/cable-solution.png",
        imageClassName: "-rotate-90 scale-[1.5]",
        shortDescription: "Solving the weight vs conductivity trade-off and efficiently feeding high-voltage power to the grid."
    }
];
