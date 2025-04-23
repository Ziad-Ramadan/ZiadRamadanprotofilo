"use client";
import { useEffect, useRef, useState } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";

export default function VantaWaves() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 2.0,
          scaleMobile: 2.0,
          color: 0x62743,
          THREE: THREE, // Pass Three.js
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full -z-10" />;
}
