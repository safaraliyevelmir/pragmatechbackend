// navbarscroll
var header = document.querySelector("header");
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  
            
    var currentScrollPos = window.pageYOffset;
    
    
   

     if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
    
    header.style.transition = "0.5s";
    if(window.pageYOffset < 130){
      
      header.style.backgroundColor="#F5F5F5"
      header.style.position="fixed"
     
    }
      
  
  }
  
  
  
  else {
  header.style.top = "-6.625rem";
  header.style.position= "fixed";
  header.style.backgroundColor= "#F5F5F5";
  if(window.pageYOffset < 130){
    
    header.style.backgroundColor="#F5F5F5"
    header.style.position="fixed"
   
  }
 
  
  }
   prevScrollpos = currentScrollPos;
  

}
