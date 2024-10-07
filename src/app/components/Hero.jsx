// import React from 'react';
// import localFont from 'next/font/local';

// const freudianOne = localFont({
//   src: '../fonts/FreudianOne.ttf',
//   variable: '--font-freudian-one',
//   weight: '100 900',
// });

// export default function Hero() {
//   return (
//     <div
//       className={`flex flex-col items-center justify-center h-screen `}
//       style={{
//         backgroundImage: "url('/images/hero-bg.svg')", // Corrected usage
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       <h1 className="text-8xl font-bold text-offWhite text-center">
//         Savor the Smoothness: Coconut-Infused Cigarette Filters!
//       </h1>
//       <p className="text-lg text-offWhite">
//         An open source tool to filter web content
//       </p>
//       <button>
//         <a
//           href="/filters"
//           className="bg-offWhite text-black font-bold py-2 px-4 rounded-full "
//         >
//           Get Started
//         </a>
//       </button>
//     </div>
//   );
// }

'use client';
import React, { useState } from 'react';
import { PiCigaretteThin } from 'react-icons/pi';

// Array of colors to cycle through
export default function Hero({ colorIndex, changeColor }) {
  const colorsBtn = ['#FF834F', '#F9AF42', '#7ECF86', '#d397b1'];
  const colors = ['#809BA5', '#829078', '#b47273', '#6B7E72'];

  const [isSpinning, setIsSpinning] = useState(false);

  const handleIconClick = () => {
    setIsSpinning(true);
    changeColor();

    // Remove spinning animation after a short delay
    setTimeout(() => {
      setIsSpinning(false);
    }, 1000); // 1 second duration of spin
  };

  return (
    <div className={`flex flex-col items-center justify-center h-screen`}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      >
        {/* Inline SVG with dynamic fill */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="roughpaper">
              <feTurbulence
                type="fractalNoise"
                baseFrequency=".9"
                numOctaves="1"
                result="noise"
              />
              <feDiffuseLighting
                lighting-color={colors[colorIndex]}
                diffuseConstant="1"
                surfaceScale=".2"
                result="diffLight"
              >
                <feDistantLight azimuth="100" elevation="55" />
              </feDiffuseLighting>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="grey" />
          <rect
            filter="url(#roughpaper)"
            width="100%"
            height="100%"
            fill="transparent"
          />
        </svg>
      </div>
      <span className="grid grid-cols-2 text-center justify-center items-center  mt-20">
        <span className="col-span-2 w-4/6 mx-auto">
          <p className="text-8xl text-offWhite ">
            Savor the Smoothness: Coconut-Infused Cigarette Filters!
          </p>
          <hr className=" border-offWhite border-dashed w-1/2 mx-auto" />
          <p className="text-5xl text-offWhite text-center">
            Elevate Your Experience!
          </p>
        </span>
        <button
          className={isSpinning ? `animate-bounce absolute text-black font-bold py-16 px-6 my-96 -mx-0 right-0 rounded-full border-none rounded-r-none cursor-pointer` : `absolute text-black font-bold py-16 px-6 my-96 -mx-0 right-0 rounded-full border-none rounded-r-none cursor-pointer  `}
          style={{ backgroundColor: colorsBtn[colorIndex] }}
          onClick={handleIconClick}
        >
          <PiCigaretteThin
            size={40}
            className={isSpinning ? 'animate-spin' : ''}
          />
        </button>
      </span>
    </div>
  );
}
