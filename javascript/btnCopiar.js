


//----- Funcion para copiar en el portapapeles ---//

function copiar () {

    let copyText = document.getElementById("msg");
    copyText.select();
    document.execCommand("copy");
}  
document.getElementById("btn-copy").addEventListener("click", copiar);


