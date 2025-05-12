// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};
// missing if,try,
// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.

  let student_id = [125, 132]
  // how can I store student_id inside my arr
  let arr = []
  for (let i = 0; i < LearnerSubmissions.length; i++) {
    let student_id = LearnerSubmissions[i].learner_id
    arr.push(student_id)

  }
  console.log(arr)

let unique_elements = []
for(let i = 0; i < arr.length; i++) {
  if(unique_elements.indexOf(arr[i]) === -1) 
    unique_elements.push(arr[i])

}
console.log(unique_elements)

let unique_student = []
for(let i = 0; i < unique_elements.length; i++) {
let obj = {id: unique_elements[i]} 
unique_student.push(obj)


}
console.log(unique_student)


// [{id:125},{id:135}]
let new_arr = []
for( let i = 0; i < unique_student.length; i++) {
  let id = unique_student[i].id
  let obj = {
    id: id,
    
  }
  //  filter submissions and keep sutdent specfic assingments 
  let assignments = submissions.filter((assignment)=>{
    return id === assignment.learner_id
  })

  // add the socres to the object
  // loop over the assignments, add the assignment to obj
  let pointsPossibeForAssignment1= AssignmentGroup.assignments[0].points_possible
  let assignmnet1Score = assignments[0]["submission"]["score"]

  let pointsPossibeForAssignment2= AssignmentGroup.assignments[1].points_possible
  let assignmnet2Score = assignments[1]["submission"]['score']
  obj["1"]= assignmnet1Score / pointsPossibeForAssignment1 
  obj["2"]= assignments[1]["submission"]['score']/pointsPossibeForAssignment2
 
  obj.avg = (assignmnet1Score+assignmnet2Score)/(pointsPossibeForAssignment1+pointsPossibeForAssignment2)
 new_arr.push(obj) 
 continue
  // console.log(assignments,'assig',id)
} 
console.log(new_arr)

 










  // loop over assignment and save them into object
  // obj[assignmerid]:score
// unique_student.push(obj)
  
// })
// console.log(unique_student)



  // const result = [
  //   {
  //     id: 125,
  //     avg: 0.985, // (47 + 150) / (50 + 150)
  //     1: 0.94, // 47 / 50
  //     2: 1.0 // 150 / 150
  //   },
  //   {
  //     id: 132,
  //     avg: 0.82, // (39 + 125) / (50 + 150)
  //     1: 0.78, // 39 / 50
  //     2: 0.833 // late: (140 - 15) / 150
  //   }
  // ];

  // return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
