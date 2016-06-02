// BACK END //



// FRONT END //
$(document).ready(function() {
  $("#prompt form").submit(function(event) {
    var ei = $("#ei").val();
    var sn = $("#sn").val();
    var tf = $("#tf").val();
    var jp = $("#jp").val();

    $("#estj, #estp, #esfj, #esfp, #entj, #entp, #enfj, #enfp, #istj, #istp, #isfj, #isfp, #intj, #intp, #infj, #infp, #meredith, #oscar").hide();

    if (ei === "e" && sn === "s" && tf === "t" && jp === "j") {
      $("#estj").show();
    }

    if (ei === "e" && sn === "s" && tf === "t" && jp === "p") {
      $("#estp").show();
    }

    if (ei === "e" && sn === "s" && tf === "f" && jp === "j") {
      $("#esfj").show();
    }

    if (ei === "e" && sn === "s" && tf === "f" && jp === "p") {
      $("#esfp").show();
    }

    if (ei === "e" && sn === "n" && tf === "t" && jp === "j") {
      $("#entj").show();
    }

    if (ei === "e" && sn === "n" && tf === "t" && jp === "p") {
      $("#entp").show();
    }

    if (ei === "e" && sn === "n" && tf === "f" && jp === "j") {
      $("#enfj").show();
    }

    if (ei === "e" && sn === "n" && tf === "f" && jp === "p") {
      $("#enfp").show();
    }

    if (ei === "i" && sn === "s" && tf === "t" && jp === "j") {
      $("#istj").show();
    }

    if (ei === "i" && sn === "s" && tf === "t" && jp === "p") {
      $("#istp").show();
    }

    if (ei === "i" && sn === "s" && tf === "f" && jp === "j") {
      $("#isfj").show();
    }

    if (ei === "i" && sn === "s" && tf === "f" && jp === "p") {
      $("#isfp").show();
    }

    if (ei === "i" && sn === "n" && tf === "t" && jp === "j") {
      $("#intj").show();
    }

    if (ei === "i" && sn === "n" && tf === "t" && jp === "p") {
      $("#intp").show();
    }

    if (ei === "i" && sn === "n" && tf === "f" && jp === "j") {
      $("#infj").show();
    }

    if (ei === "i" && sn === "n" && tf === "f" && jp === "p") {
      $("#infp").show();
    }


    event.preventDefault();
    });

    $("#meredith-btn").click(function(){
      $("#estj, #estp, #esfj, #esfp, #entj, #entp, #enfj, #enfp, #istj, #istp, #isfj, #isfp, #intj, #intp, #infj, #infp, #meredith, #oscar").hide();
      $("#meredith").show();
    });

    $("#oscar-btn").click(function(){
      $("#estj, #estp, #esfj, #esfp, #entj, #entp, #enfj, #enfp, #istj, #istp, #isfj, #isfp, #intj, #intp, #infj, #infp, #meredith, #oscar").hide();
      $("#oscar").show();
    });
});
