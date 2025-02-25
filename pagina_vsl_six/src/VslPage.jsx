import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import Timer from './components/Timer';
import BuyCards from './components/BuyCards';
import Footer from './components/Footer';
import Evidences from './components/Evidences';
import Fac from './components/Fac';

function VslPage() {
  const [openCheckout, setOpenCheckout] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const videoTimeRef = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();


  //guardar em cache novas renderizações 
  const timeStart = useMemo(() => localStorage.getItem('videoTime') || 0, []);
  const linkVideo = useMemo(() => `https://www.youtube.com/watch?v=DqUnB3ExA-4&start=${timeStart}`, [timeStart]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    
    // Verifica se os parâmetros já existem
    if (!params.get("utm_source") || !params.get("utm_campaign") || !params.get("utm_medium")) {
      params.set("utm_source", "YouTube");
      params.set("utm_medium", "cpc");
      params.set("utm_campaign", "promo");

      // Redireciona para a mesma rota com os parâmetros de consulta
      navigate(`/?${params.toString()}`, { replace: true });
    }

    const handleScroll = () => {
      setShowButton(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.search, navigate]);

  const scrollToBuyCards = useCallback(() => {
    window.scrollTo({ top: 850, behavior: "smooth" });
  }, []);

  const checkVideoTime = useCallback((time) => {
    videoTimeRef.current = time.playedSeconds;
    if (time.playedSeconds >= 300 && !openCheckout) {
      setOpenCheckout(true);
    }
  }, [openCheckout]);

  const saveVideoTime = useCallback(() => {
    localStorage.setItem('videoTime', videoTimeRef.current);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-300">
      <h1 className="text-center p-6 text-2xl font-semibold">
        O Método Revolucionário que Ativa a Queima de Gordura 24h por Dia – 100% Natural!
      </h1>
      <div className="flex justify-center mb-5">
        <ReactPlayer
          url={linkVideo}
          controls
          playing
          width="80%"
          height="570px"
          onProgress={checkVideoTime}
          onPause={saveVideoTime}
        />
      </div>

      {openCheckout && (
        <>
          <Timer />
          <BuyCards />
          <Evidences />
          <Fac />
          {showButton && (
            <button
              onClick={scrollToBuyCards}
              className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg animate-pulse hover:animate-none transition-all duration-300"
            >
              Compre Agora !!!
            </button>
          )}
        </>
      )}

      <Footer />
    </div>
  );
}

export default VslPage;
