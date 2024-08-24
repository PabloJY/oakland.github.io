import { parse } from "./parser/parser.js";
const fileSelect = document.getElementById("abrirAr");
const fileElem = document.getElementById("archivo");
const areaTexto = document.getElementById('fileContent');
const terminalT = document.getElementById('terminalTxt');
const btnConsola= document.getElementById("btnConsola");
const lineaTerminal = [];

//const fechaFormateada = `${ahora.getDate()}/${ahora.getMonth() + 1}/${ahora.getFullYear()}`;

window.onload = function(){
    document.getElementById('terminal').style.display = "block";
    document.getElementById('btnConsola').className+= " active";
    escribirConsola('---------Bienvenido---------');
    setTimeout(function() {
        areaTexto.focus();
    }, 0);
}

fileSelect.addEventListener(
  "click",
  (e) => {
    if (fileElem) {
      fileElem.click();
    }
  },
  false,
);

document.getElementById('archivo').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            areaTexto.value = content;
        }
        reader.readAsText(file);
        file.value=""
    } else {
        alert("No se seleccionó ningún archivo.");
    }
});

document.getElementById('btnEjecuta').addEventListener('click', function(){
    const codigo = areaTexto.value;    
    const resultado = parse(codigo);
    console.log(resultado);
    resultado.execute();
    escribirConsola(resultado);
});
document.getElementById('saveButton').addEventListener('click', function() {
    const text = areaTexto.value;
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'archivo.oak';  // Sugiere un nombre para el archivo
    link.click();
    URL.revokeObjectURL(link.href);
});

function mostrarConsola(evt, consoleName) {
    console.log(evt);
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(consoleName).style.display = "block";
    evt.currentTarget.className += " active";
  }

function mensajeAlert(mensaje){
    window.alert(mensaje)
}

function verDoom(){
    console.log(document.getElementById('archivo').files[0]);
    const file = document.getElementById('archivo').files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            areaTexto.value = content;
        }
        reader.readAsText(file);
    } else {
        areaTexto.value = "Nuevos datos";
        alert("No se seleccionó ningún archivo.");        
    }    
}

function guardar(){    
    areaTexto.value = "Nuevos datos";
}

function ejecutaDatos(){
    const codigo = areaTexto.value;    
    const resultado = parse(codigo);
    escribirConsola(resultado);    
}

function escribirConsola(txt){
    const ahora = new Date();
    const horaFormateada = `${ahora.getHours()}:${ahora.getMinutes()}:${ahora.getSeconds()}`;    
    lineaTerminal.push(horaFormateada+'-root>> '+txt);
    let lineas = ""
    lineaTerminal.forEach(linea=>{
        lineas+= linea + '\n';
    });
    terminalT.value = lineas;
    areaTexto.focus();
}

function limpiarA(){
    areaTexto.value= "";
    areaTexto.focus();
}

