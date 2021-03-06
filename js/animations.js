var answerShown = false;

var $span;
var fadeSpeed = 800;

$(document).ready(function()
{
  $(".javascriptEnable").remove();
  $(".inputBox[title]").qtip(
  {
    style:
    {
      classes: "hintS",
      //'font-size': "50pt"
    }
  });
  $("#results").hide();
  $(".circle").hide();
  $(".circle1").hide();
  var $btnTxt = $(".btnTxt");

  $btnTxt.append($("<span />",
  {
    text: "Calculate!"
  }));
  $btnTxt.append($("<span />",
  {
    text: "New Values"
  }));
  $span = $("span", $btnTxt).hide();
  $span.eq(0).show();
  // $(".submitBtn").click(function()
  // {

  $(".submitBtn").click(function()
  {
    if (IsEmptyOrSpaces($("#reloadTime").val()) || isNaN(+$("#reloadTime").val()) || $("#reloadTime").val() === "0")
    {
      $("#reloadTime").css("border-color", "red");
    }
    else
    {
      $("#reloadTime").css("border-color", "rgb(100, 100, 100)");
    }
    if (IsEmptyOrSpaces($("#nMod").val()) || isNaN(+$("#nMod").val()))
    {
      $("#nMod").css("border-color", "red");
    }
    else
    {
      $("#nMod").css("border-color", "rgb(100, 100, 100)");
    }
    if (IsEmptyOrSpaces($("#shellDia").val()) || isNaN(+$("#shellDia").val()))
    {
      $("#shellDia").css("border-color", "red");
    }
    else
    {
      $("#shellDia").css("border-color", "rgb(100, 100, 100)");
    }

  });
});

function toggleAnswer()
{
  if (answerShown === false)
  {
    $("#results").slideDown(1000);
    $("#centerInput").slideUp(1000);
    answerShown = true;
    // $btnTxt.text("New Values");
    // $btnTxt.animate(
    // {
    //   width: $span.eq(1).width()
    // });
    $span.stop().fadeOut(fadeSpeed).eq(1).fadeIn(fadeSpeed);
    $(".circle").fadeOut(100);
    $(".circle1").fadeOut(100);
  }
  else
  {
    $("#results").slideUp(1000);
    $("#centerInput").slideDown(1000);
    answerShown = false;
    $span.stop().fadeOut(fadeSpeed).eq(0).fadeIn(fadeSpeed);
  }
}

function showLoading()
{
  $span.fadeOut(200);
  $(".circle").fadeIn(200);
  $(".circle1").fadeIn(200);
}
