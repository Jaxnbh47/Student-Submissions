const submissions = [
  { name: "Jane", score: 95, date: "2020-01-24", passed: true },
  { name: "Joe", score: 77, date: "2018-05-14", passed: true },
  { name: "Jack", score: 59, date: "2019-07-05", passed: false },
  { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];
//question can you use this instead of new
//might have question on how hes creating an object and then pushing
function addSubmission(array, newName, newScore, newDate) {
  let newSubmission;
  if (newScore >= 60) {
    newPassed = true;
  } else {
    newPassed = false;
  }
  array.push({
    name: newName,
    score: newScore,
    date: newDate,
    passed: newPassed,
  });
}

function deleteSubmissionByIndex(array, index) {
  submissions.splice(array, index);
}

function deleteSubmissionByName(array, name) {
  submissions.indexOf(array, name);
  submissions.splice(array, name);
}

function editSubmission(array, index, score) {
  array[index].score = score;
  array[index].passed = score >= 60;
}

function findSubmissionByName(array, name) {
  return array.find((submissions) => {
    return name === submissions.name;
  });
}

function findLowestScore(array) {
  let lowest = array[0];

  array.forEach((value) => {
    if (value.score < lowest.score) {
      lowest = value;
    }
  });

  return lowest;
}

function findAverageScore(array) {
  let n = 0;

  for (const value of array) {
    n += value.score;
  }

  return n / submissions.length;
}

