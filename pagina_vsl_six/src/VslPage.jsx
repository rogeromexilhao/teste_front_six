import { useState,useRef,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import capsula from '../src/assets/img/img_capsula_semBk.png'
import ReactPlayer from "react-player";
import Timer from './components/Timer';
import BuyCards from './components/BuyCards';
import Footer from './components/Footer';

function VslPage() {
  const playerRef = useRef(null);
  const [openCheckout,setOpenCheckout] = useState(false)
  const [videoTime,setVideoTime] = useState(null)

  useEffect(() => {
    localStorage.getItem('chave');
  }, []);

  //faltando logica de iniciar o video no tempo pausado - e melhorar ela
  //pagina de compra/obrigado
  //guardar os parametros utm
  //melhorar lighthouse
  //melhorar o mobile


  const handleReady = () => {
    playerRef.current.seekTo(300, "seconds"); // Vai para 5 minutos (300 segundos)
  };

  const checkVideoTime = (time) =>{
    if(time.playedSeconds >= 300){
      setOpenCheckout(true)
    }
    setVideoTime(time.playedSeconds)
  }

  const saveVideoTime = () =>{
    localStorage.setItem('videoTime', videoTime)
  }

  return (
    <div className='w-full h-full bg-gray-300'>
      <h1 className='text-center p-6' style={{fontSize:27,fontWeight:600}}>
        O Método Revolucionário que Ativa a Queima de Gordura 24h por Dia – 100% Natural!
      </h1>
      <div className='flex items-center justify-center mb-5'>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=XbL2Ol3GzjA"
          // url="https://www.youtube.com/watch?v=XbL2Ol3GzjA&start=300" 
          controls 
          playing
          width="80%"
          height="570px"
          onProgress={(e)=>checkVideoTime(e)}
          onPause={saveVideoTime}
          // onDuration={(e)=>{console.log('duration',e)}}
          // onReady={handleReady}          
        />
      </div>
      {openCheckout ?
        <div>
          <Timer/>
          <BuyCards/>
        </div>
        :
          <></>
      }
      {/* depoimentos */}
      {/* fac/perguntas */}
      <Footer/>


      {/* <button className='bg-blue-500 text-white px-4 py-2 rounded'>Clique aqui</button>
      <img src={capsula}/>   */}
    </div>
  )
}

export default VslPage
