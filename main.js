$(document).ready(function(){

    //Flickr Widget Footer
    $('#rel-photos .flickr').jflickrfeed({
		limit: 18,
		qstrings: {set: '72157625760980704', nsid: '46901927@N06'},
		itemTemplate: '<li>'+
						'<a rel="prettyPhoto[flickr]" href="{{image}}" title="{{title}}">' +
							'<img src="{{image_s}}" alt="{{title}}" />' +
						'</a>' +
					  '</li>'
	}, function(data) {
		$("a[rel^='prettyPhoto']").prettyPhoto();

        $("#rel-photos .flickr li").hover(function () {						 
    	   $(this).find("img").stop(true, true).animate({ opacity: 0.5 }, 300);
        }, function() {
    	   $(this).find("img").stop(true, true).animate({ opacity: 1.0 }, 300);
        });
	});
});