'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const GlobeT = dynamic(() => import('react-globe.gl'), { ssr: false });

export default function Globe() {
  const globeRef = useRef<any>(null);
  const [arcsData, setArcsData] = useState<any[]>([]);
  const [placesData, setPlacesData] = useState<any[]>([]);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        // Keep it square based on the smaller dimension
        const size = Math.min(clientWidth, clientHeight);
        setDimensions({ width: size, height: size });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Generate some random data for wind patterns and capture zones
    const N = 30;
    const arcs = [...Array(N).keys()].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: ['#0EA5E9', '#38bdf8', '#ffffff'][Math.round(Math.random() * 2)]
    }));
    setArcsData(arcs);

    const P = 20;
    const places = [...Array(P).keys()].map(() => ({
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      size: Math.random() * 0.3 + 0.1,
      color: '#0EA5E9'
    }));
    setPlacesData(places);
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = false;
      globeRef.current.controls().enableZoom = false;
      globeRef.current.controls().enableRotate = false;
      globeRef.current.controls().enablePan = false;
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center pointer-events-none">
      <GlobeT
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        arcsData={arcsData}
        arcColor="color"
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={1500}
        pointsData={placesData}
        pointColor="color"
        pointAltitude="size"
        pointRadius={0.15}
        pointsMerge={true}
      />
    </div>
  );
}
