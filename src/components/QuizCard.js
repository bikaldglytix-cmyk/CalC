"use client";
import styles from './QuizCard.module.css';
import { questions } from '../data/questions';

export default function QuizCard({ currentIdx, answers, setAnswer, onNext, onPrev, onSkipChapter, finishQuiz, chapterNum }) {
  const q = questions[currentIdx];
  const selectedId = answers[q.id];
  const selectedOpt = q.options.find(o => o.id === selectedId);
  const hasRequiredInput = selectedOpt?.hasInput;
  const isNextDisabled = !selectedId || (hasRequiredInput && !answers[`${q.id}_value`]);

  return (
    <div className={styles.cardWrapper} key={q.id}>
      <div className={styles.card}>
        <div className={styles.progress}>
          <span className="lang-en">Question {currentIdx + 1} of {questions.length}</span>
          <span className="lang-np">प्रश्न {currentIdx + 1} / {questions.length}</span>
        </div>
        
        <div className={styles.category}>
          <span className="lang-en">Chapter {chapterNum}: {q.category.en}</span>
          <span className="lang-np">अध्याय {chapterNum}: {q.category.np}</span>
        </div>
        
        <h2 className={styles.questionTitle}>
          <span className="lang-en">{q.q.en}</span>
          <span className="lang-np">{q.q.np}</span>
        </h2>

        <div className={styles.optionsList}>
          {q.options.filter(opt => {
            if ((answers.GQ2 === 'urban' || answers.GQ2 === 'semi_urban') && q.id === 'A3' && (opt.id === 'firewood' || opt.id === 'mixed')) return false;
            return true;
          }).map(opt => (
            <div key={opt.id} className={styles.optionContainer}>
              <button 
                className={`${styles.optionBtn} ${selectedId === opt.id ? styles.selected : ''}`}
                onClick={() => {
                  setAnswer(q.id, opt.id, opt.parts, answers[`${q.id}_value`] !== undefined ? answers[`${q.id}_value`] : null);
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
              {opt.hasInput && selectedId === opt.id && (
                <div className={styles.inputWrapper}>
                  <input 
                    type={opt.inputType || 'text'} 
                    className={styles.optionInput} 
                    placeholder={opt.inputPlaceholder || ''}
                    value={answers[`${q.id}_value`] || ''}
                    onChange={(e) => setAnswer(q.id, opt.id, opt.parts, e.target.value)}
                    autoFocus
                  />
                  {opt.id === 'actual' && <div className={styles.inputUnit}>m²</div>}
                  {opt.id === 'custom_rooms' && <div className={styles.inputUnit}><span className="lang-en">rooms</span><span className="lang-np">कोठा</span></div>}
                </div>
              )}
            </div>
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
        
        <button className={styles.btnSkip} onClick={onSkipChapter}>
          <span className="lang-en">Skip Chapter ⏭</span>
          <span className="lang-np">अध्याय छोड्नुहोस् ⏭</span>
        </button>

        {currentIdx < questions.length - 1 ? (
          <button className={styles.btnPri} onClick={onNext} disabled={isNextDisabled}>
            <span className="lang-en">Next</span>
            <span className="lang-np">अगाडि</span>
          </button>
        ) : (
          <button className={styles.btnPri} onClick={finishQuiz} disabled={isNextDisabled}>
            <span className="lang-en">See Results</span>
            <span className="lang-np">परिणाम हेर्नुहोस्</span>
          </button>
        )}
      </div>
    </div>
  );
}
