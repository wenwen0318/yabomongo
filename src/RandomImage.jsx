import { useState, useEffect, useRef } from 'react';
import imageList from './data'; // <-- 資料格式：{ src, name, description }
import './App.css';

export default function RandomImageSlot() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const intervalRef = useRef(null);

  const startSpinning = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    const audio = new Audio('sounds/電子ルーレット回転中.mp3');
    audio.play();

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, 50);

    setTimeout(() => {
      clearInterval(intervalRef.current);
      const finalIndex = Math.floor(Math.random() * imageList.length);
      setCurrentIndex(finalIndex);
      setIsSpinning(false);

      const audio = new Audio('sounds/ニュッ2.mp3');
      audio.play();
    }, 2700);
  };

  useEffect(() => {
    imageList.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
    });

    return () => clearInterval(intervalRef.current);
  }, []);

  const currentImage = imageList[currentIndex];

  return (
    <div className="container">
      {/* 左側：圖片說明 */}
      <div className="left" >
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#000000' }}>
          {currentImage.name}
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#000000'}}>
          {currentImage.description}
        </p>
      </div>

      {/* 右側：圖片與抽選 */}
      <div className="right">
        <img
          src={currentImage.src}
          alt={currentImage.name}
          style={{
            width: '300px',
            maxHeight: '400px',
            objectFit: 'contain',
            marginBottom: '40px',
            boxShadow: '0 0 10px rgba(0,0,0,0.2)',
          }}
        />
        <img
          src="images/button.png"
          alt="抽選按鈕"
          onClick={startSpinning}
          style={{
            width: '160px',
            height: 'auto',
            cursor: isSpinning ? 'not-allowed' : 'pointer',
            opacity: isSpinning ? 0.5 : 1,
            pointerEvents: isSpinning ? 'none' : 'auto',
            transition: 'opacity 0.3s',
          }}
        />
      </div>
    </div>
  );
}
