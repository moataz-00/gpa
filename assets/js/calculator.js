var row =
  "<tr>  data-scroll-reveal='enter right move 30px over 0.6s after 0.4s'><td> <input id='inputTask' type='text' class='form-control' placeholder='course'></td> <td><div class='input-group mb-3'><select  class='form-control form-control-sm'><option selected>grades</option><option value='1'>A+</option><option value='2'>A</option><option value='3'>A-</option><option value='1'>B+</option><option value='2'>B</option><option value='3'>B-</option><option value='1'>C+</option><option value='2'>C</option><option value='3'>C-</option><option value='1'>D+</option><option value='2'>D</option><option value='3'>Fail</option></select></div></td>     <td><input id='inputTask' type='text' class='form-control' placeholder='credits'></td> <td><i class='bx bx-edit-alt' style='color:#44a455'  ></i></td> <td><i class='remove bx bxs-trash-alt' style='color:#ff0000'  ></i></td> </tr>";

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


