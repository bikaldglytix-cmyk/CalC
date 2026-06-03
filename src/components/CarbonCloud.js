"use client";
import React, { useEffect, useState } from 'react';
import styles from './CarbonCloud.module.css';

export default function CarbonCloud({ total }) {
  const [prevTotal, setPrevTotal] = useState(total);
  const [isBouncing, setIsBouncing] = useState(false);
  
  const averageNepal = 1.2; // Tons of CO2e
  const isStormy = total >= averageNepal;

  // Trigger a bounce animation whenever the total increases
  useEffect(() => {
    if (total > prevTotal) {
      setIsBouncing(true);
      const t = setTimeout(() => setIsBouncing(false), 500);
      setPrevTotal(total);
      return () => clearTimeout(t);
    }
  }, [total, prevTotal]);

  // Calculate cloud size based on total (starts at scale 0.8, max scale ~1.5)
  const baseScale = 0.8;
  const growthFactor = Math.min(total / 3, 1); // Caps growth at 3 tons
  const currentScale = baseScale + (growthFactor * 0.7);

  // Calculate color darkness (0 = white, 1 = dark grey #444)
  const darkness = Math.min(total / averageNepal, 1);
  const r = Math.round(255 - (darkness * 170));
  const g = Math.round(255 - (darkness * 170));
  const b = Math.round(255 - (darkness * 160)); // slightly blue tint to the storm

  return (
    <div className={styles.cloudWrapper}>
      {isStormy && (
        <div className={styles.warningBanner}>
          <span className="lang-en">⚠️ Above Nepal's Average! ({averageNepal}t)</span>
          <span className="lang-np">⚠️ नेपालको औसतभन्दा माथि! ({averageNepal}t)</span>
        </div>
      )}

      <div 
        className={`${styles.cloudContainer} ${isBouncing ? styles.bounce : ''}`}
        style={{
          transform: `scale(${currentScale})`,
        }}
      >
        <svg viewBox="0 0 100 60" className={styles.cloudSvg}>
          <path 
            d="M 25 45 A 15 15 0 0 1 25 15 A 20 20 0 0 1 65 10 A 18 18 0 0 1 85 30 A 15 15 0 0 1 80 55 Z" 
            fill={`rgb(${r}, ${g}, ${b})`} 
            style={{ transition: 'fill 1s ease' }}
          />
          {/* Subtle cloud shadow at bottom */}
          <path 
            d="M 25 45 Q 50 40 80 55 Q 50 60 25 45 Z" 
            fill={`rgba(0,0,0,${0.1 + (darkness * 0.2)})`}
            style={{ transition: 'fill 1s ease' }}
          />
        </svg>

        {isStormy && (
          <div className={styles.lightning}>
            <svg viewBox="0 0 24 24">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="#ffd700" />
            </svg>
          </div>
        )}
      </div>

      <div className={`${styles.metricPill} ${isStormy ? styles.metricStormy : ''}`}>
        <span className={styles.number}>{total.toFixed(2)}</span>
        <span className={styles.unit}>tons CO₂e</span>
      </div>
    </div>
  );
}
