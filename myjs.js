

//global jQuery variables
var $addButton = $('.addButton');
var $proList = $('.Pros');
var $conList = $('.Cons');
var $list = $('.list');


//function to add new item onto Pros or Cons list
var addClick = $addButton.on('click', function(){
  var $newItem = $(this).siblings('input').val();
  
  if ($(this).siblings('input').attr('id') == "proItem"){
    addToPros($newItem);
    $(this).siblings('input').val('');
    displayProTotal();

  } else {
    addToCons($newItem);
    $(this).siblings('input').val('');
    displayConTotal();    
  }      
});


//function to add item by pressing enter key
var addEnter = $("input:text").keypress(function(event){
  if(event.keyCode == 13){
      event.preventDefault();
      $(this).parent().find('input[type="button"]').trigger('click');
  }
});


// function to append a pro item to Pros list
var addToPros = function(item) {
  var itemWrap = '<div id="text" contenteditable="true">'+ item + '</div>';
  $proList.append(
      '<li>' + itemWrap + 
      '<input type="button" class="delete" value="remove"/>' + 
      '</li>'
  );
}; 
  

// function to append a con item to Cons list
var addToCons = function(item) {
  var itemWrap = '<div id="text" contenteditable="true">'+ item + '</div>';
  $conList.append(
    '<li>' + itemWrap + 
    '<input type="button" class="delete" value="remove"/>' + 
    '</li>'
  );
};


// function to remove item and update counter
var removeItem = $('ul').on('click', '.delete', function(){
  var $this = $(this);
  var $parentList = $this.parent().parent();
  $this.parent().remove();

  if ($parentList.hasClass("Pros")) {
    displayProTotal();
  } else {
    displayConTotal();
  }
});


//function to count and display the updated number of pros
var displayProTotal = function(){
  var count = $('.Pros li').length;
  $('#proTotal').text(count);
  displayProTotal;
}; 


//function to count and display the updated number of cons
var displayConTotal = function(){
  var count = $('.Cons li').length;
  $('#conTotal').text(count);
  displayConTotal;
};

	
$(document).ready(function(){
  	addClick();
    addEnter();
    addToPros();
    addToCons();
  	removeItem();
    displayProTotal();
    displayConTotal();
})

