function mediaArray(arr) {
    let soma = arr.reduce((acc, num) => acc + num, 0);
    return soma / arr.length;
}

let ol = [1,2,6,5,8]

console.log(mediaArray(ol));