'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Plane, Menu, ChevronDown, Wind, Rocket, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import Globe from '@/components/Globe';
import hawcLogo from '@/components/assets/hawc_logo-.png';
import hawcMark1 from '@/components/assets/hawc_mark1.png';
import HawcText from '@/components/HawcText';
import ozgurImg from "./people/ozguryavuz.jpg";
import duyguImg from "./people/duyguyaldiz.jpeg";
import cemImg from "./people/cemsalturk.jpeg";
import emirhanImg from "./people/emirhanadigozel.jpeg";
import burakImg from "./people/buraktoroglu.png";
import gokayImg from "./people/gokayturken.jpeg";
import SolutionsSection from '@/components/home/SolutionsSection';
import DesignThinkingSection from '@/components/home/DesignThinkingSection';


export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDiscoverOpen, setMobileDiscoverOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            <div className="flex-shrink-0 flex items-center gap-4">
              <Image src={hawcLogo} alt="HAWC Logo" width={96} height={96} className="w-auto h-12 md:h-14 object-contain" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link href="/#vision" className="hover:text-primary transition-colors px-3 py-2 rounded-md text-lg font-medium">Vision</Link>
                <div className="relative group">
                  <button className="flex items-center gap-1 hover:text-primary transition-colors px-3 py-2 rounded-md text-lg font-medium">
                    Discover <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 rounded-xl shadow-lg bg-white dark:bg-slate-900 ring-1 ring-black ring-opacity-5 border border-slate-200 dark:border-slate-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left -translate-y-2 group-hover:translate-y-0 text-slate-800 dark:text-slate-200 p-2 overflow-hidden backdrop-blur-xl">
                    <Link href="/researches" className="block px-4 py-3 text-sm rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors">Research</Link>
                    <Link href="/solutions" className="block px-4 py-3 text-sm rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-emerald-500 transition-colors">Solutions</Link>
                    <Link href="/achievements" className="block px-4 py-3 text-sm rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-green-500 transition-colors">Achievements</Link>
                  </div>
                </div>
                <Link href="/#bottlenecks" className="hover:text-primary transition-colors px-3 py-2 rounded-md text-lg font-medium">Bottlenecks</Link>
                <Link href="/#team" className="hover:text-primary transition-colors px-3 py-2 rounded-md text-lg font-medium">Team</Link>
                <Link href="/#contact" className="bg-primary hover:bg-sky-400 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg shadow-primary/20">Contact</Link>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/#vision" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Vision</Link>

              <div className="space-y-1">
                <button
                  onClick={() => setMobileDiscoverOpen(!mobileDiscoverOpen)}
                  className="w-full text-left flex items-center justify-between text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                >
                  Discover
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDiscoverOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileDiscoverOpen && (
                  <div className="pl-6 space-y-1">
                    <Link href="/researches" onClick={() => setMobileMenuOpen(false)} className="text-slate-500 dark:text-slate-400 hover:text-primary block px-3 py-2 rounded-md text-sm font-medium">Research</Link>
                    <Link href="/solutions" onClick={() => setMobileMenuOpen(false)} className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 block px-3 py-2 rounded-md text-sm font-medium">Solutions</Link>
                    <Link href="/achievements" onClick={() => setMobileMenuOpen(false)} className="text-slate-500 dark:text-slate-400 hover:text-green-500 block px-3 py-2 rounded-md text-sm font-medium">Achievements</Link>
                  </div>
                )}
              </div>

              <Link href="/#bottlenecks" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Bottlenecks</Link>
              <Link href="/#team" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Team</Link>
              <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-primary hover:text-sky-400 block px-3 py-2 rounded-md text-base font-bold">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
        <Image
          src={hawcMark1}
          alt="HAWC Mark 1 Turbine"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
        <div
          className="absolute inset-0 opacity-10 bg-[length:40px_40px]"
          style={{ backgroundImage: "linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)" }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left pt-10 lg:pt-0">
              <div className="mb-6 inline-block">
                <span className="py-1 px-3 rounded-full border border-primary/50 bg-primary/10 text-primary text-sm tracking-widest uppercase font-bold backdrop-blur-sm">
                  High-Altitude Wind Capture
                </span>
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-black tracking-tight text-white mb-6 uppercase drop-shadow-2xl leading-tight break-words">
                  Capturing the <br className="hidden md:block" />
                  <span className="gradient-text">Power of the Sky</span>
                </h1>
              </div>

              <div>
                <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-base md:text-lg lg:text-xl text-slate-300 font-light tracking-wide mb-10">
                  Unlocking the next frontier of renewable energy with autonomous airborne wind turbines.
                </p>
              </div>

              <div className="flex justify-center lg:justify-start gap-4">
                <Link href="#vision" className="group relative px-8 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-widest overflow-hidden hover:text-black transition-colors duration-300">
                  <span className="absolute inset-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                  <span className="relative z-10">Explore the Future</span>
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[300px] md:h-[400px] lg:h-[450px] w-full relative"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary"
        >
          <ChevronDown className="w-10 h-10" />
        </motion.div>
      </section>

      {/* Why High-Altitude Wind Energy Section */}
      <section className="relative py-24 overflow-hidden bg-slate-950 border-t border-b border-slate-800">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Vision & The Problem
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white leading-tight uppercase tracking-tight">
                Why <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">High-Altitude</span> <br />
                Wind Energy?
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-8 md:p-10 rounded-3xl shadow-2xl relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <p className="text-lg md:text-xl text-slate-300 leading-relaxed relative z-10 font-light">
                  The global transition to clean energy heavily relies on traditional Horizontal-Axis Wind Turbines (HAWTs). However, conventional turbines are limited by the Earth's boundary layer—where winds are turbulent and weak—and require extreme material investments <span className="text-slate-400 italic">(hundreds of tons of steel and concrete per turbine)</span>.
                </p>

                <div className="my-8 w-16 h-[1px] bg-gradient-to-r from-primary to-transparent"></div>

                <p className="text-xl md:text-2xl text-white font-medium leading-relaxed relative z-10">
                  We chose this topic because we believe the future of wind energy isn't about building taller towers; <span className="text-primary font-bold">it's about flying above the limits.</span> High-altitude winds are faster, more consistent, and hold exponentially more power.
                </p>

                <div className="absolute bottom-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform duration-700 ease-out z-0 pointer-events-none">
                  <Wind className="w-48 h-48" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 bg-background-light dark:bg-background-dark relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 uppercase">Research & Achievements</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

            {/* Research Card (Left) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-card-light dark:bg-card-dark border border-slate-200 dark:border-slate-800 p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] relative overflow-hidden"
            >
              <Link href="/researches" className="absolute inset-0 z-20 focus:outline-none" aria-label="Read more about our Research"></Link>

              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6">
                <Wind className="w-48 h-48 text-primary" />
              </div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 bg-blue-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-inner">
                  <Wind className="w-7 h-7" />
                </div>
                <div className="text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Explore</div>
              </div>

              <h3 className="text-3xl font-display font-black text-slate-900 dark:text-white mb-4 tracking-tight relative z-10">
                Research
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg relative z-10 font-light">
                Dive deep into the physics, aerodynamics, and mathematical models that prove the exponential power potential of autonomous high-altitude wind capture systems.
              </p>

              <div className="mt-8 flex items-center text-primary font-bold text-sm tracking-wider uppercase group-hover:translate-x-2 transition-transform relative z-10">
                Read Papers & Data <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </motion.div>

            {/* Achievements Card (Right) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group bg-card-light dark:bg-card-dark border border-slate-200 dark:border-slate-800 p-8 rounded-2xl hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] relative overflow-hidden"
            >
              <Link href="/achievements" className="absolute inset-0 z-20 focus:outline-none" aria-label="Read more about our Achievements"></Link>

              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-6">
                <Rocket className="w-48 h-48 text-green-500" />
              </div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform shadow-inner">
                  <Rocket className="w-7 h-7" />
                </div>
                <div className="text-xs font-bold tracking-widest uppercase text-green-600 dark:text-green-400 bg-green-500/10 px-3 py-1 rounded-full">Milestones</div>
              </div>

              <h3 className="text-3xl font-display font-black text-slate-900 dark:text-white mb-4 tracking-tight relative z-10">
                Achievements
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg relative z-10 font-light">
                Discover our technological breakthroughs, from successful autonomous flight tests and tether dynamics validation to securing our first microgrid deployment partnerships.
              </p>

              <div className="mt-8 flex items-center text-green-600 dark:text-green-400 font-bold text-sm tracking-wider uppercase group-hover:translate-x-2 transition-transform relative z-10">
                View Timeline <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Thinking Methodology Section */}
      <DesignThinkingSection />

      {/* Bottlenecks Section */}
      <section id="bottlenecks" className="py-24 bg-slate-100 dark:bg-slate-900/50 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-5 bg-[length:30px_30px] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at center, #ef4444 1px, transparent 1px)" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-bold mb-6 tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                The Challenges
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 dark:text-white uppercase tracking-tight mb-6">
                Technical <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Bottlenecks</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                While the aerodynamic principles and material economics of <HawcText /> strongly favor Airborne Wind Energy Systems, commercialization faces significant multidisciplinary hurdles. The transition to grid-scale deployment is currently bottlenecked by aviation regulations, extreme material fatigue, and autonomous control scaling.
              </p>

              <Link
                href="/bottlenecks"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] transform hover:-translate-y-1"
              >
                <span>Explore the Data</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-orange-500/20 rounded-full blur-[80px]"></div>
              <div className="relative bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl">
                <div className="flex flex-col gap-5">
                  {/* Mock data bars representing challenges */}
                  {[
                    { name: "Airspace Integration", width: "95%", color: "bg-red-600" },
                    { name: "Material Science: Tether", width: "85%", color: "bg-red-500" },
                    { name: "Environmental Hazards", width: "75%", color: "bg-orange-600" },
                    { name: "Autonomous Control", width: "65%", color: "bg-orange-500" },
                    { name: "Energy Transmission", width: "55%", color: "bg-amber-500" },
                  ].map((stat, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        <span>{stat.name}</span>
                      </div>
                      <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className={`h-full ${stat.color} rounded-full`} style={{ width: stat.width }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <SolutionsSection />

      {/* Team Section */}
      <section id="team" className="py-24 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 uppercase">The <HawcText /> Leaders</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Pioneers in aerospace engineering, renewable energy systems, and business strategy.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Özgür Tuna Yavuz", role: "CEO", img: ozgurImg, desc: "Drives the overarching strategic vision, ensuring that our high-altitude wind capture technology accelerates the global transition toward risk-distributed and economically viable renewable energy systems." },
              { name: "Emirhan Adıgözel", role: "CTO", img: emirhanImg, desc: "Directs the core engineering initiatives, specifically optimizing the complex technical trade-offs between flight aerodynamics, tether conductivity, and power electronics." },
              { name: "Cem Saltürk", role: "CMO", img: cemImg, desc: "Crafts a futuristic and compelling corporate brand identity that effectively communicates the technical brilliance of our airborne wind systems to investors, partners, and the broader public." },
              { name: "Burak Toroğlu", role: "CFO", img: burakImg, desc: "Manages the financial strategy and economic modeling, ensuring that the capital-intensive research and development phases translate into a profitable, scalable business model." },
              { name: "Duygu Yaldız", role: "COO", img: duyguImg, desc: "Orchestrates the day-to-day operational logistics, bridging the gap between hardware manufacturing, laboratory circuit testing, and active field deployment." },
              { name: "Gökay Türken", role: "Head of Government Affairs", img: gokayImg, desc: "Navigates complex national airspace regulations and energy policies, advocating for legislative support to safely integrate our flying turbines into the commercial grid." }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-800">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Default State Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500"></div>
                  
                  {/* Default Name & Role */}
                  <div className="absolute bottom-0 left-0 p-6 w-full transform group-hover:-translate-y-4 group-hover:opacity-0 transition-all duration-500 ease-out">
                    <h3 className="text-xl font-bold text-white font-display leading-tight">{member.name}</h3>
                    <p className="text-primary font-medium tracking-wider text-sm mt-1">{member.role}</p>
                  </div>

                  {/* Hover State Detail (Slides up and fades in) */}
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-sm p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out border border-transparent group-hover:border-primary/50 rounded-lg">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-100">
                      <h3 className="text-xl font-bold text-white font-display leading-tight">{member.name}</h3>
                      <p className="text-primary font-medium tracking-wider text-sm mt-1 mb-4">{member.role}</p>
                      <div className="w-8 h-1 bg-primary mb-4 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>
                      <p className="text-slate-300 text-sm leading-relaxed font-light">{member.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-300 py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-4 mb-6">
                <Image src={hawcLogo} alt="HAWC Logo" width={80} height={80} className="w-auto h-12 object-contain" />
              </div>
              <p className="text-sm text-slate-400">
                Redefining the future of renewable energy through high-altitude wind capture technology.
              </p>
            </div>

            <div>
              <h4 className="text-white font-display font-bold uppercase tracking-wider mb-6">Explore</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:text-primary transition-colors">Our Technology</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Safety Protocols</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Environmental Impact</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-display font-bold uppercase tracking-wider mb-6">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><MapPin className="text-primary w-4 h-4" /> Innovation Park, Sector 4</li>
                <li className="flex items-center gap-2"><Mail className="text-primary w-4 h-4" /> contact@hawc.energy</li>
                <li className="flex items-center gap-2"><Phone className="text-primary w-4 h-4" /> +1 (555) 012-3456</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-display font-bold uppercase tracking-wider mb-6">Newsletter</h4>
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded focus:outline-none focus:border-primary text-sm"
                />
                <button type="submit" className="bg-primary hover:bg-sky-500 text-white px-4 py-2 rounded font-bold uppercase text-xs tracking-widest transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>© {new Date().getFullYear()} <HawcText /> Inc. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
