(function($) {

    var slide = function(ele,options) {
        var $ele = $(ele);
        var setting = {
            speed: 1000,
            interval: 5000,
            
        };
        $.extend(true, setting, options);
        var states = [
            // { $zIndex: 1, width: 146, height: 242, top: 69, left: 134, $opacity: 0.2 },
            // { $zIndex: 2, width: 156, height: 262, top: 59, left: 0, $opacity: 0.4 },
            // { $zIndex: 3, width: 196, height: 310, top: 35, left: 110, $opacity: 0.7 },
            // { $zIndex: 4, width: 300, height: 380, top: 0, left: 263, $opacity: 1 },
            // { $zIndex: 3, width: 196, height: 310, top: 35, left: 470, $opacity: 0.7 },
            // { $zIndex: 2, width: 156, height: 262, top: 59, left: 620, $opacity: 0.4 },
            // { $zIndex: 1, width: 146, height: 242, top: 69, left: 500, $opacity: 0.2 }
            { $zIndex: 1, width: 350, height: 250, top: 69, left: 134, $opacity: 0.2 },
            { $zIndex: 2, width: 350, height: 300, top: 59, left: -60, $opacity: 0.4 },
            { $zIndex: 3, width: 350, height: 350, top: 35, left: 80, $opacity: 0.7 },
            { $zIndex: 4, width: 350, height: 400, top: 0, left: 263, $opacity: 1 },
            { $zIndex: 3, width: 350, height: 350, top: 35, left: 450, $opacity: 0.7 },
            { $zIndex: 2, width: 350, height: 300, top: 59, left: 600, $opacity: 0.4 },
            { $zIndex: 1, width: 350, height: 250, top: 69, left: 500, $opacity: 0.2 }
        ];
        
        var $lis = $ele.find('li');
        var timer = null;
        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.find('.hi-slide').on('click', function() {
            next();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('.card').css('opacity', state.$opacity);
            });
        }
        function next() {
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        return this;
    }
})(jQuery);
