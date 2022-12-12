class Carro {
    cor;
    tipodecombustivel;
    kmporlitro;

    constructor(cor, tipodecombustivel, kmporlitro){
        this.cor = cor;
        this.tipodecombustivel = tipodecombustivel;
        this.kmporlitro = kmporlitro;
    }

    calcular(preco, distancia){
        return distancia * this.kmporlitro * preco;
    }
}

let uno = new Carro("Azul", "Gasolina", (1/12).toFixed(3));

let golf = new Carro("Prata", "Gasolina", (1/9).toFixed(3));

console.log("gasto em reais para o trajeto é "+ uno.calcular(140, 6.53).toFixed(2));
console.log("gasto em reais para o trajeto é "+ golf.calcular(140, 6.53).toFixed(2));


