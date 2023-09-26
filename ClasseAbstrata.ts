abstract class Animal{
    private nome: string;
    private patas: number;
    
    constructor(nome: string, patas: number){
        this.nome = nome;
        this.patas = patas;
    }

    abstract FazerBarulho(): void;

    Apresentar(): void{
        console.log("Este é um " + this.nome + "com " + this.patas + "patas.");
    }
}