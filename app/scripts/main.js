'use strict';

$(document).ready(function(){
  apps();
});



let apps = function(){

  let data = {
    //initialize all the function
    init : function(){
      this.addhandler();
      this.removeHandler();
      this.strikeHandler();
    },

    // function to add item
    addhandler : function(){
      $('form').on('submit', function(e){
        e.preventDefault();
        let formData = $(this).find('input[type=text]').val();

        if (formData){
          $('.items').find('ul').append(
            `<li>
            <i></i>
            <span class="item">${formData}</span>
            <span class = "option" > x </span>
          </li>`
          );
          $(this).find('input[type=text]').val('');
        }

      });
    },

    // function to remove item
    removeHandler : function(){

      $(document).on('click', '.option', function () {
        $(this).parent('li').remove();
      });

    },

    // function to add item completed list
    strikeHandler : function(){
      $(document).on('click', '.items li', function(){

        $(this).find('.item').animate().toggleClass('strike');
        $(this).find('i').toggleClass('complete');

      });
    }
  };
  return data.init();
};
