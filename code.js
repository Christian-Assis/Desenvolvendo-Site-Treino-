function abrirmenu(){
    const menu = document.getElementById('mega-menu');
    menu.style.opacity="100%";
    menu.style.zIndex="1";
}
function fecharmenu(){
    const menu = document.getElementById('mega-menu');
    menu.style.opacity='0%';
    menu.style.zIndex='-1';
}
function acao(){
    const cabecalho = document.getElementsByClassName("menuJs");
    const menu = document.getElementById('mega-menu');
    menu.addEventListener('mouseover', abrirmenu);
    menu.addEventListener('mouseout', fecharmenu);
    for(let i = 0; i <= cabecalho.length; i++){
        cabecalho[i].addEventListener('mouseover', abrirmenu);
        cabecalho[i].addEventListener('mouseout', fecharmenu);
    }
}

acao();