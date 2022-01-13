// tab section
let double__main__box = document.querySelector(".double__main__box");
let tabs__header = document.querySelector(".tabs__header")
let main__active = document.querySelector(".main__active")
let wrapper__all =  document.querySelector(".tabs__header .tabs__header__wrapper__all");
let wrapper__active =  document.querySelector(".tabs__header .tabs__header__wrapper__active");
let indicator__item = document.querySelector(".tabs__indicator__wrapper__item");
let firstitem = document.querySelectorAll(".firstitem");
let lastitem = document.querySelectorAll(".lastitem")
let firstbox = document.querySelector(".firstbox")
let dropdown__wrapper__all = document.querySelector(".dropdown__header__wrapper__all")
let dropdown__wrapper__active = document.querySelector(".dropdown__header__wrapper__active")



if(window.innerWidth>990){

  wrapper__active.addEventListener("click",()=>{
   
    if(main__active.style.display=="none"){
      firstitemfunc()
    }
    
  
    function firstitemfunc(){
      indicator__item.style.transform="translateX(-10%)";
      indicator__item.style.left="unset";
      indicator__item.style.right="unset"
      wrapper__all.style.color="rgba(51, 51, 51, 0.5)";
      wrapper__active.style.color="#333333";
      for(i=0;i<firstitem.length;i++){
      firstitem[i].classList.add("tabanimationreduce");
      
      
    }
  
    setTimeout(() => {
      firstbox.style.display="none";
      main__active.style.display="flex";
      
      
      for(i=0;i<lastitem.length;i++){
        lastitem[i].classList.add("tabanimation");
        
  
      };
      for(i=0;i<firstitem.length;i++){
        firstitem[i].classList.remove("tabanimationreduce");
        
      }
  
    },500);
    }
    
  
  })
  
  // secondtab
  
  wrapper__all.addEventListener("click",()=>{
    
    if(firstbox.style.display=="" || firstbox.style.display=="none" ){
      lastitemfunc()
    }
    
    function lastitemfunc(){
     
    indicator__item.style.transform="translateX(335%)"
    indicator__item.style.left="unset";
    indicator__item.style.right="unset"
    wrapper__active.style.color="rgba(51, 51, 51, 0.5)";
    wrapper__all.style.color="#333333";
    
    
    for(i=0;i<lastitem.length;i++){
      lastitem[i].classList.remove("tabanimation")
      lastitem[i].classList.add("tabanimationreduce")
    }
  
    setTimeout(() => {
      firstbox.style.display="flex";
      
      main__active.style.display="none";
      for(i=0;i<firstitem.length;i++){
        firstitem[i].classList.add("tabanimation");
        
        
  
      };
      for(i=0;i<lastitem.length;i++){
        
        lastitem[i].classList.remove("tabanimationreduce");
      }
  
    },500);
  
    }
  })

}


else{
  wrapper__active.addEventListener("click",()=>{
    if(main__active.style.display=="none"){
      firstitemfunc()
    }
    
  
    function firstitemfunc(){
     indicator__item.style.left="3%";
      indicator__item.style.transform="translateX(unset)"
      indicator__item.style.right="unset";
      wrapper__all.style.color="rgba(51, 51, 51, 0.5)";
      wrapper__active.style.color="#333333";
    for(i=0;i<firstitem.length;i++){
      firstitem[i].classList.add("tabanimationreduce");
      
      
    }
  
    setTimeout(() => {
      firstbox.style.display="none";
      main__active.style.display="flex";
      
      
      for(i=0;i<lastitem.length;i++){
        lastitem[i].classList.add("tabanimation");
        
  
      };
      for(i=0;i<firstitem.length;i++){
        firstitem[i].classList.remove("tabanimationreduce");
        
      }
  
    },500);
    }
    
  
  })
  
  // secondtab
  
  wrapper__all.addEventListener("click",()=>{
    
    if(firstbox.style.display=="" || firstbox.style.display=="none" ){
      lastitemfunc()
    }
    
    function lastitemfunc(){
     
    indicator__item.style.right="3%"
    indicator__item.style.left="unset";
    indicator__item.style.transform="translateX(unset)"
    wrapper__active.style.color="rgba(51, 51, 51, 0.5)";
    
   
    wrapper__active.style.color="rgba(51, 51, 51, 0.5)";
    wrapper__all.style.color="#333333";
    
    
    for(i=0;i<lastitem.length;i++){
      lastitem[i].classList.remove("tabanimation")
      lastitem[i].classList.add("tabanimationreduce")
    }
  
    setTimeout(() => {
      firstbox.style.display="flex";
      
      main__active.style.display="none";
      for(i=0;i<firstitem.length;i++){
        firstitem[i].classList.add("tabanimation");
        
        
  
      };
      for(i=0;i<lastitem.length;i++){
        
        lastitem[i].classList.remove("tabanimationreduce");
      }
  
    },500);
  
    }
  })



}

$('.tab__dropdown').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).css('outline', 'none');
  $(this).toggleClass('tab__active');
  $(this).find('.tab__dropdown-menu').slideToggle(300);
});
$('.tab__dropdown').focusout(function () {
  $(this).removeClass('tab__active');
  $(this).find('.tab__dropdown-menu').slideUp(300);
});
$('.tab__dropdown .tab__dropdown-menu li').click(function () {
  $(this).parents('.tab__dropdown').find('span').text($(this).text());
  $(this).parents('.tab__dropdown').find('input').attr('value', $(this).attr('id'));
});




dropdown__wrapper__active.addEventListener("click",()=>{

  if(main__active.style.display=="none"){
    firstitemfunc()
  }
  

  function firstitemfunc(){
   indicator__item.style.left="unset";
    indicator__item.style.transform="translateX(unset)"
    indicator__item.style.right="unset";
    wrapper__all.style.color="rgba(51, 51, 51, 0.5)";
    wrapper__active.style.color="#333333";
  for(i=0;i<firstitem.length;i++){
    firstitem[i].classList.add("tabanimationreduce");
    
    
  }

  setTimeout(() => {
    firstbox.style.display="none";
    main__active.style.display="flex";
    
    
    for(i=0;i<lastitem.length;i++){
      lastitem[i].classList.add("tabanimation");
      

    };
    for(i=0;i<firstitem.length;i++){
      firstitem[i].classList.remove("tabanimationreduce");
      
    }

  },500);
  }
  
   
  

  
})

dropdown__wrapper__all.addEventListener("click",()=>{
  if(firstbox.style.display=="" || firstbox.style.display=="none" ){
    lastitemfunc()
  }
  
  function lastitemfunc(){
   
  indicator__item.style.right="unset"
  indicator__item.style.left="unset";
  indicator__item.style.transform="translateX(unset)"
  wrapper__active.style.color="rgba(51, 51, 51, 0.5)";
  
 
  wrapper__active.style.color="rgba(51, 51, 51, 0.5)";
  wrapper__all.style.color="#333333";
  
  
  for(i=0;i<lastitem.length;i++){
    lastitem[i].classList.remove("tabanimation")
    lastitem[i].classList.add("tabanimationreduce")
  }

  setTimeout(() => {
    firstbox.style.display="flex";
    
    main__active.style.display="none";
    for(i=0;i<firstitem.length;i++){
      firstitem[i].classList.add("tabanimation");
      
      

    };
    for(i=0;i<lastitem.length;i++){
      
      lastitem[i].classList.remove("tabanimationreduce");
    }

  },500);

  }
  

})
