const contenedor = document.querySelector('.contenedor');

let i = 0;

while (i < 16){
    const fila = document.createElement('div');    
    fila.classList.add('fila');
//    fila.style.border = "thick solid #0000FF";
    fila.style.display = "flex";
//    fila.style.width="500px";
    contenedor.appendChild(fila);
    i++
    let j = 0;
    while (j < 16){
        const cuadrito = document.createElement('div');    
        cuadrito.classList.add('cuadrito');
//        cuadrito.src = "images/icono.ico"; 
//        cuadrito.style.border = "solid black";
//        cuadrito.style.borderBlockWidth = "1px";
        cuadrito.style.width="40px";
        cuadrito.style.height="40px";
        cuadrito.style.backgroundColor="white";
//        cuadrito.style.margin = "0px -3px 0px 0px";
    cuadrito.style.margin = "0px 0px 0px 0px";
    cuadrito.style.padding = 0;
        fila.appendChild(cuadrito);
        j++
    }
}