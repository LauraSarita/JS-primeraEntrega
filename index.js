//menu de comida
//funcion flecha
const parsearEntero = (valor) =>{
    return parseInt(prompt(valor));
}

const   pedirPasta =() => {
  const submenu = prompt('1- Añade pasta con arroz \n 2- Añade pasta con pollo');
if (submenu === '1'){
  alert('El plato tiene pasta con arroz');
}
if (submenu === '2'){
  alert('El plato tiene pasta con pollo');
}


}



const   pedirArroz =() => {
  const submenu = prompt('1- Añade arroz con pollo \n 2- Añade arroz cantonez');
if (submenu === '1'){
  alert('El plato tiene arroz con pollo');
}
if (submenu === '2'){
  alert('El plato tiene arroz cantonez');
}

}



const   pedirCarne =() => {
  const submenu = prompt('1- Añade carne a caballo \n 2- Añade carne asada');
if (submenu === '1'){
  alert('El plato tiene carne a caballo');
}
if (submenu === '2'){
  alert('El plato tiene carne asada');
}

}

const   usuarioComida = () => {
  const comidaUsuario= prompt('Ingresa lo que deseas comer');
  alert('usted pidio  ' + comidaUsuario)
}


const selector = (opcion) => {

  switch(opcion){
    case 1:
      pedirPasta();
      break;
    case 2:
        pedirArroz();
        break;
    case 3:
        pedirCarne();
        break; 
    case 0:
         usuarioComida();
        break; 
  default:
      alert('Seleccione alguna opcion');
      while( opcion !== 1 && opcion !== 2 && opcion !== 3  && opcion !== 0 ){
       opcion =  parsearEntero('opcion no valida , ingrese otra')
      }
      break;

}

}




const bienvenida = "Bienvenido, accede al menu del dia de hoy";

alert(bienvenida);


const opciones = "1. Pasta \n 2. Arroz \n 3. Carne \n 0. Quiero otro menu";

let seleccionar = parsearEntero(opciones);


 const condiciones = () => (seleccionar === 1 || seleccionar === 2 || seleccionar ===3 || seleccionar ===0);

 while(!condiciones()){

    seleccionar = parsearEntero(opciones);
    condiciones();
    console.log(seleccionar);


 }

selector(seleccionar);


