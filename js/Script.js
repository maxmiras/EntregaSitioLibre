document.addEventListener('DOMContentLoaded',()=>{
    const eleCarousel=document.querySelectorAll('.caru2');
    M.Carousel.init(eleCarousel,{
        duration: 50,
        dist: -80,
        shift: 2,
        padding: 2,
        numVisible: 7,
        nowrap: false,
    })
});




let cont =  document.getElementById('contactos');
let form = document.getElementById('form');
let cruz = document.getElementById('cruz');
let sub_but = document.getElementById('submit_but');
let cerrado = true;
let contenedor1 = document.getElementById('contenedor1');
let contenedor12 = document.getElementById('contenedor12');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');


cont.addEventListener('click', abrir);
cruz.addEventListener('click',cerrar2);
sub_but.addEventListener('click',enviar);

function enviar(e){ 
    if(input1.ariaValueText.length <= 5){ 
    }
    window.open('index.html')
    window.close()
   
}


function abrir(){
    if(cerrado == true){
        contenedor1.setAttribute('class','contenedor1_v2');
        contenedor12.setAttribute('class','contenedor1_v2');

        form.style.display = 'inline';
        cerrado = false;
    };
};

function cerrar2(){
    if(cerrado == false){
        contenedor1.removeAttribute('class','contenedor1_v2');
        contenedor12.removeAttribute('class','contenedor1_v2');
        form.style.display = 'None';
        cerrado = true;
    };
};
