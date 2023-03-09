







const scripts = ( )=>{

  const item = document.querySelectorAll('[data-anime]')


  const animeScroll = () => {
      const windowTop = window.pageYOffset + window.innerHeight * 0.85 ;
    
      item.forEach((element) => {
        if (windowTop > element.offsetTop) {
          element.classList.add("animate");
        } else {
          element.classList.remove("animate");
        }
      });
    };

  window.addEventListener("scroll",()=>{
      animeScroll()
  })



  const classeTema = document.querySelectorAll('.trocar-fundo')

  const trocarTemaClaro = () =>{
      classeTema.forEach((element) =>{
        element.classList.toggle('fundo-claro')
      })

  }

  const trocarTemaEscuro = () =>{
    classeTema.forEach((element)=>{
      element.classList.toggle('fundo-escuro')
    })
  }

  const checkedButton = document.querySelector('#checktema')

  checkedButton.addEventListener('change',()=>{
    trocarTemaClaro()
  })


  const inserirTextoHabilidades = (id,description) =>{
      let descricao = document.getElementById("texto-descricao")
      let icon = document.getElementById(id)
      

      icon.addEventListener("mouseover",function(){
          descricao.innerHTML = description;
      })

      icon.addEventListener("mouseout",function(){
          descricao.innerHTML = "<p>/* Passe o mouse por cima de alguma habilidade para ler a descrição >.< */</p>"
      })


  }

  inserirTextoHabilidades("html-icon", "<h3>HTML</h3> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br> <p></p></p>")
  inserirTextoHabilidades("css-icon", "<h3>CSS</h3> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br> <p></p></p>")
  inserirTextoHabilidades("javascript-icon", "<h3>JavaScript</h3> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br> <p></p></p>")
  inserirTextoHabilidades("git-icon", "<h3>Git</h3> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br> <p></p></p>")
  inserirTextoHabilidades("github-icon", "<h3>Github</h3> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br> <p></p></p>")
  inserirTextoHabilidades("nodejs-icon", "<h3>NodeJs</h3> <br> <p>Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. </p> <br> <p></p></p>")
}




scripts();



