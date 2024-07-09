let imagenConTexto = document.getElementById('imagen-con-texto');
let miTextarea = document.getElementById('outputText');
let miBoton = document.getElementById('presentacion__resultado__textarea__boton');

function encryptText() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = encryptedText;
    imagenConTexto.style.display = 'none';
    miTextarea.style.display = 'block';
    miBoton.style.display = 'block';
    miBoton.removeAttribute('hidden');
}

function decryptText() {
    let inputText = document.getElementById('inputText').value;
    let decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = decryptedText;
    imagenConTexto.style.display = 'none';
    miTextarea.style.display = 'block';
    miBoton.style.display = 'block';
    miBoton.removeAttribute('hidden');
}

function copyToClipboard() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    // alert('Texto copiado al portapapeles');
}

let textarea = document.querySelector('textarea');
textarea.addEventListener('click', function() {
  this.setSelectionRange(0, this.value.length);
});