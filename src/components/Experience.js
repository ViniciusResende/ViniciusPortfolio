import React from 'react'

function Experience() {
  return (
    <>
      <a id="timeline" className="anchor"></a>
      <div className="experienceContainer" id="timeline">
        <div className="line">
          <div className="pointOut">
            <div className="pointIn"></div>
          </div>
          <div className="pointOut">
            <div className="pointIn"></div>
          </div>
          <div className="pointOut">
            <div className="pointIn"></div>
          </div>
          <div className="pointOut">
            <div className="pointIn"></div>
          </div>
        </div>
        <div className="experienceContent">
          <div className="contentContainer">          
            <h2 className="experienceTitle">2018</h2>
            <p className="experienceDescription">Em 2018 iniciei um curso técnico em informática concomitante ao ensino médio, com isso inciei meus estudos na área da programação principalmente atrelados à lógica de programação em C e Java.</p>
          </div>
          <div className="contentContainer">          
            <h2 className="experienceTitle">2019</h2>
            <p className="experienceDescription">Em 2019 estava no segundo ano do meu curso e atuei a primeira vez como técnico de informática, também, nesse ano, comecei meus estudos nas tecnologias web, por exemplo HTML, CSS e JavaScript.</p>
          </div>
          <div className="contentContainer">          
            <h2 className="experienceTitle">2020</h2>
            <p className="experienceDescription">No ano de 2020, foi o ano em que eu reforcei muito meus conhecimentos de programação solidificando-os e ampliando-os. Nesse ano aprofundei meus estudos nas tecnologias web mais atuais, como ReactJs, React Native e NodeJs. Após obter conhecimento suficiente com essas tecnologias, desenvolvi um complexo aplicativo para o Trabalho de Conclusão de Curso do meu curso técnico.</p>
          </div>
          <div className="contentContainer">          
            <h2 className="experienceTitle">2021</h2>
            <p className="experienceDescription">Em 2021, comecei minha formação em Sistemas de Informações e aumentei consideravelmente meu foco na área de desenvolvimento FrontEnd.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience
