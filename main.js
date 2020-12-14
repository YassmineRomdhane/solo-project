$(".form").hide()
$(".imgf").hide()
var arr = ["Daisy", "rose", "Iris", "Narcissus","Orchid","Tulip","sunflower","Cyclamen","carnation","Poppy","Pansy","Violet","Mimossa","Daffodil","lily","hyacinth","Anemone","Gladiolus","forget-me-not","bluebell","boug","buttercup","cactus flower","Camelia","chrysan"];
$("body").append("<ul></ul>");
for (var i = 0; i < arr.length; i++) {
  $(".types").append('<input type="checkbox" name="typeOfFlower" value="Daisy">'+ arr[i] +"<br>");
} 
$('.input1').click(function(){
   $('.types').hide('fast')
   $(".form").show('slow')
})
var name = $("#fname").val()
var order = "name : " + name + "and your order is " +  
$('.myflowers').click(function(){
  $('.imgf').toggle()
})
$('.input2').click(function(){
  alert($("#fname").val())
})
