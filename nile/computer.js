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
    if (grade[i].value >= 90 && grade[i].value <= 100) {
        m = 4.00;
        sum = m * hourse[i].value;
      } else if (grade[i].value>= 85 && grade[i].value < 90) {
        m = 3.70;
        sum = m * hourse[i].value;
      } else if (grade[i].value >= 80 && grade[i].value < 85) {
        m = 3.30;
        sum = m * hourse[i].value;
      } else if (grade[i].value >= 75 && grade[i].value < 80) {
        m = 3.00;
        sum = m * hourse[i].value;
      } else if (grade[i].value >= 70 && grade[i].value < 75) {
        m = 2.70;
        sum = m * hourse[i].value;
      } else if (grade[i].value >= 65 && grade[i].value < 70) {
        m = 2.30;
        sum = m * hourse[i].value;
      } else if (grade[i].value >= 62 && grade[i].value < 65) {
        m = 2.00;
        sum = m * hourse[i].value;
      } else if (grade[i].value >= 58 && grade[i].value < 62) {
        m = 1.70;
        sum = m * hourse[i].value;
      } else if (grade[i].value >= 55 && grade[i].value < 58) {
        m = 1.30;
        sum = m * hourse[i].value;
      } else if (grade[i].value >= 50 && grade[i].value < 55) {
        m = 1.00;
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



