import AppRoute from './containers/AppRoute';
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function SplashScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 1800);

    const timer2 = setTimeout(() => {
      onFinish();
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background:
          "linear-gradient(135deg, rgb(254,160,176), rgb(255,105,180), rgb(255,20,147))",
      }}
    >
      <h1 className="text-white text-5xl font-bold pop-animation drop-shadow-2xl">
        Pinkyrikky
      </h1>

      <style>
        {`
          @keyframes pop {
            0% { transform: scale(0.8); opacity: 0.5; }
            50% { transform: scale(1.2); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
          }
          .pop-animation {
            animation: pop 2.0s ease-out forwards;
          }
        `}
      </style>
    </div>
  )
}

SplashScreen.propTypes = {
  onFinish: PropTypes.func.isRequired,
};

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="w-full h-screen">
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <div>
          <AppRoute />
        </div>
      )}
    </div>
  );
}

export default App;
