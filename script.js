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


// PARA BORARR 

function limpiar(){
    cuadritos.forEach(cuadrito => cuadrito.style.backgroundColor = "white");
}

const btnBorrar = document.querySelector('#btnBorrar');
btnBorrar.addEventListener('click', limpiar);

// PARA AGREGAR COLORES

function getColor(){
    let color = "#";
    for (let i = 0; i < 6; i ++){
    let valoresHexadecimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    const randomIndice = Math.floor(Math.random()*valoresHexadecimal.length);
    const valor = valoresHexadecimal[randomIndice];
    color = color + valor;
    };
    return color;
};

let blancoNegro = true;

const btnColor = document.querySelector('#btnColor');
btnColor.addEventListener('click', getColor);

btnColor.addEventListener('click', () => {
    if (btnColor.textContent == "¡A color!"){
        btnColor.textContent = "B&N";
    } else {
        btnColor.textContent = "¡A color!"
    }
    }
);
    
// PARA QUE CUANDO PASE POR ENCIMA DE UN CUADRITO, CONSIGA EL ID Y CON ESO CAMBIE EL ESTILO

window.addEventListener('mouseover', function(e){
    if (btnColor.textContent == "¡A color!"){
        cuadritos[e.fromElement['id']].style.backgroundColor= "black";   
    } else {
        cuadritos[e.fromElement['id']].style.backgroundColor= getColor(); 
    }
});

