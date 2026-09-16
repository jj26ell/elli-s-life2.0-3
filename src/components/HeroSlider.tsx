"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop", // 산 (Mountain)
    text: "습관이 내일의 운명이 된다면, 나는 매일 새롭게 운명을 시작할 것이다"
  },
  {
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2000&auto=format&fit=crop", // 바다 (Sea)
    text: "어제보다 더 나은 오늘을 만들어가기 위해 애쓴다. 그것이 스스로에 대한 존중이다."
  },
  {
    image: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=2000&auto=format&fit=crop", // 하늘 (Sky)
    text: "배움은 일상을 지켜나가는 것으로 완성된다."
  },
  {
    image: "https://images.unsplash.com/photo-1558236528-912a2bf8fb5e?q=80&w=2000&auto=format&fit=crop", // 정원 (Garden)
    text: "마음을 지켜낸다는 것은 먼저 마음을 열고, 대화하고, 아는 것이 선행되야 한다."
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5초마다 변경
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: 'relative', height: '60vh', width: '100%', overflow: 'hidden' }}>
      {slides.map((slide, index) => (
        <div 
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === currentSlide ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
            zIndex: index === currentSlide ? 1 : 0
          }}
        >
          <img 
            src={slide.image} 
            alt={`Slide ${index + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            background: 'rgba(0,0,0,0.4)', display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center', color: 'white',
            textAlign: 'center', padding: '20px'
          }}>
            <h1 style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: '2.5rem', 
              marginBottom: '20px', 
              maxWidth: '800px', 
              lineHeight: '1.5',
              wordBreak: 'keep-all'
            }}>
              {slide.text}
            </h1>
            
            {/* 기본 설명 및 버튼은 항상 고정되도록 유지 */}
            <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '30px', lineHeight: '1.8', opacity: 0.9 }}>
              그 삶을 이웃과 나누고 또 그들의 삶을 통해 배우고 성장하며 아름다운 삶을 살고자 합니다.
            </p>
            <Link href="/about" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '12px 30px' }}>
              엘리's life2.0 소개
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
