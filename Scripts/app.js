//IIFE 
//immediately invoked Function Expression

(function(){
   
    function start(){
        console.log("app started");
    }
    //start();
    //window when you finish loading call the function start
    window.onload = start;
})();