
$('#data').hide()
$('.store').hide()
$('.in').hide()
$('#click').click(function(){
   $('.store').toggle('slow')
})

$('.input1').click(function(){
   $('.store').toggle('slow')
   $('#p1').hide('fast')
   $('h1').hide('fast')
   $('.in').show('slow')
   console.log($('.inputOfbox').val())
})

var data="" 

// //   var arr =["firstName : " + $('#fname').val()," lastName : " +  $('#lname').val()]
// //   $("body").append("<ul></ul>");
// //   for (var i = 0; i < arr.length; i++) {
// //    $("ul").append("<li>" + arr[i] + "</li>");
// //  }
// //    console.log(arr)

$('.input2').click(function(){
     document.getElementById("data").textContent = "firstName : " + $('#fname').val() + "\n " +" lastName : " + "\n " + $('#lname').val() + " \n" + "Address :"+ $("#address").val() + "\n " + "e-mail address :" + $("#address").val()
 $('#data').show()
data= $('#fname').val() + " " + $('#lname').val() + " " + $("#address").val() +  " " + $("#add").val()
 localStorage.setItem($('#fname').val(), data);
})

localStorage.setItem($('#fname').val , data)
// // // var h=  localStorage.setItem("")

// // var arr = [1, 2, 3, 4];

// // ​
// // for (var i = 0; i < arr.length; i++) {
// //   $("ul").append("<li>" + arr[i] + "</li>");
// }

 
