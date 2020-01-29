//Ejercicio 3
function impares(num) {
    for (var i = 0; i <= num; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
}
impares(23);
//Ejercicio 4
function suma(num) {
    var resultado = 0;
    for (var i = 0; i <= num; i++) {
        resultado += i;
    }
    return resultado;
}
console.log(suma(6));
//Ejercicio 5
function factorial(num) {
    var resultado = 1;
    for (var i = 1; i <= num; i++) {
        resultado = resultado * i;
    }
    return resultado;
}
console.log(factorial(5));
//Ejercicio 6
function invertir(aray) {
    var newAray = [];
    for (var i = 0; i < aray.length; i++) {
        newAray.unshift(aray[i]);
    }
    return newAray;
}
console.log(invertir([1, 2, 3, "hola"]));
// otro metodo
function invertir2(aray) {
    var newAray = [];
    for (var i = 0; i < aray.length; i++) {
        newAray[i] = aray[(aray.length - 1) - i];
    }
    return newAray;
}
console.log(invertir2([1, 2, 3, "hola"]));
//Ejercicio 7
function colorIris(color) {
    var colorSi;
    for (var i = 0; i < color.length; i++) {
        if ((color[i] === "rojo") ||
            (color[i] === "naranja") ||
            (color[i] === "amarillo") ||
            (color[i] === "verde") ||
            (color[i] === "cian") ||
            (color[i] === "cian") ||
            (color[i] === "azul") ||
            (color[i] === "violeta")) {
            console.log("El color " + color[i] + " esta en el arco iris");
        }
        else {
            console.log("El color " + color[i] + " no esta en el arco iris");
        }
    }
}
colorIris(["rojo", "asd", "marron", "azul"]);
//coloress: rojo, naranja, amarillo, verde, cian, azul y violeta,
//Ejercicio 8
function parAray(aray) {
    for (var i = 0; i < aray.length; i++) {
        if (aray[i] % 2 == 0) {
            console.log("El numero " + aray[i] + " es par");
        }
    }
}
parAray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//Ejercicio 10
function sumaCharacter(aray) {
    var sumaChar = 0;
    for (var i = 0; i < aray.length; i++) {
        sumaChar += aray[i].length;
    }
    return sumaChar;
}
console.log(sumaCharacter(["Hola", "que", "tal"]));
//Ejericio 11
function par(num) {
    if (num % 2 == 0) {
        console.log("El numero es par");
    }
    else {
        console.log("El numero es impar");
    }
}
par(2);
//Ejercicio 12
function sumaCharacter2(aray) {
    var sumaChar = 0;
    for (var i = 0; i < aray.length; i++) {
        sumaChar += aray[i].length;
    }
    return sumaChar;
}
function par2(num) {
    if (num % 2 == 0) {
        console.log("El numero es par");
    }
    else {
        console.log("El numero es impar");
    }
}
par2(sumaCharacter2(["Casa", "Coche", "Ciudad", "Cesta"]));
//par(sumaCharacter(["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]))
//par(sumaCharacter(["Venezuela", "Veneno", "Voltaje"]));
