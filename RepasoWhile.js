function nameInit(name) {
    var condicion = true;
    for (var i = 0; i < name.length; i++) {
        if (name[i].charAt(0) != "M") {
            condicion = false;
            break;
        }
    }
    console.log(condicion);
}
nameInit2(["Mario", "Maria", "Ms"]);
function nameInit2(name1) {
    var condicion2 = true;
    var i = 0;
    while ((i < name1.length) && condicion2) {
        condicion2 = (name1[i].charAt(0) == "M");
        console.log("lsa");
        i++;
    }
    console.log(condicion2);
}
