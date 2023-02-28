var row =
  "<tr>  data-scroll-reveal='enter right move 30px over 0.6s after 0.4s'><td> <input id='inputTask' type='text' class='form-control' placeholder='course'></td>  <td><input  type='text' class='inputTask2 form-control' placeholder='grade'></td>    <td><input id='inputTask' type='text' class='form-control' placeholder='credits'></td> <td><i class='bx bx-edit-alt' style='color:#44a455'  ></i></td> <td><i class='remove bx bxs-trash-alt' style='color:#ff0000'  ></i></td> </tr>";

$(document).ready(function () {
  $(".add_row").click(function () {
    $(".t_0").append(row).fadeIn(3000);
  });

  $(".add_r").click(function () {
    $(".t_1").append(row).fadeIn(3000);
  });

  $(document).on("click", ".remove", function () {
    $(this).parents("tr").remove();
  });
});
let inputTask=document.querySelectorAll("input")
let calculate = document.querySelector("button");
let coursename = document.getElementsByClassName('inputTask1');
let hourse=document.getElementsByClassName('inputTask3');
let grade=document.getElementsByClassName('inputTask2');
let result = document.getElementById("result");

console.log(grade);
console.log(hourse);
console.log(result);
console.log(inputTask);

calculate.onclick = function () {
  // h=inputs[1].value;
  // color=inputs[2].value;
  // m=inputs[3].value;

   
  let /*number of subjects*/ n,
  /*number of hours*/ h,
  hsum = 0;
let sum =0.0,
  /*degree*/ 
  m,
  gsum = 0.0,
  gpa;
  // i=inputs.length
  for (let i = 0; i < grade.length; i++) {
if (grade[i].value >= 93 && grade[i].value <= 100) {
  m = 4.0;
  sum = m * hourse[i].value;
} else if (grade[i].value>= 89 && grade[i].value < 93) {
  m = 3.7;
  sum = m * hourse[i].value;
} else if (grade[i].value >= 84 && grade[i].value < 89) {
  m = 3.3;
  sum = m * hourse[i].value;
} else if (grade[i].value >= 80 && grade[i].value < 84) {
  m = 3.0;
  sum = m * hourse[i].value;
} else if (grade[i].value >= 76 && grade[i].value < 80) {
  m = 2.7;
  sum = m * hourse[i].value;
} else if (grade[i].value >= 73 && grade[i].value < 76) {
  m = 2.3;
  sum = m * hourse[i].value;
} else if (grade[i].value >= 70 && grade[i].value < 73) {
  m = 2.0;
  sum = m * hourse[i].value;
} else if (grade[i].value >= 67 && grade[i].value < 70) {
  m = 1.7;
  sum = m * hourse[i].value;
} else if (grade[i].value >= 64 && grade[i].value < 67) {
  m = 1.3;
  sum = m * hourse[i].value;
} else if (grade[i].value >= 60 && grade[i].value < 64) {
  m = 1.0;
  sum = m * hourse[i].value;
} else {
  m = 0.0;
  sum = m * hourse[i].value;
}

gsum += sum; // gsum is the numertour of mew gpa
// hsum += hourse[i].value;
// console.log(hsum);

  }

  var ghour=0;
  for(var i=0;i<hourse.length;i++){
      if(parseFloat(hourse[i].value))
      ghour += parseFloat(hourse[i].value);
          console.log(ghour);
  }


gpa=gsum/ghour;
let x=  gpa.toPrecision(2);

result.innerHTML=x;

};
console.log(calculate);


