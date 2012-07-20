/*!
 * jQuery hoverGrid Plugin
 * https://github.com/carlwoodhouse/jquery.hoverGrid
 *
 * Copyright 2012, Carl Woodhouse, Mark Searle
 */
 
(function( $ ){
  $.fn.hoverGrid = function( options ) {  
	var settings = $.extend( {
      'itemClass' : '.item',
	  'zoom' : 0,
	  'move' : 0
    }, options);
  
    return this.each(function() {       
		var hoverGrid = $(this);
		hoverGrid.addClass('hover-grid');
		hoverGrid.find(settings.itemClass).addClass('hover-grid-item');
		
		var hoverZoom = settings.zoom;
		var hoverMove = settings.move;
		var item = hoverGrid.find(settings.itemClass);
		var itemOriginalWidth = item.width();
		var itemOriginalHeight = item.height();
		var doHoverZoom = (zoom != 0 && move != 0)
		var itemWidth = item.width() * hoverZoom;
		var itemHeight = item.height() * hoverZoom;

		$(hoverGrid).find(settings.itemClass).hover(function () {
			if(doHoverZoom)
			{
				$(this).find('img').stop(false, true).stop().animate({ 'width': itemWidth, 'height': itemHeight, 'top': hoverMove, 'left': hoverMove }, { duration: 200 });
			}

			//Display the caption
			$(this).find('div.caption').stop(false, true).fadeIn(200);
		},
        function () {
            if(doHoverZoom)
			{
				$(this).find('img').stop(false, true).stop().animate({ 'width': itemOriginalWidth, 'height': itemOriginalHeight, 'top': '0', 'left': '0' }, { duration: 100 });
			}

            //Hide the caption
            $(this).find('div.caption').stop(false, true).fadeOut(200);
        });
    });
  };
})( jQuery );

