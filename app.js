// carne - 400gr por pessoa + de 6 horas - 650
// cerveja - 1200 ml por pessoa + 6 horas - 2000ml
// refrigerante/ agua - 1000ml por pessoa + 6 horas 1500ml

//crianca vale por 0,5

const adultos = document.getElementById("adultos");
const criancas = document.getElementById("criancas");
const horas = document.getElementById("duracao");
const hidden = document.getElementById("hidden");

let p = document.getElementsByTagName("p");

const input = document.getElementById("submit");

function conta (){
    let carnes;
    let adultos_cerveja;
    let bebidas;

    if(horas.value > 6){
        carnes = ((parseInt(adultos.value) * 650) + parseInt(criancas.value) * 375) / 1000;
        adultos_cerveja = Math.round((parseInt(adultos.value) * 2000)) / 350;
        bebidas = (parseInt(adultos.value) * 1500 + parseInt(criancas.value) * 750)  / 2000;;
    } else {
        carnes = ((parseInt(adultos.value) * 400) + parseInt(criancas.value) * 200) /1000;
        adultos_cerveja = Math.round((parseInt(adultos.value) * 1200) / 350);
        bebidas = (parseInt(adultos.value) * 1000 + parseInt(criancas.value) * 500) / 2000;
    }

    p[0].innerText = carnes + " " + p[0].innerText;
    p[1].innerText = adultos_cerveja + " " + p[1].innerText;
    p[2].innerText = bebidas + " " + p[2].innerText;

    hidden.style.display = "block";
    
}