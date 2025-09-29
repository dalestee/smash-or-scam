import { useState } from 'react';
import Card from './card';
import './App.css';

const cardsData = [
  {
    title: "You've won a free iPhone!",
    description: "Click here to claim your prize.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Gorille_des_plaines_de_l%27ouest_%C3%A0_l%27Espace_Zoologique.jpg/960px-Gorille_des_plaines_de_l%27ouest_%C3%A0_l%27Espace_Zoologique.jpg",
    isScam: true,
  },
  {
    title: "Your Amazon order has shipped",
    description: "Track your package here.",
    imageUrl: "https://www.orangutans-sos.org/content/uploads/2022/09/179A6248-copy-1300x866.jpg",
    isScam: false,
  },
  {
    title: "Urgent: Update your bank details",
    description: "Your account will be suspended.",
    imageUrl: "https://th-thumbnailer.cdn-si-edu.com/-tlKG2GFwRd68ndN1eGfmGZFdiE=/1026x684/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/cf/1c/cf1c3c8a-dc51-409e-a223-5e9e0b32c0cd/42-18537790.jpg",
    isScam: true,
  },
  {
    title: "Bank account locked ",
    description: "Click the link to secure your account.",
    imageUrl: "images/suspicious_bank.png",
    isScam: true,
  },
  {
    title: "Urgent help needed",
    description: "Your 'nephew' abroad asks you for money.",
    imageUrl: "https://th-thumbnailer.cdn-si-edu.com/-tlKG2GFwRd68ndN1eGfmGZFdiE=/1026x684/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/cf/1c/cf1c3c8a-dc51-409e-a223-5e9e0b32c0cd/42-18537790.jpg",
    isScam: true,
  },
  {
    title: "Unpaid fine alert",
    description: "Pay now via the attached link to avoid penalties.",
    imageUrl: "https://th-thumbnailer.cdn-si-edu.com/-tlKG2GFwRd68ndN1eGfmGZFdiE=/1026x684/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/cf/1c/cf1c3c8a-dc51-409e-a223-5e9e0b32c0cd/42-18537790.jpg",
    isScam: true,
  },
  {
    title: "Dream apartment deal",
    description: "Pay a deposit before visiting the place.",
    imageUrl: "https://th-thumbnailer.cdn-si-edu.com/-tlKG2GFwRd68ndN1eGfmGZFdiE=/1026x684/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/cf/1c/cf1c3c8a-dc51-409e-a223-5e9e0b32c0cd/42-18537790.jpg",
    isScam: true,
  },
  {
    title: "Instagram partnership offer",
    description: "Share your bank details to earn quick cash.",
    imageUrl: "https://th-thumbnailer.cdn-si-edu.com/-tlKG2GFwRd68ndN1eGfmGZFdiE=/1026x684/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/cf/1c/cf1c3c8a-dc51-409e-a223-5e9e0b32c0cd/42-18537790.jpg",
    isScam: true,
  },
  {
    title: "Invest now, get rich fast",
    description: "This new app promises to double your money.",
    imageUrl: "https://th-thumbnailer.cdn-si-edu.com/-tlKG2GFwRd68ndN1eGfmGZFdiE=/1026x684/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/cf/1c/cf1c3c8a-dc51-409e-a223-5e9e0b32c0cd/42-18537790.jpg",
    isScam: true,
  },
  {
    title: "Delivery problem",
    description: "Your parcel is blocked—pay to release it.",
    imageUrl: "https://th-thumbnailer.cdn-si-edu.com/-tlKG2GFwRd68ndN1eGfmGZFdiE=/1026x684/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/cf/1c/cf1c3c8a-dc51-409e-a223-5e9e0b32c0cd/42-18537790.jpg",
    isScam: true,
  },
  {
    title: "Congratulations, you’ve won",
    description: "Pay a fee to receive your lottery prize.",
    imageUrl: "https://th-thumbnailer.cdn-si-edu.com/-tlKG2GFwRd68ndN1eGfmGZFdiE=/1026x684/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/cf/1c/cf1c3c8a-dc51-409e-a223-5e9e0b32c0cd/42-18537790.jpg",
    isScam: true,
  },
  {
    title: "Romantic request for money",
    description: "An online date asks for cash to travel to you.",
    imageUrl: "https://th-thumbnailer.cdn-si-edu.com/-tlKG2GFwRd68ndN1eGfmGZFdiE=/1026x684/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/cf/1c/cf1c3c8a-dc51-409e-a223-5e9e0b32c0cd/42-18537790.jpg",
    isScam: true,
  },
  {
    title: "Tech support",
    description: "Microsoft caller asks remote access to fix a virus.",
    imageUrl: "https://th-thumbnailer.cdn-si-edu.com/-tlKG2GFwRd68ndN1eGfmGZFdiE=/1026x684/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/cf/1c/cf1c3c8a-dc51-409e-a223-5e9e0b32c0cd/42-18537790.jpg",
    isScam: true,
  },
  {
    title: "Instant loan available",
    description: "No checks, just share your bank info now.",
    imageUrl: "https://th-thumbnailer.cdn-si-edu.com/-tlKG2GFwRd68ndN1eGfmGZFdiE=/1026x684/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/cf/1c/cf1c3c8a-dc51-409e-a223-5e9e0b32c0cd/42-18537790.jpg",
    isScam: true,
  },
  {
    title: "Bank verification call",
    description: "Your bank confirms a suspicious transaction via their official number.",
    imageUrl: "https://th-thumbnailer.cdn-si-edu.com/-tlKG2GFwRd68ndN1eGfmGZFdiE=/1026x684/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/cf/1c/cf1c3c8a-dc51-409e-a223-5e9e0b32c0cd/42-18537790.jpg",
    isScam: false,
  },
  {
    title: "Newsletter discount",
    description: "A promo code from a mailing list you subscribed to.",
    imageUrl: "https://th-thumbnailer.cdn-si-edu.com/-tlKG2GFwRd68ndN1eGfmGZFdiE=/1026x684/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/cf/1c/cf1c3c8a-dc51-409e-a223-5e9e0b32c0cd/42-18537790.jpg",
    isScam: false,
  },
  {
    title: "Coffee break request",
    description: "A colleague asks you for €5 to grab a coffee.",
    imageUrl: "https://th-thumbnailer.cdn-si-edu.com/-tlKG2GFwRd68ndN1eGfmGZFdiE=/1026x684/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/cf/1c/cf1c3c8a-dc51-409e-a223-5e9e0b32c0cd/42-18537790.jpg",
    isScam: false,
  },
];

