var textInput = document.querySelector("#texto");
var outInput = document.querySelector("#textoConvertido");
var conteudoOriginal = document.getElementById('textoConvertido').innerHTML;
// const cores = ['#E9ECF8', '#757575']; // Substitua pelas suas cores
// let indiceCorAtual = 0;
// let a = 0;

function criptografar() {
    var texto = textInput.value;

    if (texto.trim() !== "") { // Verifica se o texto não está vazio
        var resultoCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

        document.getElementById('textoConvertido').innerHTML = 
            '<textarea readonly id="texto2">' + resultoCripto + '</textarea>' + '<div class="botoes2">' +
            '<button class="btn__copiar" id="copiar" onclick="copiar()">Copiar</button>' + '<button class="btn__copiar" id="copiar" onclick="limpar()">Limpar</button>' + '</div>';
    } else {
        alert("Por favor, insira algum texto para criptografar.");
    }
}

function descriptografar() {
    var texto = textInput.value;

    if (texto.trim() !== "") { // Verifica se o texto não está vazio
        var resultoDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

        document.getElementById('textoConvertido').innerHTML = 
            '<textarea readonly id="texto2">' + resultoDescripto + '</textarea>' + '<div class="botoes2">' +
            '<button class="btn__copiar" id="copiar" onclick="copiar()">Copiar</button>' + '<button class="btn__copiar" id="copiar" onclick="limpar()">Limpar</button>' + '</div>';
    } else {
        alert("Por favor, insira algum texto para descriptografar.");
    }
}


function copiar() {
    var textoCopiar = document.getElementById('texto2');
    textoCopiar.select();
    document.execCommand('copy');
    alert("Texto Copiado!");
}

function limpar() {
    document.getElementById('textoConvertido').innerHTML = conteudoOriginal;
}


function removerAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Adiciona o evento 'input' para monitorar as mudanças no textarea
document.getElementById('texto').addEventListener('input', function () {
    // Remove acentos à medida que o usuário digita
    this.value = removerAcentos(this.value);
});

// function trocarCor() {

//     indiceCorAtual = (indiceCorAtual + 1) % 2;
//     document.body.style.backgroundColor = cores[indiceCorAtual];

//             const img = document.querySelector('.aviso img');
//             const p = document.querySelector('.aviso p');
//             const checkbox = document.getElementById('check');
//             const logo = document.querySelector('header img')
           
//             if ( a == 0) {
//                 // Mudar para o novo estado
//                 img.src = 'img/Vector2.png';
//                 p.style.color = '#FFF';
//                 checkbox.checked = !checkbox.checked; 
//                 logo.src = 'img/Lalura.png'
//                 a = 1;

//             } else {
//                 // Voltar ao estado inicial
//                 img.src = 'img/Group.png';
//                 p.style.color = '#000000';
//                 checkbox.checked = !checkbox.checked; 
//                 logo.src = 'img/Vector.png'
//                 a = 0;
//             }

        

// }