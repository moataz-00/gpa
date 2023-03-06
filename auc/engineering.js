var row =
  "<tr><td> <input  type='text' class='inputTask1 form-control' placeholder='course'></td>  <td><input  type='text' class='inputTask2 form-control' placeholder='grade'></td>    <td><input  type='text' class='inputTask3 form-control' placeholder='credits'></td>  <td ><i  class='remove bx bxs-trash-alt' style='color:#ff0000;font-size: x-large;'  ></i></td> </tr>";

  let inputTask=document.querySelectorAll("input");
  let calculate = document.querySelector("button");
  let coursename = document.getElementsByClassName('inputTask1');
  let hourse=document.getElementsByClassName('inputTask3');
  let grade=document.getElementsByClassName('inputTask2');
  let result = document.getElementById("result");
  

$(document).ready(function () {
  $(".add_row").click(function () {
    $(".t_0").append(row)
    
  });

  $(".add_r").click(function () {
    $(".t_1").append(row);
  });

  $(document).on("click", ".remove", function () {
    $(this).parents("tr").remove();
  });
});





console.log(coursename);
console.log(grade);
console.log(hourse);
console.log(result);
console.log(inputTask);





calculate.onclick = function () {
let sum =0.0,
  /*degree*/ 
  m,
  gsum = 0.0,
  gpa;
  // i=inputs.length
  for (let i = 0; i < grade.length; i++) {
    if (grade[i].value >= 94 && grade[i].value <= 100) {
        m = 4.0;
        sum = m * hourse[i].value;
      } else if (grade[i].value>= 90 && grade[i].value < 94) {
        m = 3.7;
        sum = m * hourse[i].value;
      } else if (grade[i].value >= 87 && grade[i].value < 90) {
        m = 3.3;
        sum = m * hourse[i].value;
      } else if (grade[i].value >= 84 && grade[i].value < 87) {
        m = 3.0;
        sum = m * hourse[i].value;
      } else if (grade[i].value >= 80 && grade[i].value < 84) {
        m = 2.7;
        sum = m * hourse[i].value;
      } else if (grade[i].value >= 77 && grade[i].value < 80) {
        m = 2.3;
        sum = m * hourse[i].value;
      } else if (grade[i].value >= 74 && grade[i].value < 77) {
        m = 2.0;
        sum = m * hourse[i].value;
      } else if (grade[i].value >= 70 && grade[i].value < 74) {
        m = 1.7;
        sum = m * hourse[i].value;
      } else if (grade[i].value >= 66 && grade[i].value < 70) {
        m = 1.3;
        sum = m * hourse[i].value;
      } else if (grade[i].value >= 60 && grade[i].value < 66) {
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
if(ghour==0 && gsum==0){
  gpa="ENTER  YOUR  GRADES"
}else{
   gpa=gpa.toPrecision(3);
}


result.innerHTML=gpa;

};



