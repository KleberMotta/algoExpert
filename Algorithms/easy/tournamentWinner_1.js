function tournamentWinner(competitions, results) {
  // Write your code here.
  let score = {};
  let winner = { "name": "", "points": 0 };

  for (i = 0; i < competitions.length; i++) {
    const [homeT, awayT] = competitions[i];
    isNaN(score[homeT]) ? score[homeT] = 0 : NaN;
    isNaN(score[awayT]) ? score[awayT] = 0 : NaN;
    if (results[i] == 1) {
      score[homeT] += 3;
      if (score[homeT] > winner.points) {
        winner.name = homeT;
        winner.points = score[homeT];
      }
    } else {
      score[awayT] += 3;
      if (score[awayT] > winner.points) {
        winner.name = awayT;
        winner.points = score[awayT];
      }
    }
  }

  return winner.name;
}

const result = tournamentWinner(
  [
    ["A", "B"]
  ],
  [0]
);
console.log(result);

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
