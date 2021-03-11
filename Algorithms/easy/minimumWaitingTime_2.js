function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);

  let totalWatingTime = 0;
  for (let idx = 0; idx < queries.length; idx++) {
    const duration = queries[idx];
    const queriesLeft = queries.length - (idx + 1);
    totalWatingTime += duration * queriesLeft;
  }

  return totalWatingTime;
}

const result = minimumWaitingTime([3, 2, 1, 2, 6]);
console.log(result);

// 0 + 3 + (3+2) + (3+2+1) + (3+2+1+2)

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
