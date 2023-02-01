// PARA CREAR LA CUADRILLA DEL SKETCH

const contenedor = document.querySelector('.contenedor');

function grilla32(){

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
};

function grilla16(){

    let id = 0;

    for (let i = 0; i < 16; i++){
        const fila = document.createElement('div');    
        fila.classList.add('fila');
        fila.style.display = "flex";
        contenedor.appendChild(fila);
        for (let j = 0; j < 16; j++){
            const cuadrito = document.createElement('div');    
            cuadrito.classList.add('cuadrito');
            cuadrito.style.width="40px";
            cuadrito.style.height="40px";
            cuadrito.style.backgroundColor="white";
            cuadrito.style.margin = "0px 0px 0px 0px";
            cuadrito.style.padding = 0;
            cuadrito.setAttribute('id', id);
            fila.appendChild(cuadrito);
            id++
        };
    };
};

grilla32();

// PARA CREAR TODOS LOS CUADRITOS COMO OBJETOS 

let cuadritos = document.querySelectorAll(".cuadrito");
console.log(cuadritos);

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
        btnColor.textContent = "¡A color!";
    };
});

// PARA CAMIAR TAMAÑO DE GRILLA

function cambiarGrilla() {
    // esto borra la grilla
    const grilla = document.getElementById("grilla");
    while (grilla.firstChild) {
        grilla.removeChild(grilla.lastChild);
    };
    cuadritos = "";
    // aca le cambiamos el nombre al botón y creamos la nueva grilla según corresponda
    if (btnGrilla.textContent == "16x16"){
        btnGrilla.textContent = "32x32";
        console.log(cuadritos);
        grilla16();
    } else {
        grilla32();
        btnGrilla.textContent = "16x16";       
    };
    
    cuadritos = document.querySelectorAll(".cuadrito");;
}

const btnGrilla = document.querySelector('#btnGrilla');
btnGrilla.addEventListener('click', cambiarGrilla);
    
// PARA QUE CUANDO PASE POR ENCIMA DE UN CUADRITO, CONSIGA EL ID Y CON ESO CAMBIE EL ESTILO

window.addEventListener('mouseover', function(e){
    if (btnColor.textContent == "¡A color!"){
        cuadritos[e.fromElement['id']].style.backgroundColor= "black";   
    } else {
        cuadritos[e.fromElement['id']].style.backgroundColor= getColor(); 
    }
});

