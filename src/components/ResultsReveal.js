"use client";
import { useState } from 'react';
import styles from './ResultsReveal.module.css';

export default function ResultsReveal({ open, close, total, parts, userName, userLoc }) {
  const [showPledge, setShowPledge] = useState(false);

  if (!open) return null;

  const fallbackName = userName || "Traveler";
  const fallbackLoc = userLoc || "Earth";
  
  // Math for trees: total is in tonnes. 1 tonne = 1000 kg. 25kg per tree.
  const treesToPlant = Math.ceil((total || 0) * 1000 / 25);
  
  const isLow = total <= 0.6; // Nepal average threshold

  const handleShare = async () => {
    const text = `I pledged to plant ${treesToPlant} trees to offset my ${total.toFixed(2)} tonnes of CO2e/yr impact! Join me in protecting our shared home.`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Climate Pledge',
          text: text,
        });
      } catch (err) {
        console.log('Error sharing', err);
      }
    } else {
      navigator.clipboard.writeText(text);
      alert('Pledge text copied to clipboard!');
    }
  };

  const handleClose = () => {
    setShowPledge(false);
    close();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.backdrop} onClick={handleClose}></div>
      <div className={styles.content}>
        <button className={styles.closeBtn} onClick={handleClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        
        <div className={styles.postcard}>
          {!showPledge ? (
             <div className={styles.summaryView}>
                <div className={styles.pcHeader}>
                  <span className="lang-en">Your Footprint Summary</span>
                  <span className="lang-np">तपाईंको प्रभाव सारांश</span>
                </div>
                
                <div className={styles.bigTotal}>
                  {total.toFixed(2)} <span>tonnes CO₂e / yr</span>
                </div>

                {isLow ? (
                  <div className={styles.feedbackLow}>
                    <div className={styles.balloons}>🎈🎉🎈</div>
                    <div className={styles.graffiti}>
                       <span className="lang-en">Great Job!</span>
                       <span className="lang-np">धेरै राम्रो!</span>
                    </div>
                    <p className="lang-en">Your footprint is wonderfully low. Keep up the good work!</p>
                    <p className="lang-np">तपाईंको कार्बन छाप धेरै कम छ। यसलाई निरन्तरता दिनुहोस्!</p>
                  </div>
                ) : (
                  <div className={styles.feedbackHigh}>
                    <div className={styles.warningIcon}>⚠️</div>
                    <div className={styles.highText}>
                       <span className="lang-en">Room to Improve!</span>
                       <span className="lang-np">सुधारको सम्भावना!</span>
                    </div>
                    <p className="lang-en">Your footprint is higher than the Nepal average (0.6 t). You can improve by reducing meat consumption, opting for public transit, or managing waste better.</p>
                    <p className="lang-np">तपाईंको कार्बन छाप नेपालको औसत (०.६ टन) भन्दा बढी छ। मासु कम खाएर वा सार्वजनिक यातायात प्रयोग गरेर सुधार गर्न सक्नुहुन्छ।</p>
                  </div>
                )}

                <div className={styles.treeSection}>
                  <div className={styles.treeIcon}>🌳</div>
                  <p className="lang-en">To offset your current annual emissions, you would need to plant <strong>{treesToPlant}</strong> trees this year.</p>
                  <p className="lang-np">तपाईंको वार्षिक उत्सर्जनलाई सन्तुलनमा ल्याउन तपाईंले यस वर्ष <strong>{treesToPlant}</strong> रुख रोप्नुपर्नेछ।</p>
                </div>

                <button className={styles.pledgeBtn} onClick={() => setShowPledge(true)}>
                  <span className="lang-en">Take the Pledge</span>
                  <span className="lang-np">प्रतिज्ञा गर्नुहोस्</span>
                </button>
             </div>
          ) : (
             <div className={styles.pledgeView}>
                <div className={styles.pcHeader}>
                  <span className="lang-en">A Pledge for the Earth</span>
                  <span className="lang-np">पृथ्वीको लागि प्रतिज्ञा</span>
                </div>
                
                <div className={styles.pledgeText}>
                  <p className="lang-en">
                    "I, <strong>{fallbackName}</strong> from <strong>{fallbackLoc}</strong>, have walked this path and seen the footprint I leave behind. My current impact is <strong>{total.toFixed(2)} tonnes CO₂e / yr</strong>. I pledge to plant <strong>{treesToPlant} trees</strong>, to tread lighter, to respect the mountains, and to protect our shared home."
                  </p>
                  <p className="lang-np">
                    "म, <strong>{fallbackLoc}</strong> को <strong>{fallbackName}</strong>, यो बाटो हिँडेको छु र मेरो छाप देखेको छु। मेरो हालको प्रभाव <strong>{total.toFixed(2)} टन CO₂e / वर्ष</strong> छ। म <strong>{treesToPlant} रुख</strong> रोप्न, कम छाप छोड्न, हिमालको सम्मान गर्न र हाम्रो साझा घरको रक्षा गर्न प्रतिज्ञा गर्दछु।"
                  </p>
                </div>
                
                <div className={styles.breakdown}>
                  <div className={styles.part}>
                    <span className={styles.pLabel}><span className="lang-en">Home</span><span className="lang-np">घर</span></span>
                    <div className={styles.pBar}><div style={{width: `${Math.min(100, (parts.home/total)*100)}%`, background: 'var(--coral)'}}></div></div>
                  </div>
                  <div className={styles.part}>
                    <span className={styles.pLabel}><span className="lang-en">Transport</span><span className="lang-np">यातायात</span></span>
                    <div className={styles.pBar}><div style={{width: `${Math.min(100, (parts.transport/total)*100)}%`, background: 'var(--sky)'}}></div></div>
                  </div>
                  <div className={styles.part}>
                    <span className={styles.pLabel}><span className="lang-en">Food</span><span className="lang-np">खाना</span></span>
                    <div className={styles.pBar}><div style={{width: `${Math.min(100, (parts.food/total)*100)}%`, background: 'var(--saffron)'}}></div></div>
                  </div>
                  <div className={styles.part}>
                    <span className={styles.pLabel}><span className="lang-en">Goods</span><span className="lang-np">सामान</span></span>
                    <div className={styles.pBar}><div style={{width: `${Math.min(100, (parts.goods/total)*100)}%`, background: 'var(--teal)'}}></div></div>
                  </div>
                </div>
                
                <div className={styles.signatureArea}>
                  <div className={styles.signatureLine}>
                    <span className={styles.stamp}>SIGNED</span>
                    <span className={styles.signName}>{fallbackName}</span>
                  </div>
                  <div className={styles.signDate}>{new Date().toLocaleDateString()}</div>
                </div>

                <div className={styles.shareRow}>
                  <button className={styles.shareBtn} onClick={handleShare}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                    <span className="lang-en">Share Pledge</span>
                    <span className="lang-np">सेयर गर्नुहोस्</span>
                  </button>
                </div>
             </div>
          )}
        </div>

        <div className={styles.prayerFlags}>
          <div className={styles.flag} style={{background: '#0F6E56'}}><span className="lang-en">Earth</span><span className="lang-np">पृथ्वी</span></div>
          <div className={styles.flag} style={{background: '#BA7517'}}><span className="lang-en">Water</span><span className="lang-np">जल</span></div>
          <div className={styles.flag} style={{background: '#D85A30'}}><span className="lang-en">Fire</span><span className="lang-np">अग्नि</span></div>
          <div className={styles.flag} style={{background: '#FAF7F0', color: '#2C2C2A'}}><span className="lang-en">Air</span><span className="lang-np">वायु</span></div>
          <div className={styles.flag} style={{background: '#185FA5'}}><span className="lang-en">Space</span><span className="lang-np">आकाश</span></div>
        </div>
      </div>
    </div>
  );
}
