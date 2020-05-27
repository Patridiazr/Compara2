
//console.log('holiwi');

document.querySelector('#boton').addEventListener('click', mostrarDatos);
function mostrarDatos(){

    //console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','instagram-scraper/datos.json',true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText)
            console.log(datos)
            let res = document.getElementById('res');
            res.innerHTML = '';

            for(let item of datos){
                res.innerHTML +=`
                <tr>
                    <td>${item.Username}</td>
                    <td>${item.Full_name}</td>
                </tr>
            `
            }
        }

    }

}