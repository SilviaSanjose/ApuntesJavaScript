// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

caracteres = mi =>(!mi) ? console.log("1)No hay texto"): console.log("1)El número de caractere es: ", mi.length);
caracteres("holaa")

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function recortar (mi, n){
    if(!mi){
        console.log("2)No hay texto")
    }else {
    let mire= mi.substring(0, n)
    //let mire= mi.slice(0, n)
    console.log("2)Texto recortado: ", mire) 
    }
}
recortar("Hola Caracola", 7)

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
stringArray = ( miString) => console.log("4)Texto a Array: ",miString.split(' '))

stringArray("Esta es mi cadena")

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
function repetirTexto(text, n){
    for (let t = 0; t<n; t++){
        console.log('4) Repetir texto: ', text)
    }
}
repetirTexto("Este es mi texto", 5)

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
function leerAlReves(text){
    let reves= '';
    let contador = text.length
    while( contador >=0){
        reves += text.charAt(contador)
        contador--
    }
   console.log('5)Invertir palabras: ', reves)
}
leerAlReves("Hola Mundo")

const alEevesSimple = (cadena = "") =>
    (!cadena)   //si cadena/parámetro no existe
        ?console.log("No hay texto")
        :console.log(cadena.split('').reverse().join(''));   //Split separa en caracteres y hace array, Reverse los coloca al revés, y Join los une en una cadena de nuevo

alEevesSimple("Hola Mundo")

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const contarRepetidos = (cadena="", palabra="") => {
    if (!cadena || !palabra) return console.log("6)faltan datos");

    let contador = 0
    var posicion = cadena.indexOf(palabra)
    while (posicion != -1) {
        contador++
        posicion= cadena.indexOf(palabra, posicion+2)
    }
    console.log('6)La palabra se repite: ', contador , ' veces')
}
contarRepetidos("hola mundo en mi mundo e mi mundo", "mundo")

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const palindromo = (cadena) => {
    if (!cadena) return console.log("7)No hay palabra");
    cadena = cadena.toLowerCase();
    (cadena && cadena == cadena.split('').reverse().join(''))
    ?console.log("7) Palabra palíndroma")
    :console.log('7) Palabra no palíndroma')
}
palindromo("accA")


// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const eliminarPatron = (texto="", sup="") =>{
    if (!texto || !sup) return console.log("8)Necesario texto y patron a eliminar")
    texto = texto.replaceAll(sup, "")
    console.log("8) eliminar patron texto: ",texto)
}
eliminarPatron("xyz1, xyz2, xyz3, xyz4 y 6xyz5", "xy");

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.s
(function aleatorio(){
    let a = Math.floor(Math.random() * (600 -501) + 501);
    console.log("9) Número aleatorio: " , a)
})();

//10) Programa una función que reciba un número y evalúe si es capicúa o no.
function capicua(n){ 
    if (isNaN(n)) console.log("10) Capicúa: No es un número");
    if ( n.toString() == n.toString().split('').reverse().join('')) {
        console.log("10) Número capicúa")
    }else console.log("10) Número no capicúa")
}
capicua(2552)

//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
function factorial(n){
    if (isNaN(n)) console.log("11) Factorial: No es un número");
    if (n<0) console.log("11) Factorial no puede ser negativo");
    let factorial = n;
    for(let i=1; i<n; i++){
        factorial *= i;
    }
    console.log(factorial)
}
factorial(30)

//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
