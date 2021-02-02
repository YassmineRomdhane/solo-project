
$('#data').hide()
// $('.store').hide()
$('.in').hide()
$('#click').click(function(){
   $('.store').toggle('slow')
})

$('.input1').click(function(){
   $('.store').toggle('slow')
   $('#p1').hide('fast')
   $('h1').hide('fast')
   $('footer').hide('fast')
   $('.in').show('slow')

   console.log($('.inputOfbox').val())
})

var data="" 


$('.input2').click(function(){
     document.getElementById("data").textContent = "firstName : " + $('#fname').val() + "\n " +" lastName : " + "\n " + $('#lname').val() + " \n" + "Address :"+ $("#address").val() + "\n " + "e-mail address :" + $("#address").val()
 $('#data').show()
data= $('#fname').val() + " " + $('#lname').val() + " " + $("#address").val() +  " " + $("#add").val()
 localStorage.setItem($('#fname').val(), data);
})

localStorage.setItem($('#fname').val , data)



 
