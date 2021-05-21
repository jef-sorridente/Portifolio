const nav = document.getElementById("nav");
const topoNav = nav.offsetTop; //Metodo de leitura que retorna a medida em px da distancia do elemnto em relação ao topo do elemento anterior. ex: nav para main ou body

window.onscroll = function () {
    fixarMenuTopo();
}

function fixarMenuTopo() {
    if (window.pageYOffset >= topoNav) {
        nav.classList.add("FixoNoTopo");
        nav.classList.add("container");  
    } else {
        nav.classList.remove("FixoNoTopo");
        nav.classList.remove("container")  
    }
}
