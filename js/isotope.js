$( function() {
  // init Isotope
  var $container = $('.photos').isotope({
    itemSelector: '.photo',
    layoutMode: 'fitCols'
  });
  
  // bind filter button click
  $('#photoFilters').on( 'click', 'button', function() {
    console.log("penis");
    var filterValue = $( this ).attr('data-filter');
    
    $container.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  
});
