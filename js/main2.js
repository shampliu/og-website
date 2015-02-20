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
			hiddenStyle : {
		    	opacity: 0,
		    	scale : 1
			}			
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
	
	// if(!isMobile()) {
	// 	$(".project.small a").hover(
	// 		function() {
	// 			$(this).find('.overlay').stop().fadeTo("fast", .9);
	// 			$(this).find('.description').stop().fadeTo("fast", 1);
	// 			$(this).find('img:last').attr('title','');	
	// 		},
	// 		function() {
	// 			$(this).find('.overlay').stop().fadeTo("fast", 0);	
	// 			$(this).find('.description').stop().fadeTo("fast", 0);	
	// 		});	
	// }
		
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
	if (gridContainer.width() <= 400) {
		columns = 1;
	} 
	else { 
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

	// relocateElements();
	$(window).bind("debouncedresize", function() {
	// $(window).smartresize(function(){
		gridResize();
	});		
});