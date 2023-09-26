const pessoa = new class{
    private PrimeiroNome = "Jack";
    private Sobrenome = "Skellington";

    getNomeCompleto(){
        return this.PrimeiroNome + " " + this.Sobrenome;
    }
}
console.log(pessoa.getNomeCompleto());

const TreinadorPessoal = new class{
    private rotina: {nome:string; duracao: number}[] = [];

    adicionarExercicios(nome: string, duracao: number): void{
        this.rotina.push({nome, duracao});
    }

    CalcularTempoTotal(): number{
        //Declarando variável para totalizar duração;
        let soma = 0;
        this.rotina.forEach(item => soma += item.duracao);
        //this.rotina.forEach(item => soma = soma + item.duracao);
        return soma;

        return 0;
    }
}

TreinadorPessoal.adicionarExercicios("Corrida", 30);
TreinadorPessoal.adicionarExercicios("Flexões", 15);
TreinadorPessoal.adicionarExercicios("Agachamentos", 20);

console.log("Tempo total necessário para a rotina: " + TreinadorPessoal.CalcularTempoTotal() + " minutos.")