// Almacenamos el nombre del cliente y como nos ha conocido
let nombreCliente = prompt("Como te llamas?");
let como = prompt("Como nos has conocido?");

alert("Bienvenido" + " " + nombreCliente + " esperamos que encuentres el tratamiento que mas se acerque a tí.");

//Mostraremos los diferentes tratamientos
let tratamientos = ["deportivo", "relajante", "maderoterapia", "reflexología", "shiatsu"];

alert("Estos son los tratamientos que podemos ofrecer:");
for (let i = 0; i < tratamientos.length; i++) {
    alert("Tratamiento " + (i + 1) + ": " + tratamientos[i]);
}

//Daremos a elegir entre nuestros diferentes tratamientos
let tipoMasaje;

while (true) {
    tipoMasaje = prompt("¿Cuál de los anteriores es de tu interés?: deportivo, relajante, maderoterapia, reflexología o shiatsu");

    if (tipoMasaje === "deportivo") {
        alert("Necesitas descongestionar? Estás en buenas manos...");
        break; // Sale del bucle while
    } else if (tipoMasaje === "relajante") {
        alert("¡Cierra los ojos y disfruta, has venido para eso!");
        break; // Sale del bucle while
    } else if (tipoMasaje === "maderoterapia") {
        alert("¡Ve diciendo adiós a la celulitis!");
        break; // Sale del bucle while
    } else if (tipoMasaje === "reflexología") {
        alert("¡Uno de los placeres de la vida... reflexología PODAL!");
        break; // Sale del bucle while
    } else if (tipoMasaje === "shiatsu") {
        alert("¡Déjate seducir por uno de los masajes más antiguos del mundo!");
        break; // Sale del bucle while
    } else {
        alert("Parece que no disponemos de ese servicio. Por favor, elige nuevamente.");
    }
}


/*Calculamos el precio que se gastrá el cliente entre numero
de sesiones y precio por sesión*/
let sesiones = prompt("En cuantas sesiones estas interesad@?")
function calcular(sesiones, precioSesion) {
    let costoTotal = sesiones * precioSesion;
    return costoTotal;
}

let precioSesion = 35;
let costoTotal = calcular(sesiones, precioSesion);

alert("El costo total de tus" + " " + sesiones + " sesiones es de €" + costoTotal + ".");

// Creamos una función de orden superior para mostrar los detalles del masaje
function mostrarDetallesMasaje(masajeDeportivo) {
    alert("Detalles del masaje: es una técnica terapéutica que combina movimientos profundos y estiramientos para mejorar el rendimiento y la recuperación de los atletas. Alivia la tensión muscular, promueve la circulación y previene lesiones, optimizando el cuerpo para un óptimo desempeño deportivo.");
    alert("Nombre: " + masajeDeportivo.nombre);
    alert("Duración: " + masajeDeportivo.duracion + " minutos");
    alert("Terapeuta: " + masajeDeportivo.terapeuta);
    alert("Precio: " + masajeDeportivo.precio);
}

// Creamos un objeto con información del masaje deportivo
let masajeDeportivo = {
    nombre: "Masaje deportivo",
    duracion: "60 minutos",
    terapeuta: "Blanca",
    precio: "35€"
};

// Llamamos a la función para mostrar los detalles del masaje
mostrarDetallesMasaje(masajeDeportivo);
