// Datos del cliente (nombre y como nos conoció)
let nombreCliente = prompt("¿Cómo te llamas?");
let como = prompt("¿Cómo nos conociste?");

alert("Bienvenido" + " " + nombreCliente + " esperamos que encuentres la experiencia que más se acerque a vos :)");

//Se verán las diferentes experiencias
let experiencias = ["gastronomía", "aventura", "entretenimiento", "estar bien", "estadías"];

alert("Estas son las mejores experiencias para vos:");
for (let i = 0; i < experiencias.length; i++) {
    alert("Experiencia " + (i + 1) + ": " + experiencias[i]);
}

//Elección del cliente de las diferentes experiencias
let tipoExperiencia;

while (true) {
    tipoExperiencia = prompt("¿Qué experiencia te interesa?: gastronomía, aventura, entretenimiento, estar bien o estadías");

    if (tipoExperiencia === "gastronomía") {
        alert("¿Querés deleitar tu paladar? Estás en el lugar indicado!");
        break; // Sale del bucle while
    } else if (tipoExperiencia === "aventura") {
        alert("¿Querés vivir una experiencia increíble? Estás en el lugar indicado!");
        break; // Sale del bucle while
    } else if (tipoExperiencia === "entretenimiento") {
        alert("¿Querés divertirte? Estás en el lugar indicado!");
        break; // Sale del bucle while
    } else if (tipoExperiencia === "estar bien") {
        alert("¿Querés relajarte? Estás en el lugar indicado!");
        break; // Sale del bucle while
    } else if (tipoExperiencia === "estadías") {
        alert("¿Querés escaparte un ratito? Estás en el lugar indicado!");
        break; // Sale del bucle while
    } else {
        alert("Experiencia no disponible. Por favor, elegí nuevamente.");
    }
}


/*Calculo del precio de la experiencia entre numero
de días y precio*/
let días = prompt("En cuantas días estas interesad@?")
function calcular(días, precioExperiencia) {
    let costoTotal = días * precioExperiencia;
    return costoTotal;
}

let precioExperiencia = 3000;
let costoTotal = calcular(días, precioExperiencia);

alert("El costo total de tus" + " " + días + " día/s es de $" + costoTotal + ".");

// Creamos una función de orden superior para mostrar los detalles de la experiencia
function mostrarDetallesExperiencia(experienciaGastronómica) {
    alert("Detalles de la experiencia: el entorno perfecto para dejarse seducir por la gastronomía argentina.");
    alert("Nombre: " + experienciaGastronómica.nombre);
    alert("Duración: " + experienciaGastronómica.tiempo + " noche");
    alert("Terapeuta: " + experienciaGastronómica.terapeuta);
    alert("Precio: " + experienciaGastronómica.precio);
}

// Creamos un objeto con información de la experiencia gastronómica
let experienciaGastronómica = {
    nombre: "Experiencia Gastronómica",
    tiempo: "1 noche",
    lugar: "Black Tongue",
    precio: "3000$"
};


// Llamamos a la función para mostrar los detalles de la experiencia
mostrarDetallesExperiencia(experienciaGastronómica);
