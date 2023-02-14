var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementsByClassName("loader")[0].style.display = "none";
  document.getElementsByClassName("outer")[0].style.display = "block";
}
$(document).ready(function () {
  $(".explore_menu").click(function () {
    if ($(".sub_menu_items_explore").hasClass("active")) {
      $(".sub_menu_items_explore").removeClass("active");
    } else {
      $(".sub_menu_items_explore").addClass("active");
    }
  });
  //identityPage
  //add identity popup
  $(".add_btn_tl").click(function () {
    if ($(".trustlevel_spacing").hasClass("active")) {
      $(".trustlevel_spacing").removeClass("active");
    } else {
      $(".trustlevel_spacing").addClass("active");
    }
  });
  $(".close_addId_img,.popup_addIdentity_outerbg,.cancel_btn").click(
    function () {
      $(".trustlevel_spacing").removeClass("active");
      $(".trustlevel_spacing").removeClass("activeEdit");
    }
  );
  //identitypage editpopup
  $(".edit_outer").click(function () {
    if ($(".trustlevel_spacing").hasClass("activeEdit")) {
      $(".trustlevel_spacing").removeClass("activeEdit");
    } else {
      $(".trustlevel_spacing").addClass("activeEdit");
      $(".table_items").removeClass("active");
    }
  });
  // $(".close_edit").click(function() {
  //     $(".trustlevel_spacing").removeClass("activeEdit").css("animation :slideInUp", "animation-duration:0.4s");
  // })
  $(".popup_addIdentity_outerbg").click(function () {
    $(".trustlevel_spacing").removeClass("activeEdit");
  });

  //filterclick popup
  $(".filter_img,.filter_text").click(function () {
    if ($(".trustlevel_spacing").hasClass("activefilter")) {
      $(".trustlevel_spacing").removeClass("activefilter");
    } else {
      $(".trustlevel_spacing").addClass("activefilter");
      $(".trustlevel_spacing").removeClass("active");
    }
  });
  $(".close_filter_img").click(function () {
    $(".trustlevel_spacing").removeClass("activefilter");
  });
  $(".filter_outer_bg").click(function () {
    $(".trustlevel_spacing").removeClass("activefilter");
  });
  //edit delete
  $(".table_3dot_menu").click(function () {
    if ($(".table_items").hasClass("active")) {
      $(".table_items").removeClass("active");
    } else {
      $(this).parent(".table_items").addClass("active");
    }
  });

  $(".commonOuterBg").click(function () {
    $(".table_items").removeClass("active");
  });
  //filter img change
  $(".unchecked_img").click(function () {
    if ($(this).hasClass("unchecked_img")) {
      $(this).addClass("checked_img");
      $(this).removeClass("unchecked_img");
    } else {
      $(this).addClass("unchecked_img");
      $(this).removeClass("checked_img");
    }
  });
  $(".checked_img").click(function () {
    if ($(this).hasClass("checked_img")) {
      $(this).addClass("unchecked_img");
      $(this).removeClass("checked_img");
    } else {
      $(this).addClass("checked_img");
      $(this).removeClass("unchecked_img");
    }
  });
  //dashboardActive
  // $(".dashBoard_menu,.dashBoard").click(function () {
  //   if ($(".dashBoard_menu").hasClass("active")) {
  //     $(".dashBoard_menu").removeClass("active");
  //   } else {
  //     $(".dashBoard_menu").addClass("active");
  //   }
  // });
  //menucurrent active
  // $(".menu_items").click(function() {
  //     if ($(".menu_items").hasClass("activeMenu")) {
  //         $(".menu_items").removeClass("activeMenu");
  //     } else {
  //         $(this).addClass("activeMenu");
  //     }
  // });
  // floating_menu navigation
  $(".statisticsFloating_pg").click(function () {
    if ($(".outer").hasClass("active1")) {
      $(".outer").removeClass("active1");
    } else {
      $(".outer").addClass("active1");
    }
  });
  $(".identities_rules_floating_pg").click(function () {
    if ($(".outer").hasClass("active2")) {
      $(".outer").removeClass("active2");
    } else {
      $(".outer").addClass("active2");
    }
  });
  $(".trustlevel_floating_pg").click(function () {
    if ($(".outer").hasClass("active3")) {
      $(".outer").removeClass("active3");
    } else {
      $(".outer").addClass("active3");
    }
  });
  $(".s_close_icon").click(function () {
    $(".outer").removeClass("active1");
    $(".outer").removeClass("active2");
    $(".outer").removeClass("active3");
  });
  $(".dashboard_floating_pg").click(function () {
    if ($(".outer").hasClass("active4")) {
      $(".outer").removeClass("active4");
    } else {
      $(".outer").addClass("active4");
    }
  });
  $(".close_icon_dashboard").click(function () {
    $(".outer").removeClass("active4");
  });
  $(".apply_btn").on("click", function () {
    if ($(".row1_input").val().trim().length === 0) {
      $(".sub_outer_input1").addClass("active");
      //$(this).parent().parent().siblings().next().find(".outer_input").addClass("active");
    } else {
      $(".sub_outer_input1").removeClass("active");
    }
    if ($(".row2_input").val().trim().length === 0) {
      $(".sub_outer_input2").addClass("active");
    } else {
      $(".sub_outer_input2").removeClass("active");
    }
    if ($(".row4_input").val().trim().length === 0) {
      $(".sub_outer_input4").addClass("active");
    } else {
      $(".sub_outer_input4").removeClass("active");
    }
    if ($(".row5_input").val().trim().length === 0) {
      $(".sub_outer_input5").addClass("active");
    } else {
      $(".sub_outer_input5").removeClass("active");
    }
    if ($(".row6_input").val().trim().length === 0) {
      $(".sub_outer_input6").addClass("active");
    } else {
      $(".sub_outer_input6").removeClass("active");
    }
  });
});
