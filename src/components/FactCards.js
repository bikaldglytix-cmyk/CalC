"use client";
import { useState, useEffect } from 'react';
import styles from './FactCards.module.css';
import { questions } from '../data/questions';

export default function FactCards({ currentIdx }) {
  const [expanded, setExpanded] = useState(false);
  
  // Collapse when moving to a new question
  useEffect(() => {
    setExpanded(false);
  }, [currentIdx]);

  const q = questions[currentIdx];
  if (!q) return null;

  return (
    <div className={`${styles.insightContainer} ${expanded ? styles.expanded : ''}`}>
      {!expanded ? (
        <button className={styles.insightToggle} onClick={() => setExpanded(true)}>
          <span className={styles.icon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          </span>
          <span className="lang-en">Why ask this?</span>
          <span className="lang-np">किन सोधिएको?</span>
        </button>
      ) : (
        <div className={styles.insightCard}>
          <div className={styles.cardHeader}>
            <div className={styles.titleArea}>
              <span className={styles.icon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              </span>
              <span className="lang-en">Why are we asking this?</span>
              <span className="lang-np">यो किन सोधिएको हो?</span>
            </div>
            <button className={styles.closeBtn} onClick={() => setExpanded(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>
          
          <div className={styles.cardBody}>
            {q.why && (
              <div className={styles.section}>
                <p className="lang-en">{q.why.en}</p>
                <p className="lang-np">{q.why.np}</p>
              </div>
            )}
            
            {q.relatedTo && q.relatedText && (
              <div className={styles.sectionRelated}>
                <span className={styles.linkIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                </span>
                <div>
                  <p className="lang-en">{q.relatedText.en.replace(/\s*\([A-Z0-9]+\)/g, '')}</p>
                  <p className="lang-np">{q.relatedText.np.replace(/\s*\([A-Z0-9]+\)/g, '')}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
