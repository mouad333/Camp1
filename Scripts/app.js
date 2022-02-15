//IIFE 
//immediately invoked Function Expression

(function(){
   
    function start(){
        // local variable : 
        var title = document.title;
        console.log("app started");
        console.info("----------");
        console.error("this is an error");  
        console.log("title "+title); 
    }
    //start();
    //window when you finish loading call the function start
    window.onload = start;
})();