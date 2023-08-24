class Estudante {
    nome: string;
    idade: number;
    notas: number[];

    constructor(nome: string, idade: number, notas: number[]){
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
    }
    Media(media: number){
        let msgMedia = this.nome + 'sua média é ' + media + ' e você precisa estudar mais para melhorar seu desempenho.'; 
    if(media >= 7)
    {
        msgMedia = 'Parabéns, ' + this.nome + '! Sua média é ' + media + ' e você está aprovado(a).'; 
    }
    return msgMedia;
    }

    Notas(){
        console.log("");
        for(let i=0; i<=this.notas.length; i++){
            console.log(this.notas[i]);
        }
    }
}
let Maria = new Estudante("Maria", 20, []);
console.log(Maria.Media((8 + 7.5 + 9.2 + 6.8 + 9.5)/5));