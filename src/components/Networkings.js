import React, { useState, useEffect } from 'react'

import LuisPauloPicture from '../assets/LuisPauloPicture.jpg';

function Networkings() {
  const [slidesTransform, setSilidesTransform] = useState("0%");
  const [isClicked, setIsClicked] = useState(false);

  const changeSlideTransformRight = () => {
    setIsClicked(true);
    if(slidesTransform === "0%"){
      setSilidesTransform("-100%");
    } else if(slidesTransform === "-100%"){
      setSilidesTransform("-200%");
    } else if (slidesTransform === "-200%"){
      setSilidesTransform("0%");
    }
    setTimeout(() => {
      setIsClicked(false);
    }, 5000)
  }

  const changeSlideTransformLeft = () => {
    setIsClicked(true);
    if(slidesTransform === "0%"){
      setSilidesTransform("-200%");
    } else if(slidesTransform === "-100%"){
      setSilidesTransform("0%");
    } else if (slidesTransform === "-200%"){
      setSilidesTransform("-100%");
    }
    setTimeout(() => {
      setIsClicked(false);
    }, 5000)
  }

  useEffect(() =>{
    if(!isClicked){
      if(slidesTransform === "0%"){
        setTimeout(() => {
          setSilidesTransform("-100%");
        }, 7000)      
      } else if(slidesTransform === "-100%"){
        setTimeout(() => {
          setSilidesTransform("-200%");
        }, 7000)
      } else if (slidesTransform === "-200%"){
        setTimeout(() => {
          setSilidesTransform("0%");
        }, 7000)
      }
    }    
  }, [slidesTransform, isClicked])

  return (
    <div>
      <>
        <a id="networkings" className="anchor" href="#"></a>
          <div className="networkingsContainer">
            <h2>my networkings</h2>
            <div className="contentShowContent">
              <div className="arrowLeft" onClick={changeSlideTransformLeft}>
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#b1b2b2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-left-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>
              </div>        
              <div className="arrowRight" onClick={changeSlideTransformRight}>
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#b1b2b2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              </div>
              <div className="slides" style={{transform: `translateX(${slidesTransform})`}}>
                <div className="contentContainer slide-one">
                  <img src="https://avatars.githubusercontent.com/u/3341923?s=400&u=1355a0314e881a5b38a71cf35792cac2c3e63819&v=4" alt="Bruno alves"/>
                  <p className="contentContainerSentence">
                    Bruno Alves
                  </p>
                  <p className="contentContainerParagraph">
                    Desenvolvedor Senior Full Stack na empresa <br/>
                    Radical Imaging LLC, formado pela universidade <br/>
                    PUC-MG e pós graduado pela mesma instituição.
                  </p>
                  <a href="https://www.linkedin.com/in/brunoalvesdefaria/" target="_blank" rel="noreferrer" className="contentContainerButton">conhecer</a>
                </div>
                <div className="contentContainer slide-two">
                  <img src="https://avatars.githubusercontent.com/u/52550525?s=400&u=cb95dcf9178e26ccb9b142f3d44e06a1da5b5c42&v=4" alt="Caio Campos"/>
                  <p className="contentContainerSentence">
                    Caio Campos
                  </p>
                  <p className="contentContainerParagraph">
                    Analista de Desenvolvimento na empresa Samba Tech <br/>
                    formado pela faculdade Fapam em Gestão de Tecnologia <br/>
                    da Informação e mentor na instituição de ensino RocketSeat.
                  </p>

                  <a href="https://www.linkedin.com/in/caio-campos-905955175/" target="_blank" rel="noreferrer" className="contentContainerButton">conhecer</a>
                </div>
                <div className="contentContainer slide-three">
                  <img src={LuisPauloPicture} alt="Luis Paulo"/>
                  <p className="contentContainerSentence">
                    Luis Paulo Alves
                  </p>
                  <p className="contentContainerParagraph">
                    Co-Diretor da empresa Javé Logística EIRELI <br/>
                    graduando em Sistemas de Informação pela  <br/>
                    universidade UNA Contagem.
                  </p>
                  <a href="https://www.facebook.com/luis.paulo.92102" target="_blank" rel="noreferrer" className="contentContainerButton">conhecer</a>
                </div>  
              </div>     
          </div>
          </div>
      </>
    </div>
  )
}

export default Networkings
