function minimumWaitingTime(queries) {

  let waitingTime = 0;
  let previousTime = 0;

  queries.sort((a, b) => a - b);

  for (i = 0; i < queries.length; i++) {
    waitingTime = waitingTime + previousTime;
    previousTime = previousTime + queries[i];
  }

  return waitingTime;
}

const result = minimumWaitingTime([3, 2, 1, 2, 6]);
console.log(result);

// 0 + 3 + (3+2) + (3+2+1) + (3+2+1+2)

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
