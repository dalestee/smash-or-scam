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