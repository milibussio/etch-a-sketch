// PARA CREAR LA CUADRILLA DEL SKETCH

const contenedor = document.querySelector('.contenedor');

let id = 0;

for (let i = 0; i < 32; i++){
    const fila = document.createElement('div');    
    fila.classList.add('fila');
    fila.style.display = "flex";
    contenedor.appendChild(fila);
    for (let j = 0; j < 32; j++){
        const cuadrito = document.createElement('div');    
        cuadrito.classList.add('cuadrito');
        cuadrito.style.width="20px";
        cuadrito.style.height="20px";
        cuadrito.style.backgroundColor="white";
        cuadrito.style.margin = "0px 0px 0px 0px";
        cuadrito.style.padding = 0;
        cuadrito.setAttribute('id', id);
        fila.appendChild(cuadrito);
        id++
    };
};

// PARA CREAR TODOS LOS CUADRITOS COMO OBJETOS 

const cuadritos = document.querySelectorAll(".cuadrito");
 
// PARA QUE CUANDO PASE POR ENCIMA DE UN CUADRITO, CONSIGA EL ID Y CON ESO CAMBIE EL ESTILO

window.addEventListener('mouseover', function(e){
    cuadritos[e.fromElement['id']].style.backgroundColor= "black";   
});
