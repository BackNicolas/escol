function primo(numero) {
    if (numero <= 1) return "Não é primo";  
    
    
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return "Não é primo";  
        }
    }
    
    return "É primo"; 
}


console.log(primo(7));  
console.log(primo(10)); 
console.log(primo(2)); 
