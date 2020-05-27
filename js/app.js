
// //console.log('holiwi');

// document.querySelector('#boton').addEventListener('click', mostrarDatos);
// function mostrarDatos(){

//     //console.log('dentro de la funcion');

//     const xhttp = new XMLHttpRequest();

//     xhttp.open('GET','instagram-scraper/datos.json',true);

//     xhttp.send();

//     xhttp.onreadystatechange = function(){

//         if(this.readyState == 4 && this.status == 200){

//             //console.log(this.responseText);
//             let datos = JSON.parse(this.responseText)
//             console.log(datos)
//             let res = document.getElementById('res');
//             res.innerHTML = '';

//             for(let item of datos){
//                 res.innerHTML +=`
//                 <tr>
//                     <td>${item.Id}</td>
//                     <td>${item.Username}</td>
//                 </tr>
//             `
//             }
//         }

//     }

// }

// Iniciar

const CuentaUno = document.getElementById('CuentaUno');
const BtnEnviar = document.getElementById('Enviar');

cargarEventListener();

function cargarEventListener(){
    BtnEnviar.addEventListener('click',leerDatos);

}

function leerDatos(e){
    e.preventDefault();
    console.log(CuentaUno.value);

}

