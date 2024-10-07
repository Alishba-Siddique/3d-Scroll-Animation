'use client';
import React, { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

export default function Home() {
  const colors = ['#809BA5', '#829078', '#b47273', '#6B7E72'];
  const [colorIndex, setColorIndex] = useState(0);

  const changeColor = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    
  };
  return (
    <>
      <Hero colorIndex={colorIndex} changeColor={changeColor} />
      <Navbar colorIndex={colorIndex} />
    </>
  );
}
