//eventos sao interaçoes do usuario com o website e também
// comportamentos do website, por exemplo carregar a tela

let elementoBtn = document.getElementById("btn");
let elementoIdLeandra = document.getElementById("tecnica");
let novoElemento = document.createElement("a");
novoElemento.textContent = "DE NOVO | BOLOFOFOS";
novoElemento.href = "https://www.youtube.com/watch?v=5JIVd8wVeBA&list=RDzp2Ip0dLvDw&index=2";

elementoBtn.addEventListener("click", () => {
    // alert("Voce clicou no botao");

    // elementoBtn.style.backgroundColor = "purple";
    
    document.body.appendChild(novoElemento);
    // document.body.removeChild(elementoIdLeandra);
    //console.log(document.body.children);
    
    document.body.children[1].removeChild(elementoIdLeandra)
    
})

