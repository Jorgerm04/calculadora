const pantalla = document.querySelector('#pantalla')
const numeros = document.querySelectorAll('#numero');
const operadores = document.querySelectorAll('#oper');
const igual = document.querySelector('#oper-igual');
const borrar = document.querySelector('#borrar');


for (let i = 0; i < numeros.length; i++) {
    numeros[i].addEventListener('click', function() {
        var numero = numeros[i].value;
        pantalla.value += numero;
    });
}

for (let i = 0; i < operadores.length; i++) {
    operadores[i].addEventListener('click', function() {
        var operador = operadores[i].value;
        pantalla.value += operador;
    });
}

borrar.addEventListener('click', function() {
    pantalla.value = '';
});

igual.addEventListener('click', function() {
    pantalla.value =eval(pantalla.value);
});

