const fileSelect = document.getElementById("abrirAr");
const fileElem = document.getElementById("archivo");

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
            document.getElementById('fileContent').textContent = content;
        }
        reader.readAsText(file);
    } else {
        alert("No se seleccionó ningún archivo.");
    }
});

document.getElementById('saveButton').addEventListener('click', function() {
    const text = document.getElementById('fileContent').value;
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'archivo.oak';  // Sugiere un nombre para el archivo
    link.click();
    URL.revokeObjectURL(link.href);
});

function mostrarConsola(evt, consoleName) {
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
            document.getElementById('fileContent').textContent = content;
        }
        reader.readAsText(file);
    } else {
        document.getElementById('fileContent').textContent = "Nuevos datos";
        alert("No se seleccionó ningún archivo.");        
    }    
}

function guardar(){
    console.log(document.getElementById('fileContent'));
    document.getElementById('fileContent').textContent = "Nuevos datos";
}