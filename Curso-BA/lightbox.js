const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const constenderLightLight = document.querySelector('.imagen-light')
const hamburguesa1 = document.querySelector('.hamburguesa');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classLight.toggle('show')
        imagenesLight.classList.toggle('showimage')
        hamburguesa1 = style.opacity = '1';
    }
})





