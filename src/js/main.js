// init Isotope
var $grid = $('.collection-list').isotope({
    // options
    filter:'.men'
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    resetFilterBtns();
    $(this).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
  });

  var filterBtns=$(".filter-button-group").find("button");

  function resetFilterBtns(){
    filterBtns.each(function(){
        $(this).removeClass("active-filter-btn");
    })
  }


//   

$('.filter-button-group').on( 'click', 'a', function() {
    var filterValue = $(this).attr('data-filter');
    resetFilterAnchor();
    var buttonId=$(this).attr('href');
    $($(this).attr('href')).addClass('active-filter-btn');
    // console.log(buttonId);
    // $(#buttonId).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
  });

  var filterBtns=$(".filter-button-group").find("button");

  function resetFilterAnchor(){
    filterBtns.each(function(){
        $(this).removeClass("active-filter-btn");
    })
  }

  $("#offcanvasNavbar a").click(function(){
    $('.offcanvas').offcanvas('hide');
});








































































































































