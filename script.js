const submissions = [
  { name: "Jane", score: 95, date: "2020-01-24", passed: true },
  { name: "Joe", score: 77, date: "2018-05-14", passed: true },
  { name: "Jack", score: 59, date: "2019-07-05", passed: false },
  { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];

function addSubmission(array, newName, newScore, newDate) {
  array.push({
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  });
}

//addSubmission(submissions, "Jackson", 100, "2022-10-27");
//console.log(submissions)

function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}

// deleteSubmissionByIndex(submissions, 2);
// console.log(submissions)

function deleteSubmissionByName(array, name) {
  submissions.indexOf(array, name);
  submissions.splice(array, name);
}

//deleteSubmissionByName(submissions, "Jack")
//console.log(submissions)

function editSubmission(array, index, score) {
  array[index].score = score;
  array[index].passed = score >= 60;
}

function findSubmissionByName(array, name) {
  return array.find((s) => {
    return name === s.name;
  });
}
//console.log(findSubmissionByName(submissions, "Jill"))
//console.log(findAverageScore(submissions));

function findLowestScore(array) {
  let lowest = array[0];

  array.forEach((value) => {
    if (value.score < lowest.score) {
      lowest = value;
    }
  });
  return lowest;
}

// console.log(findLowestScore(submissions));

function findAverageScore(array) {
  let n = 0; clearInterval

  for (const value of array) {
    n += value.score;
  }

  return n / submissions.length;
}

//console.log(findAverageScore(submissions))

function filterPassing(array) {
  return array.filter((value) => {
    return value.passed;
  });
};

console.log(filterPassing(submissions))

function filter90AndAbove(array) {
  let find = array.filter(function (submissions) {
    return submissions.score >= 90;
  });
  return find;
}
//Test filter90AndAbove = works
//console.log(filter90AndAbove(submissions))

//Extra Challenges****

function createRange(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(`${i}`);
  }
}

// createRange(2, 5)

function countElements(array) {
  
}
