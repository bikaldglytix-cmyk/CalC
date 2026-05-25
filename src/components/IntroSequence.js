"use client";
import { useState } from 'react';
import styles from './IntroSequence.module.css';

const introData = [
  {
    en: "The world is heavy. The average global citizen emits about 4.7 tonnes of CO₂ every year.",
    np: "संसार भारी छ। औसत विश्वव्यापी नागरिकले हरेक वर्ष करिब ४.७ टन कार्बन उत्सर्जन गर्छ।"
  },
  {
    en: "But here in the Himalayas, we tread lightly. The average Nepali footprint is just 0.5 tonnes.",
    np: "तर यहाँ हिमालयमा, हाम्रो पाइला हलुका छ। एक औसत नेपालीको कार्बन छाप मात्र ०.५ टन छ।"
  },
  {
    en: "However, climate change impacts us the most. How does your daily life compare? Let's find out.",
    np: "यद्यपि, जलवायु परिवर्तनले हामीलाई सबैभन्दा बढी असर गर्छ। तपाईंको दैनिकी कस्तो छ? आउनुहोस् पत्ता लगाऔं।"
  }
];

export default function IntroSequence({ onComplete }) {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < introData.length - 1) {
      setStep(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className={styles.introWrapper}>
      <div className={styles.card} key={step}>
        <div className={styles.dots}>
          {introData.map((_, i) => (
            <div key={i} className={`${styles.dot} ${i === step ? styles.active : ''}`}></div>
          ))}
        </div>
        
        <h2 className={styles.text}>
          <span className="lang-en">{introData[step].en}</span>
          <span className="lang-np">{introData[step].np}</span>
        </h2>

        <div className={styles.controls}>
          <button className={styles.btnPri} onClick={handleNext}>
            {step < introData.length - 1 ? (
              <>
                <span className="lang-en">Next</span>
                <span className="lang-np">अगाडि</span>
              </>
            ) : (
              <>
                <span className="lang-en">Start Journey</span>
                <span className="lang-np">यात्रा सुरु गर्नुहोस्</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
