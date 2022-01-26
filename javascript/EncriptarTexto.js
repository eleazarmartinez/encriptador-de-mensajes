


function encriptarTexto(texto){

    arrayTexto = [];
    var largoTexto = texto.length;
    
    
    for(let i = 0; i < largoTexto; i++){
        arrayTexto.push(texto.charAt(i));
    }
    
    let largoArray = arrayTexto.length;

    //Se Recorre el array para asi poder intercambiar el texto por las palabras indicadas en el if
    for(let i = 0; i < largoArray; i++){
        if(arrayTexto[i] == 'a'){

            arrayTexto.splice(i, 1, 'ai');    

        }else if(arrayTexto[i] == 'e'){

            arrayTexto.splice(i, 1, 'enter');

        }else if(arrayTexto[i] == 'i'){

            arrayTexto.splice(i, 1, 'imes');   

        }else if(arrayTexto[i] == 'o'){

            arrayTexto.splice(i, 1, 'ober');       

        }else if(arrayTexto[i] == 'u'){

            arrayTexto.splice(i, 1, 'ufat');
        }
    }

    //Pasar los indices del array a un string
    let textoEncriptado = "".concat(...arrayTexto);
    
    //Imprimir el resultado en el input
    console.log(textoEncriptado);
    
    let textoSalida = document.getElementById("msg");
    textoSalida.value = textoEncriptado;
}