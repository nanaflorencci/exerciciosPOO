"use strict";
var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana["Segunda"] = "Segunda-feira";
    DiasDaSemana["Terca"] = "Ter\u00E7a-feira";
    DiasDaSemana["Quarta"] = "Quarta-feira";
    DiasDaSemana["Quinta"] = "Quinta-feira";
    DiasDaSemana["Sexta"] = "Sexta-feira";
    DiasDaSemana["S\u00E1bado"] = "S\u00E1bado";
    DiasDaSemana["Domingo"] = "Domingo";
})(DiasDaSemana || (DiasDaSemana = {}));
let diaHoje = DiasDaSemana.Terca;
//console.log("Hoje é " + DiasDASemana[diaHoje]);
console.log("Hoje é " + diaHoje);
