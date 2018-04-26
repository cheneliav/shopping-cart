
$('.add-new-product').on('click', function () {
 
   var name = $(this).closest('.form-new-product').find('.new-product').val();
   var price = $(this).closest('.form-new-product').find('.new-price').val();
   var img = $(this).closest('.form-new-product').find('.new-img').val().mozFullPath;


  
   $('.new-product-row').append( '<div class="col-md-4">'+
   '<div class="card-container">'+
     '<div class="card item" item data-name="'+ 
     name +
     '" data-price="'+
     price +
     '">'+
       '<div class="pricebox">'+
         '<p class="price"> $'+
         price +
          '</p>'+
       '</div>'+
'<div class="buybox">'+
'<p class="add-to-cart"> ADD TO CART </p>'+
    '</div>'+
       '<div class="card-inner">'+
         '<img src="'+
        //  img+
        'https://upload.wikimedia.org/wikipedia/commons/c/c3/NGC_4414_%28NASA-med%29.jpg'+
         '" class="proimage">'+
       '</div>'+
     '</div>'+
   '</div>'+
 '</div>')
       
    


 });
 

 