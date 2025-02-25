function removerDuplicados(arr) {
    return [...new set(arr)];
}

console.log(removerDuplicados([1,2,2,3,4,4,5]));