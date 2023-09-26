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

class Dog extends Animal{
    constructor(){
        super("Cachorro", 4);
    }
    FazerBarulho(): void {
        console.log("O Reginaldo está latindo");
    }
}

class Cat extends Animal{
    constructor(){
        super("Gato", 4);
    }
    FazerBarulho(): void {
        console.log("A namorada do Reginaldo está miando");
    }
}

class Bird extends Animal{
    constructor(){
        super("Pássaro", 2);
    }
    FazerBarulho(): void {
        console.log("O primo do Reginaldo está cantando");
    }
}

const cachorro = new Dog();
cachorro. Apresentar();
cachorro.FazerBarulho();

const gato = new Dog();
gato. Apresentar();
gato.FazerBarulho();

const passaro = new Dog();
passaro. Apresentar();
passaro.FazerBarulho();