$(function(){
    $('div.social').hide();
        $('.social1').on('click', function(){
            $('div.social').show();
        });
}); 
$(function(){
    $('div.malware').hide();
        $('.malware1').on('click', function(){
            $(' div.malware').show();
        });
}); 
$(function(){
    $('div.email').hide();
        $('.email1').on('click', function(){
            $(' div.email').show();
        });
}); 
$(function(){
    $('div.password').hide();
        $('.password1').on('click', function(){
            $(' div.password').show();
        });
}); 
$(function(){
    $('div.targeted').hide();
        $('.targeted1').on('click', function(){
            $(' div.targeted').show();
        });
}); 
$(function(){
    $('div.mobile').hide();
        $('.mobile1').on('click', function(){
            $(' div.mobile').show();
        });
}); 
$(function(){
    $('div.browsing').hide();
        $('.browsing1').on('click', function(){
            $(' div.browsing').show();
        });
}); 
$(function(){
    $('div.network').hide();
        $('.networks1').on('click', function(){
            $(' div.network').show();
        });
}); 
$(function(){
    $('div.hacked').hide();
        $('.hacked1').on('click', function(){
            $(' div.hacked').show();
        });
}); 
$(function(){
    $('div.data').hide();
        $('.data1').on('click', function(){
            $(' div.data').show();
        });
}); 




$('.thevideo').hover(function toggleControls() {
    if (this.hasAttribute("controls")) {
        this.removeAttribute("controls")
    } else {
        this.setAttribute("controls", "controls")
    }
})