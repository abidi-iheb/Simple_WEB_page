let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector("header").classList.remove("scroll-down");
  } else {
    document.querySelector("header").classList.add("scroll-down");
  }
  prevScrollPos = currentScrollPos;
};
$(document).ready(function() {
	$('#panier').click(function() {
		$('#sidebar').toggleClass('show');

	});
  $('#close-btn').click(function() {
    $('#sidebar').removeClass('show');
  });
});

function updatetotal(){
  var cartContetnt = document.getElementsByClassName('cart-content')[0]
  var cartBoxes = cartContetnt.getElementsByClassName('cart-box')
  for (var i= 0;i < cartBoxes.length;i++){
    var cartBoxes=cartBoxes[i]
    var priceElement = cartBoxes.getElementsByClassName('cart-price')[0]
    var quantityElement= cartBoxes.getElementsByClassName('cart-quantity')[0]
    var price = parseFloat (priceElement.innertext.replace('dt',""))
    var quantity=quantityElement.value
    total =total +(price*quantity);
    document .getElementById('total-price')[0].innertext='dt' + total;
  }

}
function quantitychanged(envent){
  var input = envent .target 
  if (isNaN(input.value)|| input.value <=0){
    input.value=1;
  }
  updatetotal();
}





