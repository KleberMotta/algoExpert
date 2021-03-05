/*
  AlgotExpert solutions is way cleaner than mine
  
  Note: use subroutines and express code execution in a more legible way
*/

const HOME_TEAM_WON = 1;

// O(n) t | O(k) s - n is the number of competitions and k the number of teams
function tournamentWinner(competitions, results) {
  let currentBestTeam = '';
  const scores = { [currentBestTeam]: 0 };

  for (let idx = 0; idx < competitions.length; idx++) {
    const result = results[idx];
    const [homeTeam, awayTeam] = competitions[idx];

    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }

  return currentBestTeam;
}

function updateScores(team, points, scores) {
  if (!(team in scores)) scores[team] = 0;
  scores[team] += points;
};

const result = tournamentWinner(
  [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
    ["C#", "Python"],
    ["Java", "C#"],
    ["C#", "HTML"],
    ["SQL", "C#"],
    ["HTML", "SQL"],
    ["SQL", "Python"],
    ["SQL", "Java"]
  ],
  [0, 0, 0, 0, 0, 0, 1, 0, 1, 1]
);
console.log(result);

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
