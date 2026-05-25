"use client";
import { useState, useEffect } from 'react';
import StoryBackground from '../components/StoryBackground';
import IntroSequence from '../components/IntroSequence';
import ProfileSetup from '../components/ProfileSetup';
import QuizCard from '../components/QuizCard';
import ResultsReveal from '../components/ResultsReveal';
import FactCards from '../components/FactCards';
import { questions } from '../data/questions';
import styles from './page.module.css';

export default function Home() {
  const [lang, setLang] = useState('en');
  
  // Steps: 'intro' -> 'profile' -> 'quiz'
  const [appStep, setAppStep] = useState('intro');
  const [userName, setUserName] = useState('');
  const [userLoc, setUserLoc] = useState('');
  
  const [currentIdx, setCurrentIdx] = useState(0);
  
  const [answers, setAnswers] = useState({});
  const [partImpacts, setPartImpacts] = useState({});
  
  const [resultsOpen, setResultsOpen] = useState(false);
  const [apiResult, setApiResult] = useState(null);

  // Time & Loading state
  const [timeLoaded, setTimeLoaded] = useState(false);
  const [timeOfDay, setTimeOfDay] = useState('afternoon');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 9) setTimeOfDay('morning');
    else if (hour >= 9 && hour < 17) setTimeOfDay('afternoon');
    else if (hour >= 17 && hour < 20) setTimeOfDay('evening');
    else setTimeOfDay('night');
    setTimeLoaded(true);
  }, []);

  const handleSetAnswer = (qId, optionId, partsObj) => {
    setAnswers(prev => ({ ...prev, [qId]: optionId }));
    setPartImpacts(prev => ({ ...prev, [qId]: partsObj }));
  };

  const computeTotal = () => {
    let home = 0;
    let transport = 0;
    let food = 0;
    let goods = 0;

    Object.values(partImpacts).forEach(impact => {
      if (impact.home) home += impact.home;
      if (impact.transport) transport += impact.transport;
      if (impact.food) food += impact.food;
      if (impact.goods) goods += impact.goods;
    });

    const total = Math.max(0.05, home + transport + food + goods);
    return { total, parts: { home, transport, food, goods } };
  };

  const { total, parts } = computeTotal();

  const handleFinishQuiz = async () => {
    try {
      const res = await fetch('/api/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers })
      });
      const data = await res.json();
      if (data && data.total !== undefined) {
        setApiResult(data);
      }
    } catch(err) {
      console.error(err);
    }
    setResultsOpen(true);
  };
  
  let displayTotal = total;
  let displayParts = parts;

  if (apiResult && apiResult.total > 0) {
    displayTotal = apiResult.total / 1000;
    displayParts = {
      home: (apiResult.byDomain.A + apiResult.byDomain.E) / 1000,
      transport: apiResult.byDomain.B / 1000,
      food: apiResult.byDomain.C / 1000,
      goods: (apiResult.byDomain.D + apiResult.byDomain.F) / 1000
    };
  }
  
  // Score is now a silent state that drives the background
  const raw = Math.max(0, Math.min(1, total / 6));
  const hiddenScore = (appStep !== 'intro' && appStep !== 'profile') ? raw * raw * (3 - 2 * raw) : 0;
  
  // Progress is 0 during intro/profile, then scales 0 to 1 during quiz
  const bgProgress = (appStep !== 'intro' && appStep !== 'profile') ? currentIdx / Math.max(1, questions.length - 1) : 0;

  useEffect(() => {
    document.documentElement.setAttribute('data-lang', lang);
  }, [lang]);

  if (!timeLoaded) {
    return <div style={{ minHeight: '100vh', background: '#faf7f0' }} />;
  }

  return (
    <div className={styles.appWrapper}>
      <StoryBackground score={hiddenScore} progress={bgProgress} timeOfDay={timeOfDay} />
      
      <div className={styles.app}>
        {/* DEBUG PANEL */}
        <div className={styles.debugPanel}>
           <div className={styles.debugTitle}>Debug Time</div>
           <div className={styles.debugBtns}>
             <button onClick={() => setTimeOfDay('morning')}>Mor</button>
             <button onClick={() => setTimeOfDay('afternoon')}>Aft</button>
             <button onClick={() => setTimeOfDay('evening')}>Eve</button>
             <button onClick={() => setTimeOfDay('night')}>Nig</button>
           </div>
        </div>

        <header className={styles.chrome}>
          <div className={styles.chromeInner}>
            <div className={styles.langToggle}>
              <button className={lang === 'en' ? styles.active : ''} onClick={() => setLang('en')}>EN</button>
              <button className={lang === 'np' ? styles.active : ''} onClick={() => setLang('np')} style={{letterSpacing: 0}}>ने</button>
            </div>
          </div>
        </header>

        <div className={styles.quizContainer} style={{ marginTop: '20px' }}>
          {appStep === 'intro' && (
            <IntroSequence onComplete={() => setAppStep('profile')} />
          )}
          {appStep === 'profile' && (
            <ProfileSetup onComplete={(n, l) => {
              setUserName(n);
              setUserLoc(l);
              setAppStep('quiz');
            }} />
          )}
          {appStep === 'quiz' && (
            <QuizCard 
              currentIdx={currentIdx} 
              answers={answers} 
              setAnswer={handleSetAnswer} 
              onNext={() => setCurrentIdx(prev => prev + 1)}
              onPrev={() => setCurrentIdx(prev => prev - 1)}
              finishQuiz={handleFinishQuiz}
            />
          )}
        </div>
      </div>

      {appStep === 'quiz' && <FactCards currentIdx={currentIdx} />}
      <ResultsReveal open={resultsOpen} close={() => setResultsOpen(false)} total={displayTotal} parts={displayParts} userName={userName} userLoc={userLoc} />
    </div>
  );
}
