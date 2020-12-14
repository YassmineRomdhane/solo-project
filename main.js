$(".form").hide()
$(".imgf").hide()
$('#data').hide()
var arr = [ "https://cdn.shopify.com/s/files/1/2048/8041/products/Flower_Drift_Floret-7_700x700.jpg?v=1569518617" , "https://cdn.shopify.com/s/files/1/2048/8041/products/Flower_Drift_Floret-7_700x700.jpg?v=1569518617" ,"https://cdn.shopify.com/s/files/1/2048/8041/products/Flower_Drift_Floret-7_700x700.jpg?v=1569518617" ,"https://cdn.shopify.com/s/files/1/2048/8041/products/Flower_Drift_Floret-7_700x700.jpg?v=1569518617" ,"https://cdn.shopify.com/s/files/1/2048/8041/products/Flower_Drift_Floret-7_700x700.jpg?v=1569518617" ,"https://cdn.shopify.com/s/files/1/2048/8041/products/Flower_Drift_Floret-7_700x700.jpg?v=1569518617" ,"https://cdn.shopify.com/s/files/1/2048/8041/products/Flower_Drift_Floret-7_700x700.jpg?v=1569518617" ,];
$("body").append("<ul></ul>");
for (var i = 0; i < arr.length; i++) {
  $(".types").append('<img id="image" src=' + arr[i] + '/>' );
} 

// var flowers = ["https://i.pinimg.com/originals/35/63/cc/3563ccf3fb0ee7de471f33394b6e6d95.jpg", "https://5.imimg.com/data5/ZR/OO/EA/SELLER-34246236/tulip-flower-500x500.jpg", "https://cdn.shopify.com/s/files/1/2048/8041/products/Flower_Drift_Floret-7_700x700.jpg?v=1569518617","https://5.imimg.com/data5/WH/MA/MY-3674107/orchids-flowers-500x500.jpg","https://images-na.ssl-images-amazon.com/images/I/610ykpFyqSL._SL1000_.jpg","https://www.gardenia.net/storage/app/public/guides/detail/eLtzXyWRxGUO34KrdI1KC2VLSYdQ3AYKA2Cvj3ni.jpeg"];
// $("body").append("<ul></ul>");
// for (var i = 0; i < arr.length; i++) {
//   $(".types").append('<img src="https://i.pinimg.com/originals/35/63/cc/3563ccf3fb0ee7de471f33394b6e6d95.jpg" >');
// } 
// $('.input1').click(function(){
//    $('.types').hide('fast')
//    $(".form").show('slow')
// })
// $('.myflowers').click(function(){
//   $('.imgf').toggle()
// })
var data="" 

$('.input2').click(function(){
//      document.getElementById("data").innerHTML = "firstName : " + $('#fname').val() + " " +" lastName : " + " " + $('#lname').val() + " " + "Address"+ $("#address").val()
//  $('#data').show()
data= $('#fname').val() + " " + $('#lname').val() + " " + $("#address").val()
 localStorage.setItem($('#fname').val(), data);
})


//   data= $('#fname').val + " " + $('#lname').val + " " + $("#address").val
  
// document.getElementById("data").innerHTML = "firstName" + $('#fname').val + " " +"lastName" + " " + $('#lname').val + " " + "Address"+ $("#address").val


// localStorage.setItem($('#fname').val , data)
// var h=  localStorage.setItem("")
