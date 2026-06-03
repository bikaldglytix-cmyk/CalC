"use client";
import { useState, useEffect } from 'react';
import styles from './BeaverPopup.module.css';
import { questions } from '../data/questions';

export default function BeaverPopup({ currentIdx }) {
  const [visible, setVisible] = useState(false);
  const [showPlacard, setShowPlacard] = useState(false);
  const [hasFact, setHasFact] = useState(false);

  const q = questions[currentIdx];

  // Reset state on new question
  useEffect(() => {
    setVisible(false);
    setShowPlacard(false);
    
    if (q && q.fact && (q.fact.en || q.fact.np)) {
      setHasFact(true);
      // Wait 3 seconds before the beaver sneaks in
      const timer = setTimeout(() => {
        setVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setHasFact(false);
    }
  }, [currentIdx, q]);

  if (!hasFact) return null;

  return (
    <div className={`${styles.beaverContainer} ${visible ? styles.sneakedIn : ''} ${showPlacard ? styles.slightlyUp : ''}`}>
      {/* The Placard */}
      {showPlacard && (
        <div className={styles.placardContainer}>
          <div className={styles.placard}>
            <div className={styles.placardWood}>
              <button className={styles.closeBtn} onClick={() => setShowPlacard(false)}>✕</button>
              <h4 className={styles.placardTitle}>
                <span className="lang-en">Fun Fact!</span>
                <span className="lang-np">रोचक तथ्य!</span>
              </h4>
              <p className="lang-en">{q.fact.en}</p>
              <p className="lang-np">{q.fact.np}</p>
            </div>
            <div className={styles.placardStick}></div>
          </div>
        </div>
      )}

      {/* The Beaver Image */}
      <button 
        className={styles.beaverButton} 
        onClick={() => setShowPlacard(!showPlacard)}
        aria-label="Fun Fact Beaver"
      >
        <img 
          src="/beaver.png" 
          alt="Beaver with a fun fact" 
          className={styles.beaverImg} 
        />
      </button>
    </div>
  );
}
