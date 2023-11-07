numerosDaSorte = [37, 14, 26, 5, 94, 87]  

for(let i = 0; i < numerosDaSorte.length; i++) {
    if(numerosDaSorte[i] % 2 === 0 && numerosDaSorte[i]< 50) {
        console.log(`${numerosDaSorte[i]} e par e menor 50`)
    } else if(numerosDaSorte[i] < 50) {
        console.log(`${numerosDaSorte[i]} e menor que 50`)
    } else {
        console.log(`${numerosDaSorte[i]} e maior que 50`)
    }
}