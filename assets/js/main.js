
















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





const inserirTextoHabilidades = (id,description) =>{
    let descricao = document.getElementById("texto-descricao")
    let icon = document.getElementById(id)
    

    icon.addEventListener("mouseover",function(){
        descricao.innerHTML = description;
    })

    icon.addEventListener("mouseout",function(){
        descricao.innerHTML = "<p>/* Passe o mouse por cima de alguma habilidade para ler a descrição */</p>"
    })


}

inserirTextoHabilidades("html-icon", "<p></p><p>HTML</p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br> <p></p></p>")
inserirTextoHabilidades("css-icon", "<p></p><p>CSS</p> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br> <p></p></p>")
inserirTextoHabilidades("javascript-icon", "<p></p><p>JavaScript</p> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br> <p></p></p>")
inserirTextoHabilidades("git-icon", "<p></p><p>Git</p> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br> <p></p></p>")
inserirTextoHabilidades("github-icon", "<p></p><p>Github</p> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br> <p></p></p>")