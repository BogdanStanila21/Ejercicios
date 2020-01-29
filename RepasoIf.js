function Zodiaco(day, month) {
    month = month.toLowerCase();
    var signo;
    if ((day >= 22 && month === "enero") || (day <= 21 && month === "febrero")) {
        signo = "Acuario";
    }
    else if ((day >= 22 && month === "febrero") || (day <= 21 && month === "marzo")) {
        signo = "Piscis";
    }
    else if ((day >= 21 && month === "marzo") || (day <= 20 && month === "abril")) {
        signo = "Aries";
    }
    else if ((day >= 21 && month === "abril") || (day <= 21 && month === "mayo")) {
        signo = "Tauro";
    }
    else if ((day >= 22 && month === "mayo") || (day <= 21 && month === "junio")) {
        signo = "Geminis";
    }
    else if ((day >= 22 && month === "junio") || (day <= 22 && month === "julio")) {
        signo = "Cáncer";
    }
    else if ((day >= 23 && month === "julio") || (day <= 22 && month === "agosto")) {
        signo = "Leo";
    }
    else if ((day >= 23 && month === "agosto") || (day <= 22 && month === "septiembre")) {
        signo = "Virgo";
    }
    else if ((day >= 23 && month === "septiembre") || (day <= 22 && month === "octubre")) {
        signo = "Libra";
    }
    else if ((day >= 23 && month === "octubre") || (day <= 21 && month === "noviembre")) {
        signo = "Escorpio";
    }
    else if ((day >= 22 && month === "noviembre") || (day <= 21 && month === "diciembre")) {
        signo = "Sagitario";
    }
    else if ((day >= 22 && month === "diciembre") || (day <= 21 && month === "enero")) {
        signo = "Capricornio";
    }
    return signo;
}
console.log(Zodiaco(18, "julIO"));
function continent(contry) {
    contry = contry.toLowerCase();
    var continentContry;
    if ((contry === "españa") || (contry === "francia") || (contry === "alemania") || (contry === "italia") || (contry === "rumania")) {
        continentContry = "Europa";
    }
    else if ((contry === "estados unidos") || (contry === "canada") || (contry === "ecuador") || (contry === "mexico") || (contry === "brasil")) {
        continentContry = "America";
    }
    else if ((contry === "marruecos") || (contry === "senegal") || (contry === "egipto") || (contry === "nigeria") || (contry === "libia")) {
        continentContry = "Africa";
    }
    else if ((contry === "china") || (contry === "japon") || (contry === "rusia") || (contry === "mongolia") || (contry === "israel")) {
        continentContry = "Asia";
    }
    else if ((contry === "australia") || (contry === "fiyi") || (contry === "samoa") || (contry === "tonga") || (contry === "nauru")) {
        continentContry = "Oceanía";
    }
    console.log(continentContry);
}
continent("marruecos");
