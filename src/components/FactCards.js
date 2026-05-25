"use client";
import styles from './FactCards.module.css';
import { questions } from '../data/questions';

export default function FactCards({ currentIdx }) {
  const fact = questions[currentIdx]?.fact;

  if (!fact) return null;

  return (
    <div className={styles.factFloat}>
      <div className={styles.factInner} key={currentIdx}>
        <div className={styles.ico}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        </div>
        <p>
          <span className="lang-en">{fact.en}</span>
          <span className="lang-np">{fact.np}</span>
        </p>
      </div>
    </div>
  );
}
