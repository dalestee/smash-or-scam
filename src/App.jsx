import { useState } from 'react';
import Card from './card';
import './App.css';

const cardsData = [
  {
    title: "You've won a free iPhone!",
    description: "Click here to claim your prize.",
    imageUrl: "images/scam13.png",
    isScam: true,
  },
  {
    title: "Your Amazon order has shipped",
    description: "Track your package here.",
    imageUrl: "images/scam12.png",
    isScam: false,
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
    imageUrl: "images/scam2.png",
    isScam: true,
  },
  {
    title: "Unpaid fine alert",
    description: "Pay now via the attached link to avoid penalties.",
    imageUrl: "images/scam3.png",
    isScam: true,
  },
  {
    title: "Dream apartment deal",
    description: "Pay a deposit before visiting the place.",
    imageUrl: "images/scam4.png",
    isScam: true,
  },
  {
    title: "Instagram partnership offer",
    description: "Share your bank details to earn quick cash.",
    imageUrl: "images/scam5.png",
    isScam: true,
  },
  {
    title: "Invest now, get rich fast",
    description: "This new app promises to double your money.",
    imageUrl: "images/scam6.png",
    isScam: true,
  },
  {
    title: "Delivery problem",
    description: "Your parcel is blocked—pay to release it.",
    imageUrl: "images/scam7.png",
    isScam: true,
  },
  {
    title: "Congratulations, you’ve won",
    description: "Pay a fee to receive your lottery prize.",
    imageUrl: "images/scam8.png",
    isScam: true,
  },
  {
    title: "Romantic request for money",
    description: "An online date asks for cash to travel to you.",
    imageUrl: "images/scam9.png",
    isScam: true,
  },
  {
    title: "Tech support",
    description: "Microsoft caller asks remote access to fix a virus.",
    imageUrl: "images/scam10.png",
    isScam: true,
  },
  {
    title: "Instant loan available",
    description: "No checks, just share your bank info now.",
    imageUrl: "images/scam11.png",
    isScam: true,
  },
  {
    title: "Bank verification call",
    description: "Your bank confirms a suspicious transaction via their official number.",
    imageUrl: "images/noScam1.png",
    isScam: false,
  },
  {
    title: "Newsletter discount",
    description: "A promo code from a mailing list you subscribed to.",
    imageUrl: "images/noScam2.png",
    isScam: false,
  },
  {
    title: "Coffee break request",
    description: "A colleague asks you for €5 to grab a coffee.",
    imageUrl: "images/noScam3.png",
    isScam: false,
  },
];

// Fisher-Yates shuffle
function shuffle(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function App() {
  // shuffle once at initialization
  const [deck, setDeck] = useState(() => shuffle(cardsData));
  const current = deck[0] || null;

  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [swipe, setSwipe] = useState(null);

  const handleGuess = (guessIsScam) => {
    if (!current) return;
    const correct = current.isScam === guessIsScam;
    setSwipe(guessIsScam ? 'left' : 'right');

    if (correct) setRight(r => r + 1);
    else setWrong(w => w + 1);

    setFeedback(correct ? 'ok' : 'cross');

    setTimeout(() => {
      setFeedback(null);
      setSwipe(null);
      // remove the first card from the deck (immutable)
      setDeck(prev => prev.slice(1));
    }, 700);
  };

  const restart = () => {
    setDeck(shuffle(cardsData));
    setRight(0);
    setWrong(0);
    setFeedback(null);
    setSwipe(null);
  };

  if (!current) {
    return (
      <div className="results">
        <h2>Game Over!</h2>
        <p>Right: {right}</p>
        <p>Wrong: {wrong}</p>
        <button onClick={restart}>Play again</button>
      </div>
    );
  }

  return (
    <div className="swipe-app">
      <div className={`card-container ${swipe ? `swipe-${swipe}` : ''}`}>
        <Card {...current} />
      </div>
      <div className="swipe-buttons">
        <button onClick={() => handleGuess(true)}>Scam</button>
        <button onClick={() => handleGuess(false)}>Not Scam</button>
      </div>
      <div className="counters">
        <span>✅ Right: {right}</span>
        <span>❌ Wrong: {wrong}</span>
        <span>🃏 Remaining: {deck.length}</span>
      </div>
      {feedback === 'ok' && <div className="feedback ok">✅ Correct!</div>}
      {feedback === 'cross' && <div className="feedback cross">❌ Wrong!</div>}
    </div>
  );
}

export default App;