const pantalla = document.querySelector('#pantalla')
const numeros = document.querySelectorAll('#numero');
const operadores = document.querySelectorAll('#oper');
const igual = document.querySelector('#oper-igual');
const borrar = document.querySelector('#borrar');
const borrarUltimo = document.querySelector('#borrar-ultimo');
const ln = document.querySelector('#oper-log-nep');
const log = document.querySelector('#oper-log');
const cuadrado = document.querySelector('#oper-cuadrado');
const raiz = document.querySelector('#oper-raiz-cuadrada');
const e = document.querySelector('#num-e');
const pi = document.querySelector('#num-pi');
var pantallaValue = pantalla.value;

/**Array para separar los distintos caracteres que hay en pantalla para hacer distintas comprobaciones en las funciones*/
var pantallaArray = pantallaValue.split("");

/**Recorre todas las teclas con id="numero" para encontrar a cual se le ha dado click y escribirla en pantalla*/
for (let i = 0; i < numeros.length; i++) {
    numeros[i].addEventListener('click', function () {
        var numero = numeros[i].value;
        pantalla.value += numero;
    });
}

/**Recorre todas las teclas con id="oper" para encontrar a cual se le ha dado click y escribirla en pantalla*/
for (let i = 0; i < operadores.length; i++) {
    operadores[i].addEventListener('click', function () {
        pantallaValue = pantalla.value;
        pantallaArray = pantallaValue.split("");
        if (!isNaN(pantallaArray[pantallaArray.length - 1])) {
            var operador = operadores[i].value;
            pantalla.value += operador;
        } else{
            pantallaArray.pop();
            pantalla.value = pantallaArray.join("");
            var operador = operadores[i].value;
            pantalla.value += operador;

        }
    });
}

/**Funcion que se activa al dar click al boton "C" y borra todo lo que hay en pantalla */
borrar.addEventListener('click', function () {
    pantalla.value = "";
});

/**Funcion que se activa al dar click al boton "⇦" y borra el ultimo caracter que hay en pantalla */
borrarUltimo.addEventListener('click', function () {
    pantallaValue = pantalla.value;
    pantallaArray = pantallaValue.split("");
    console.log(pantallaArray);
    pantallaArray.pop();
    pantalla.value = pantallaArray.join("");
    console.log(pantallaArray);
});

/**Funcion que se activa al dar click al boton "=" y realiza la operacion que haya en pantalla y muestra el resultado*/
igual.addEventListener('click', function () {
    pantallaValue = pantalla.value;
    pantallaArray = pantallaValue.split("");

    if(!isNaN(pantallaArray[pantallaArray.length-1])){
        pantalla.value = eval(pantalla.value);
    }else{
        pantallaArray.pop();
        pantalla.value = pantallaArray.join("");
        pantalla.value = eval(pantalla.value);
    }
});

/**Funcion que se activa al dar click al boton "ln" y realiza el logaritmo neperiano del numero que haya en pantalla */
ln.addEventListener('click', function () {
    pantallaValue = pantalla.value;
    pantallaArray = pantallaValue.split("");
    var contadorNumeros = 0;
    for (let i = 0; i < pantallaArray.length; i++) {
        if (!isNaN(pantallaArray[i])) {
            contadorNumeros++;
        }
    }
    if (contadorNumeros == 0) {
        swal("Oh no!", "No se puede operar sin numeros!", "error")
    } else {
        pantalla.value = Math.log(eval(pantalla.value));
    }

});

/**Funcion que se activa al dar click al boton "log" y realiza el logaritmo en base 10 del numero que haya en pantalla */
log.addEventListener('click', function () {
    pantallaValue = pantalla.value;
    pantallaArray = pantallaValue.split("");
    var contadorNumeros = 0;
    for (let i = 0; i < pantallaArray.length; i++) {
        if (!isNaN(pantallaArray[i])) {
            contadorNumeros++;
        }
    }
    if (contadorNumeros == 0) {
        swal("Oh no!", "No se puede operar sin numeros!", "error")
    } else {
        pantalla.value = Math.log10(eval(pantalla.value));
    }

});

/**Funcion que se activa al dar click al boton "x²" y calcula el cuadrado del numero que haya en pantalla */
cuadrado.addEventListener('click', function () {
    pantallaValue = pantalla.value;
    pantallaArray = pantallaValue.split("");
    var contadorNumeros = 0;
    for (let i = 0; i < pantallaArray.length; i++) {
        if (!isNaN(pantallaArray[i])) {
            contadorNumeros++;
        }
    }
    if (contadorNumeros == 0) {
        swal("Oh no!", "No se puede operar sin numeros!", "error")
    } else {
        pantalla.value = Math.pow(eval(pantalla.value), 2);
    }

});

/**Funcion que se activa al dar click al boton "√x" y calcula la raiz cudrada del numero que haya en pantalla */
raiz.addEventListener('click', function () {
    pantallaValue = pantalla.value;
    pantallaArray = pantallaValue.split("");
    var contadorNumeros = 0;
    for (let i = 0; i < pantallaArray.length; i++) {
        if (!isNaN(pantallaArray[i])) {
            contadorNumeros++;
        }
    }
    if (contadorNumeros == 0) {
        swal("Oh no!", "No se puede operar sin numeros!", "error")
    } else {
        pantalla.value = Math.sqrt(eval(pantalla.value));
    }

});

/**Funcion que se activa al dar click al boton "π" y escribe el numero que corresponde a π*/
pi.addEventListener('click', function () {
    pantallaValue = pantalla.value;
    pantallaArray = pantallaValue.split("");
    if(!isNaN(pantallaArray[pantallaArray.length-1])){
        pantalla.value = Math.PI;
    } else{
        pantalla.value += Math.PI;
    }
    
});

/**Funcion que se activa al dar click al boton "e" y escribe el numero que corresponde a e*/
e.addEventListener('click', function () {
    pantallaValue = pantalla.value;
    pantallaArray = pantallaValue.split("");
    if(!isNaN(pantallaArray[pantallaArray.length-1])){
        pantalla.value = Math.E;
    } else{
        pantalla.value += Math.E;
    }
    
});


