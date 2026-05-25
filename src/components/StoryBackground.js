"use client";
import styles from './StoryBackground.module.css';

export default function StoryBackground({ score, progress, timeOfDay }) {
  const isNight = timeOfDay === 'night';
  // Birds sleep at night
  const numBirds = isNight ? 0 : Math.max(0, Math.floor(15 * (1 - score)));
  const birds = Array.from({ length: 15 });
  const stars = Array.from({ length: 40 });

  return (
    <div className={styles.canvas} aria-hidden="true" data-time={timeOfDay} style={{ '--score': score, '--progress': progress }}>
      <div className={styles.skyGradient}></div>
      
      {/* Stars (Only visible at night, faded by pollution) */}
      <div className={styles.stars}>
        {stars.map((_, i) => (
          <div 
            key={i} 
            className={styles.star} 
            style={{
              top: `${Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              transform: `scale(${0.5 + Math.random()})`
            }}
          ></div>
        ))}
      </div>
      
      {/* Sun / Moon */}
      <div className={styles.sun}></div>
      
      {/* Drifting Clouds */}
      <div className={styles.clouds}>
        <div className={styles.cloud1}>
           <svg viewBox="0 0 100 50" fill="currentColor"><path d="M 20 30 a 15 15 0 0 1 20 -10 a 20 20 0 0 1 35 5 a 15 15 0 0 1 5 25 h -60 a 10 10 0 0 1 -5 -20 z"/></svg>
        </div>
        <div className={styles.cloud2}>
           <svg viewBox="0 0 100 50" fill="currentColor"><path d="M 20 30 a 15 15 0 0 1 20 -10 a 20 20 0 0 1 35 5 a 15 15 0 0 1 5 25 h -60 a 10 10 0 0 1 -5 -20 z"/></svg>
        </div>
        <div className={styles.cloud3}>
           <svg viewBox="0 0 100 50" fill="currentColor"><path d="M 20 30 a 15 15 0 0 1 20 -10 a 20 20 0 0 1 35 5 a 15 15 0 0 1 5 25 h -60 a 10 10 0 0 1 -5 -20 z"/></svg>
        </div>
      </div>

      {/* Flocks of Birds */}
      <div className={styles.flock}>
        {birds.map((_, i) => (
          <svg 
            key={i} 
            className={`${styles.bird} ${i >= numBirds ? styles.birdHidden : ''}`}
            style={{ 
              '--delay': `${i * 0.7}s`, 
              '--top': `${15 + (i % 4) * 8}%`,
              '--scale': 0.4 + (i % 3) * 0.3,
              '--dur': `${20 + (i % 5) * 5}s`
            }} 
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M 2 14 Q 7 8 12 12 Q 17 8 22 14 Q 17 12 12 16 Q 7 12 2 14 Z" />
          </svg>
        ))}
      </div>
      
      {/* Mountains */}
      <div className={styles.mountains}>
        <svg className={styles.mountainFar} viewBox="0 0 1000 300" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,300 L0,150 L100,200 L200,80 L300,180 L450,50 L600,160 L750,90 L900,180 L1000,110 L1000,300 Z" />
        </svg>
        <svg className={styles.mountainMid} viewBox="0 0 1000 300" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,300 L0,220 L150,180 L350,250 L500,170 L700,240 L850,190 L1000,230 L1000,300 Z" />
        </svg>
      </div>

      <div className={styles.paperFade}></div>

      {/* Flying Lanterns — only at night */}
      {timeOfDay === 'night' && (
        <div className={styles.lanterns}>
          <div className={`${styles.lantern}`} style={{ '--lx': '20%', '--delay': '0s', '--dur': '18s' }}>
            <svg viewBox="0 0 30 45" fill="none">
              <ellipse cx="15" cy="25" rx="11" ry="15" fill="rgba(255,200,80,0.85)" />
              <rect x="13" y="38" width="4" height="5" rx="1" fill="rgba(255,160,40,0.7)" />
              <line x1="15" y1="10" x2="15" y2="2" stroke="rgba(255,180,60,0.5)" strokeWidth="1" />
              <ellipse cx="15" cy="25" rx="11" ry="15" fill="rgba(255,220,120,0.25)" />
            </svg>
            <div className={styles.lanternGlow}></div>
          </div>
          <div className={`${styles.lantern}`} style={{ '--lx': '55%', '--delay': '-6s', '--dur': '22s' }}>
            <svg viewBox="0 0 30 45" fill="none">
              <ellipse cx="15" cy="25" rx="11" ry="15" fill="rgba(255,180,60,0.8)" />
              <rect x="13" y="38" width="4" height="5" rx="1" fill="rgba(255,140,30,0.7)" />
              <line x1="15" y1="10" x2="15" y2="2" stroke="rgba(255,180,60,0.5)" strokeWidth="1" />
              <ellipse cx="15" cy="25" rx="11" ry="15" fill="rgba(255,220,120,0.2)" />
            </svg>
            <div className={styles.lanternGlow}></div>
          </div>
          <div className={`${styles.lantern}`} style={{ '--lx': '78%', '--delay': '-12s', '--dur': '20s' }}>
            <svg viewBox="0 0 30 45" fill="none">
              <ellipse cx="15" cy="25" rx="11" ry="15" fill="rgba(255,210,100,0.9)" />
              <rect x="13" y="38" width="4" height="5" rx="1" fill="rgba(255,160,40,0.7)" />
              <line x1="15" y1="10" x2="15" y2="2" stroke="rgba(255,180,60,0.5)" strokeWidth="1" />
              <ellipse cx="15" cy="25" rx="11" ry="15" fill="rgba(255,240,160,0.2)" />
            </svg>
            <div className={styles.lanternGlow}></div>
          </div>
        </div>
      )}
    </div>
  );
}
