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
    console.log(`11)El factorial de ${n}, ${factorial}`)
}
factorial(30)

//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no
function primo(n){
    if (isNaN(n)) console.log("12) Primos: No es un número");
    if (n<=1) console.log("12) Primos: No puede ser negativo, cero o uno");
    let divisible = false;
    for (let i=2;i<n;i++){
        if((n%i) === 0) {
            divisible = true;
            break;
        }
    }
    return (divisible)
    ? console.log(`12)Primos: El número ${n} no es primo`)
    : console.log(`12)Primos: El número ${n} es primo`)
}
primo(29)

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
function par(n){
    if (isNaN(n)) {
        console.log("13) Pares: No es un número");
    }else {
        if( (n%2) ===0) {
            console.log(`13)Pares: el númuero ${n} es par`);
        }else {
            console.log(`13)Pares: el númuero ${n} es impar`);
        }
    }
}
par("hh")

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const convertirGrados = (grados, unidad) => {
    if (typeof(grados) != "number") return console.log("14) Grados: No es un número");

    if (unidad.toLowerCase() == "f") {
        let f = Math.round((grados * 9)/5 +32);
        console.log(`14)Grados: ${grados}ºC son ${f}ºF `)  
    }else if  (unidad.toLowerCase() == "c") {
        let c = Math.round((grados - 32) *5 /9);
        console.log(`14)Grados: ${grados}ºF son ${c}ºC `)
    }else grados = "14) No es una unidad válida"
    
}
convertirGrados(89, "C")

//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
const binarioDecimal = (n = undefined, medida =undefined) =>{
    if(n === undefined || medida === undefined) return console.log("15) Binario/Decimal: No hay datos para convertir");
    if (typeof(n) != "number" || typeof(medida) != "number") return console.log("15) Binario/Decimal: No es un número");


    if(medida === 2) {
        return console.info(`15) El número ${n} base ${medida} es = ${parseInt(n, medida)} base 10`)
        //parseInt(n, medida) convierte el número n a la base indicada, este caso base 2 binario
    }else if (medida === 10) {
        return console.info(`15) El número ${n} base ${medida} es = ${n.toString(2)} base 2`)
        //toString si le pasas parámetro convierte a binario, indicando base 2
    }else {
        return console.log("15)Tipo de base no es válido")
    }
}
binarioDecimal(4, 10)   //base 10 es decimal, base 2 binario

//16) Programa una función que devuelva el precio final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const precioDescuento = (precio = undefined, descuento = undefined) =>{
    if(precio === undefined || descuento === undefined) return console.log("16) Descuento: no hay precio o descuento indicado");
    if (typeof(precio) != "number" || typeof(descuento) != "number") return console.log("16) Descuento: No es un número");
    if(descuento<0)  return console.log("16) Descuento: No se puede aplicar descuento negativo");
    
    console.log(`16) Descuento: ${precio} menos ${descuento}% = ${precio - (precio*descuento)/100}`)
}
precioDescuento(1000, 20)


//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
