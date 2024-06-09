//-----------------//
$(document).ready(function () {
  $('.cart-icon').click(function () {
      $('.cart').show();
  });
});
// ----------------//
$(document).ready(function(){
  $("#icon2").click(function(){
      $("#loginModal").modal('show');
  });
  $(".close-btn").click(function(){
    $("#loginModal").modal('hide');
})
  $("#loginModal .signup-section a").click(function(e){
      e.preventDefault();
      $("#loginModal").modal('hide');
      $("#id01").modal('show');
  });
  $("#id01 .btn-back-to-login").click(function(e){
      e.preventDefault();
      $("#id01").modal('hide');
      $("#loginModal").modal('show');
  });
});

// ----------------//
$(document).ready(function () {
  $('#carouselExampleDark').carousel({
      interval: 4000,
      ride: 'carousel'
  });
});
// -------------------//
$(document).ready(function() {
  $(".themme-btn").click(function() {
      var parentCard = $(this).closest(".card");

      var title = parentCard.find(".text-center").text().trim();
      var priceText = title.substring(title.lastIndexOf(" ") + 1);
         var price = parseFloat(priceText);
      var cartItem = $("<div class='cart-item'></div>");
      cartItem.append("<p>" + title + "</p>");
      
      cartItem.append("<i class='fa-solid fa-trash cancel-icon'></i>");
      $(".cart-content").append(cartItem);
      
      $(".cart").show();
  });

  $("#close-cart").click(function() {
      $(".cart").hide();
  });
  $(document).on("click", ".cancel-icon", function() {
      $(this).closest(".cart-item").remove();
  });
  $(document).on("click", ".btn-buy", function(){
  alert('Thank You!');
});
});
// -----------------//
$(document).ready(function() {
  function storeUserInfo(email, password) {
      var userInfo = {
          email: email,
          password: password
      };
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }
  $("#loginModal .btn-round").click(function() {
      var email = $("#email1").val().trim();
      var password = $("#password1").val().trim();
      storeUserInfo(email, password);
      alert("User information stored successfully!");
      $("#email1").val('');
      $("#password1").val('');
  });

    $("#signup .btn-round").click(function() {
        var email = $("input[name='email']").val().trim();
        var password = $("input[name='psw']").val().trim();
        var repeatPassword = $("input[name='psw-repeat']").val().trim();
        
        if (password !== repeatPassword) {
            alert("Error : Passwords do not match.");
        } else {
            storeUserInfo(email, password);
            alert("User information stored successfully!");
            $("input[name='email']").val('');
            $("input[name='psw']").val('');
            $("input[name='psw-repeat']").val('');
        }
    });

    $(".btn-back-to-login").click(function() {
        $("#id01").modal("hide");
        $("#loginModal").modal("show");
    });
});