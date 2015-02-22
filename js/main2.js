///////////////////////////////		
// Set Variables
///////////////////////////////

var gridContainer = $('.thumbs');
var colW;
var gridGutter = 0;
var thumbWidth = 308;

///////////////////////////////
// Project Filtering 
///////////////////////////////

function filterInit() {
	$('#filters a').click(function(){
		var selector = $(this).attr('data-filter');	
		console.log(selector);
		$('.thumbs').isotope({
			filter: selector,			
	
		});
	
		// if ( !$(this).hasClass('selected') ) {
		// 	$(this).parents('#filterNav').find('.selected').removeClass('selected');
		// 	$(this).addClass('selected');
		// }
	
		return false;
	});	
}


///////////////////////////////
// Project thumbs 
///////////////////////////////

function isotopeInit() {	
	setColumns();	
	gridContainer.isotope({		
		resizable: false,
		layoutMode: 'fitRows',
		masonry: {
			columnWidth: colW
		}
	});	
	
	$(".item").css("visibility", "visible");	
	// $("#floatingCirclesG").fadeOut("slow");
}

///////////////////////////////
// Isotope Grid Resize
///////////////////////////////

function setColumns()
{	
	var columns;
	if (gridContainer.width() <= 464) {
		columns = 1;
		$('.type').hide();
	} 
	else { 
		$('.type').show();
		columns = Math.ceil(gridContainer.width()/thumbWidth);	
	}
	colW = Math.floor(gridContainer.width() / columns);
	$('.thumbs .item').each(function(id){
		$(this).css('width',colW-gridGutter+'px');
	});
}

function gridResize() {	
	setColumns();
	gridContainer.isotope({
		resizable: false,
		masonry: {
			columnWidth: colW
		}
	});		
}

///////////////////////////////
// Initialize Page
///////////////////////////////	

$(window).load(function(){		
	isotopeInit();	
	filterInit();

	$(window).bind("debouncedresize", function() {
		gridResize();
	});		
});

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
  if ($(".navig").offset().top > 50) {
  	console.log("asdfasd");
    $(".navig").removeClass(".navbar");
    $(".navig").addClass(".navbar2");
    // $(".navbar-brand").css("display", "block");

  } else {
    $(".navig").removeClass(".navbar2");
    $(".navig").addClass(".navbar");
    // $(".navbar-brand").css("display", "none");
	}
});

