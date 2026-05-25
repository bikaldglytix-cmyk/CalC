"use client";
import styles from './QuizCard.module.css';
import { questions } from '../data/questions';

export default function QuizCard({ currentIdx, answers, setAnswer, onNext, onPrev, finishQuiz }) {
  const q = questions[currentIdx];
  const selectedId = answers[q.id];

  return (
    <div className={styles.cardWrapper} key={q.id}>
      <div className={styles.card}>
        <div className={styles.progress}>
          <span className="lang-en">Question {currentIdx + 1} of {questions.length}</span>
          <span className="lang-np">प्रश्न {currentIdx + 1} / {questions.length}</span>
        </div>
        
        <div className={styles.category}>
          <span className="lang-en">{q.category.en}</span>
          <span className="lang-np">{q.category.np}</span>
        </div>
        
        <h2 className={styles.questionTitle}>
          <span className="lang-en">{q.q.en}</span>
          <span className="lang-np">{q.q.np}</span>
        </h2>

        <div className={styles.optionsList}>
          {q.options.map(opt => (
            <button 
              key={opt.id} 
              className={`${styles.optionBtn} ${selectedId === opt.id ? styles.selected : ''}`}
              onClick={() => {
                setAnswer(q.id, opt.id, opt.parts);
              }}
            >
              <div className={styles.radioBox}>
                {selectedId === opt.id && <div className={styles.radioDot}></div>}
              </div>
              <span className={styles.optLabel}>
                <span className="lang-en">{opt.label.en}</span>
                <span className="lang-np">{opt.label.np}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        {currentIdx > 0 ? (
          <button className={styles.btnSec} onClick={onPrev}>
            <span className="lang-en">Back</span>
            <span className="lang-np">पछाडि</span>
          </button>
        ) : <div></div>}
        
        {currentIdx < questions.length - 1 ? (
          <button className={styles.btnPri} onClick={onNext} disabled={!selectedId}>
            <span className="lang-en">Next</span>
            <span className="lang-np">अगाडि</span>
          </button>
        ) : (
          <button className={styles.btnPri} onClick={finishQuiz} disabled={!selectedId}>
            <span className="lang-en">See Results</span>
            <span className="lang-np">परिणाम हेर्नुहोस्</span>
          </button>
        )}
      </div>
    </div>
  );
}
