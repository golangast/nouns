$(document).ready(function() {
 
     //globals
    var timer;
    var bloom;
    (function() {
        //elements that use times
        var elements = {
            cloud: $(".form1"),
            flower: $(".bloom"),
            rans: $("#ran"),
        };
        console.log(elements);
        console.log('elementsjs loaded');
        var times = {
            timer: 0,
            bloom: 0,
            ran: Math.random(),
            animate: setInterval(function glide() {
                var ran = Math.random();
                if (timer < 100) {
                    parseInt(timer + 100, 500);
                    parseInt(bloom + 5, 10);
                    elements.cloud.css("left", timer + '%');
                    elements.cloud.css("top", ran + '%');
                    elements.cloud.css("height", ran + 'px');
                    elements.flower.css("height", ran + 'px');
                    timer++;
                }
                else {
                    parseInt(timer = 0, 5);
                    elements.cloud.css("left", timer + '%');
                } //end if
            }, 100), //end of interval
            random: function() {
                elements.rans.val = 'new value';
                return elements.rans;
            }
        }; //end of times

        console.log(times.animate());

    })(); //end of self
    console.log(times);
    console.log('times.js loaded');
 
 
 
  (function() {
        //testing
        console.log(times.ran);
         console.log(times.random);
        times.random();
        console.log(va);
    })(); //end of self
}); //end of readyA