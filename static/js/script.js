$(document).ready(function(){
    $('.sidenav').sidenav();
  });

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });

  
  $('#textarea1').val('New Text');
  M.textareaAutoResize($('#textarea1'));

  $(document).ready(function(){
    $('.datepicker').datepicker({
      format: "dd mmmm, yyyy",
      yearRange: 3,
      showClearBtn: true,
      i18n: {
        done: "Select"
      }
    });
  });

  $(document).ready(function(){
    $('select').formSelect();
  });
