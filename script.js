const menu = document.querySelectorAll('.botao');

for(let i=0; i < menu.length; i++){
    menu[i].onclick = function () {
        for(let j=0; j < menu.length; j++){
            menu[j].classList.remove('botao-ativo');
        }
        menu[i].classList.add('botao-ativo');
    }
}