let rank = RankCalc(100, 80);
console.log (rank);

function RankCalc(win, lose){
        let saldo = (win - lose);
        let elo;
         
    if (saldo <= 10) {
    elo = "Ferro";
} else if (saldo >= 11 && saldo <= 20){
    elo = "Bronze";
} else if (saldo >= 21 && saldo <= 50){
    elo = "Prata";
} else if (saldo >= 51 && saldo <= 80){
    elo = "Ouro";
} else if (saldo >= 81 && saldo <= 90){
    elo = "Diamante";
} else if (saldo >= 91 && saldo <= 100){
    elo = "Lendário";
} else {
    elo = "Imortal";
}

return `O Herói tem saldo de ${saldo} está no nível de ${elo}`

}