"use strict";
class Funcionario {
    constructor(nome, cargo, salario, inss, ir) {
        this.inss = 11;
        this.ir = 7.5;
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        this.inss = inss;
        this.ir = ir;
    }
    perfil() {
        return "Olá " + this.nome + " que trabalha de " + this.cargo + " seu salario é de R$ " + this.salario;
    }
    calcularAumento(aumento) {
        this.salario = this.salario * aumento / 100 + this.salario;
        return "Aumento de " + aumento + "% aplicado. Novo salário: R$" + this.salario;
    }
    calcularImpostos() {
        this.ir = this.salario * this.ir / 100;
        this.inss = this.salario * this.inss / 100;
        return "Funcionário:" + this.nome + " da empresa XPTO," + this.cargo + ", Salário Bruto R$" + this.salario +
            ", Impostos a serem pagos R$" + (this.inss + this.ir) + ", Salário Liquido R$" + (this.salario - this.inss - this.ir);
    }
}
let Ana = new Funcionario("Ana Silva", "Analista de Vendas", 3000.00, 11, 7.5);
console.log(Ana.perfil());
console.log(Ana.calcularAumento(10));
console.log(Ana.calcularImpostos());
console.log(".");
console.log(".");
console.log(".");
let Dorothy = new Funcionario("Dorothy", "Desing", 5000.00, 11, 7.5);
console.log(Dorothy.perfil());
console.log(Dorothy.calcularAumento(10));
console.log(Dorothy.calcularImpostos());
