 "use strict";
 $(document).ready(function() {

   /*global times*/
   var timer;
   var move;
   (function() {
     //elements that use times
     var elements = {
       noun: $(".moving")
     };
     console.log(elements);
     console.log('elementsjs loaded');
     var times = {
       timer: 0,
       move: 0,
       animate: setInterval(function glide() {
         var maxNum = 10;
         var minNum = 1;

         parseInt(minNum, 10);
         parseInt(maxNum, 10);
         var ran = (Math.ceil(Math.random() * (maxNum - minNum)) + minNum);
         var color = ['yellow', 'red', 'blue', 'pink', 'green'];

         if (timer < 100) {
           console.log('ran ' + ran);
           parseInt(timer + 100, 500);
           console.log('adding timer ' + timer);
           parseInt(move + 5, 10);
           $('.moving').css("margin-left", "+=" + ran + "%");
           $('.moving').css("color", color[timer]);
           console.log('ran is here ' + ran);
           timer++;
         }
         else {
           parseInt(timer = 0, 5);
           elements.noun.css("left", ran + '%');
           if (ran > 10) {
             ran = 0;
          }
         } //end if

       }, 4000), //end of interval
    }; //end of times
     times.animate;
     times.creaters;
   })(); //end of self
   console.log('times.js loaded');


 }); //end of readyA
