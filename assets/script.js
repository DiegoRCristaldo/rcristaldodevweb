document.addEventListener('DOMContentLoaded', function(){
    let ativar = document.querySelectorAll('motivos-card');
    ativar.forEach(function(ativado){
        ativado.addEventListener('click', function(){
            ativado.classList.toggle('ativar');
        });
    });
});
/*
var fotos = document.querySelectorAll('.foto');
var fotoAtual = 0;

var voltar = document.getElementById('voltar');
var passar = document.getElementById('passar');

function mostrarFoto(index) {
    for (var i = 0; i < fotos.length; i++) {
        fotos[i].style.display = 'none';
    }
    fotos[index].style.display = 'block';
}

mostrarFoto(fotoAtual);

voltar.addEventListener('click', function() {
    fotoAtual = (fotoAtual - 1 + fotos.length) % fotos.length;
    mostrarFoto(fotoAtual);
});

passar.addEventListener('click', function() {
    fotoAtual = (fotoAtual + 1) % fotos.length;
    mostrarFoto(fotoAtual);
});
*/