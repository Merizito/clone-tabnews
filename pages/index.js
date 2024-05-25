import React from 'react';
import dynamic from 'next/dynamic';

const LottiePlayer = dynamic(() => import('@dotlottie/player-component'), { ssr: false });

function Home() {
  const lottieStyle = {
    width: '300px',
    height: '300px',
    // Adicione outras propriedades de estilo conforme necessário
  };

  return (
    <>
      <div className="title">
        <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
          Clone do Tab-news está em construção e deployado pela{" "}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
            Vercel
          </a>
        </h1>
      </div>

      <LottiePlayer
        src="https://lottie.host/e4da4fb5-853b-4ca5-ace0-4503264f27da/uWdggEe6Vj.json"
        background="transparent"
        speed={1}
        style={lottieStyle}
        loop
        autoplay
      />
    </>
  );
}

export default Home;
