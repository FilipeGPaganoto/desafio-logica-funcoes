let playerWins = 1000;
let playerLosses = 899

let playerBalance = getPlayerBalanceBetweenWinsAndLosses(playerWins, playerLosses);
let playerRank = getPlayerRank(playerBalance);

function getPlayerBalanceBetweenWinsAndLosses(wins, losses) {
    balance = wins - losses;

    return balance;
}

function getPlayerRank(balance) {
    let playerRank;

    if (balance <= 10) {
        playerRank = "Ferro";
    } else if ((balance >= 11) && (balance <= 20)) {
        playerRank = "Bronze";
    } else if ((balance >= 21) && (balance <= 50)) {
        playerRank = "Prata";
    } else if ((balance >= 51) && (balance <= 80)) {
        playerRank = "Ouro";
    } else if ((balance >= 81) && (balance <= 90)) {
        playerRank = "Diamante";
    } else if ((balance >= 91) && (balance <= 100)) {
        playerRank = "Lendário";
    } else if (balance >= 101) {
        playerRank = "Imortal";
    } else {
        playerRank = "|[ERROR] INVALID RANK|";
    }

    return playerRank
}

console.log(`O Herói tem um de saldo ${playerBalance} e está no nível ${playerRank}`);