


function desencriptarTexto(texto){

    // se eemplaza los valores correspondientes

    let textoDesencriptado = texto.replace(/ai/g,'a');
    textoDesencriptado = textoDesencriptado.replace(/enter/g,'e');
    textoDesencriptado = textoDesencriptado.replace(/imes/g,'i');
    textoDesencriptado = textoDesencriptado.replace(/ober/g,'o');
    textoDesencriptado = textoDesencriptado.replace(/ufat/g,'u');

    //Imprimi el resultado en el input

    console.log(textoDesencriptado);
    let textoSalida = document.getElementById("msg");
    textoSalida.value = textoDesencriptado;
}

//--- aqui se capturan los botones y ademas les pasamos las funciones correspondientes ---//

let botonEncriptar = document.querySelector("#btn-encriptar");

botonEncriptar.addEventListener("click",function(event){

    event.preventDefault();
    let textoEntrada = document.querySelector("#input-texto").value;
    encriptarTexto(textoEntrada);
    
});

let botonDesencriptar = document.querySelector("#btn-desencriptar");

botonDesencriptar.addEventListener("click",function(event){

    event.preventDefault();
    let textoEntrada = document.querySelector("#input-texto").value;

    desencriptarTexto(textoEntrada);

});