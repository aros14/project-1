// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function init(){
  var button = document.getElementById('signup');

  function setAlert(){
    var inText = document.getElementById('firstname');  
    alert("Hey " + inText.value + ", welcome to the cool kids club!");
  }

  button.addEventListener('click', setAlert);
 }
window.addEventListener('load', init);