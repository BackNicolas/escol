console.log("")
console.log("EX5")

function contarCaracteres(str) {
    let contador = {};
    for (let char of str) {
        contador[char] = (contador[char] || 0) + 1;
    }
    return contador;
}

let texto = "banana";
let contagem = contarCaracteres(texto);
console.log(contagem);