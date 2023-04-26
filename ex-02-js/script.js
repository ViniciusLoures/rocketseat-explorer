let students = [
  {
    name: "João",
    firstScore: 8,
    secondScore: 7,
  },
  {
    name: "Leticia",
    firstScore: 7,
    secondScore: 7,
  },
  {
    name: "Diego",
    firstScore: 5,
    secondScore: 1,
  },

  {
    name: "Julia",
    firstScore: 10,
    secondScore: 10,
  },
];

function calculateAverage(firstScore, secondScore){
  return (firstScore + secondScore) / 2
}

students.forEach(student => {
  let average = calculateAverage(student.firstScore, student.secondScore);
  if(average >= 7){
    alert(`The average of the student ${student.name} is ${average}\n
    Congratulations ${student.name}! You have passed in contest!`)
  }
  else {
    alert(`The average of the student ${student.name} is ${average}\n
    Not this time ${student.name}! Try again!` )
  }
});