class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularIMC(){
       return this.peso / (this.altura * this.altura);
    }
    separarIMC(){
       let imc = this.calcularIMC();
       if(imc < 18.5) {
        return "Está abaixo do Peso";
       }else if( imc >= 18.5 && imc < 25){
        return "Está no Peso normal";
       }else if( imc >= 25 && imc < 30){
        return "Está acima do Peso";
       }else if( imc > 30 && imc < 40){
        return "Está Obseso";
       }else{
        return "Obesidade fora de estatística";
       }
    }
}

jose = new Pessoa("José", 70, 1.69);

console.log(jose.calcularIMC().toFixed(2) + " " + jose.separarIMC());