function App() {
  const [current, setCurrent] = useState(0);
  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [swipe, setSwipe] = useState(null);

  const handleGuess = (guessIsScam) => {
    const correct = cardsData[current].isScam === guessIsScam;
    setSwipe(guessIsScam ? 'left' : 'right');
    if (correct) {
      setRight(r => r + 1);
      setFeedback('ok');
    } else {
      setWrong(w => w + 1);
      setFeedback('cross');
    }
    setTimeout(() => {
      setFeedback(null);
      setSwipe(null);
      setCurrent(c => c + 1);
    }, 700);
  };

  if (current >= cardsData.length) {
    return (
      <div className="results">
        <h2>Game Over!</h2>
        <p>Right: {right}</p>
        <p>Wrong: {wrong}</p>
      </div>
    );
  }

  return (
    <div className="swipe-app">
      <div className={`card-container ${swipe ? `swipe-${swipe}` : ''}`}>
        <Card {...cardsData[current]} />
      </div>
      <div className="swipe-buttons">
        <button onClick={() => handleGuess(true)}>Scam</button>
        <button onClick={() => handleGuess(false)}>Not Scam</button>
      </div>
      <div className="counters">
        <span>✅ Right: {right}</span>
        <span>❌ Wrong: {wrong}</span>
      </div>
      {feedback === 'ok' && <div className="feedback ok">✅ Correct!</div>}
      {feedback === 'cross' && <div className="feedback cross">❌ Wrong!</div>}
    </div>
  );
}

export default App;