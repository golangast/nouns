"use strict";
$(document).ready(function() {
    var e;
    var b;
    var c;
    var a;
    
  function news(a, b, c){
  return [a, b, c];
}


   b = ['a', 'b', 'c', 4, 5];
   c = [b[1], b[2], b[3]];

   e = news(...c);
console.log('here is e ' + e);
  
    var newobj = class newobj{
      
      constructor (){
       var  be = 'here';

          return console.log(this.be);
      }
      saying(){
          console.log('works');
      }
  };

  
  newobj.saying;
});