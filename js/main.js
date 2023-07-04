let vino = Number(prompt("Elegí cuántas botellas querés!"));
console.log("Elegiste " + vino + " :)");
let c = 1;
let marca1 = 0; //finca las moras
let marca2 = 0; //colon
let marca3 = 0; //latitud 33
let tipo1 = 0; //tinto
let tipo2 = 0; //blanco
let total = 0;
let totalmas = 0;
let elegido = 0;
let elegido1 = 0;
let elegido2 = 0;
let cuotas = 0;
let cuotasmas = 0;
let Fincalasmoras = 900;
let Colon = 800;
let Latitud33 = 1000;
const interes1 = (Fincalasmoras) => {
  return (20 * Fincalasmoras) / 100;
};
const interes2 = (Colon) => {
  return (15 * Colon) / 100;
};
const interes3 = (Latitud33) => {
  return (10 * Latitud33) / 100;
};

while (c <= vino) {

  elegido1 = Number(prompt("Elegí el tipo de vino! 1-tinto 2-blanco"));
  
  switch (elegido1) {
    case 1:
      alert("Elegiste vino tinto")
      tipo1 = tipo1 + 1;
      console.log("Elegiste vino tinto")
      break;
    case 2:
      alert("Elegiste vino blanco")
      tipo2 = tipo2 + 1;
      console.log("Elegiste vino blanco")
      break;
    default:
      alert(
        "Error 404!. Elegí 1 de los 2 tipos propuestos propuestos!"
      );
      c = c - 1;
      continue;
  }
  console.log("VINO NÚMERO" + "" + c);
  elegido = Number(
    prompt("Elegí tu vino! 1-Finca las moras 2-Colón 3-Latitud 33")
  );
  console.log(
    "Elegiste 1-Finca las moras 2-Colón 3-Latitud 33, es: !" + elegido
  );
  switch (elegido) {
    case 1:
      alert("El vino elegido es un Finca las moras");
      marca1 = marca1 + 1;
      console.log("El vino elegido es un Finca las moras");

      cuotas = Number(prompt("Elegí tus cuotas a pagar"));
      console.log("Elegiste pagar en: " + cuotas + "cuotas!");

      total = 20;
      alert("Su cuota a pagar es de: $" + Fincalasmoras/cuotas);
      console.log("Su cuota a pagar es de: $" + Fincalasmoras/cuotas);
      if (cuotas>18) {
        alert("Como superó las 18 cuotas, deberá abonar el interés del 20%");
        cuotasmas = interes1(Fincalasmoras);
        console.log("interés + a la cuota superior a 18 =:");
        totalmas = Fincalasmoras +  interes1(Fincalasmoras);
        alert("Pagará un interés de: $" + cuotasmas);
        console.log(
          console.log(
            "Pagará un interés de: $" + cuotasmas
          )
        );
        alert("Su total a pagar es de: $" + totalmas);
        console.log(
          console.log(
            "Su total a pagar es de: $" + totalmas
          )
        );
      }
      break;
    case 2:
      alert("El vino elegido es un Colón");
      marca2 = marca2 + 1;
      console.log("El vino elegido es un Colón");
      console.log("El interés 1 es:" + interes2(Colon));
      cuotas = Number(prompt("Elegí tus cuotas a pagar"));
      console.log("Elegiste pagar en: " + cuotas + "cuotas!");

      total = 15;
      alert(
        "Su cuota a pagar es de: $" + Colon/cuotas);
      console.log("Su cuota a pagar es de: $" + Colon/cuotas);
      if (cuotas > 18) {
        alert("Como superó las 18 cuotas, deberá abonar el interés del 15%");
        cuotasmas = interes2(Colon);
        console.log("interés + a la cuota superior a 18 =:");
        totalmas = Colon +  interes2(Colon);
        alert("Pagará un interés de: $" + cuotasmas);
        console.log(
          console.log(
            "Pagará un interés de: $" + cuotasmas
          )
        );
        alert("Su total a pagar es de: $" + totalmas);
        console.log(
          console.log(
            "Su total a pagar es de: $" + totalmas
          )
        );
      }
      break;
    case 3:
      alert("El vino elegido es un Latitud 33");
      marca3 = marca3 + 1;
      console.log("El vino elegido es un Latitud 33");
      console.log("El interés 1 es:" + interes3(Latitud33));
      cuotas = Number(prompt("Elegí tus cuotas a pagar"));
      console.log("Elegiste pagar en: " + cuotas + "cuotas!");

      total = 10;
      alert(
        "Su cuota a pagar es de: $" + Latitud33/cuotas);
      console.log("Su cuota a pagar es de: $" + Latitud33/cuotas);
      if (cuotas > 18) {
        alert("Como superó las 18 cuotas, deberá abonar el interés del 10%");
        cuotasmas = interes3(Latitud33);
        console.log("interés + a la cuota superior a 18 =:");
        totalmas = Latitud33 +  interes3(Latitud33);
        alert("Pagará un interés de: $" + cuotasmas);
        console.log(
          console.log(
            "Pagará un interés de: $" + cuotasmas
          )
        );
        alert("Su total a pagar es de: $" + totalmas);
        console.log(
          console.log(
            "Su total a pagar es de: $" + totalmas
          )
        );
      }
      break;
    default:
      alert("Elegí 1 de los 3 vinos de la lista");
      c = c - 1;
      continue;
  }

  cuotas = 0;
  cuotasmas = 0;
  total = 0;
  totalmas = 0;
  c = c + 1;
  console.log("");
}
