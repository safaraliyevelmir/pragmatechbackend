var myswiper = new Swiper(".mySwiper", {
    
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

 


// navbarscroll
var header = document.querySelector("header");
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  
  
      var currentScrollPos = window.pageYOffset;
      
      
     

       if (prevScrollpos > currentScrollPos) {
      header.style.top = "0";
      
      header.style.transition = "0.5s";
      if(window.pageYOffset < 130){
        
        header.style.backgroundColor="unset"
        header.style.position="fixed"
       
      }
        
    
    }
    
    
    
    else {
    header.style.top = "-6.625rem";
    header.style.position= "fixed";
    header.style.backgroundColor= "#333";
    if(window.pageYOffset < 130){
      
      header.style.backgroundColor="unset"
      header.style.position="fixed"
     
    }
   
    
    }
     prevScrollpos = currentScrollPos;
    

}


// form
let form__item=document.querySelectorAll(".form__item")
let form__name = document.querySelector(".form__name")
let form__surname = document.querySelector(".form__surname")
let form__email = document.querySelector(".form__email")
let dropdown = document.querySelector(".dropdown")
let bg__border= document.querySelectorAll(".bg__border")
let name__bg__border = document.querySelectorAll(".form__up .form__item:nth-child(1) > .bg__border")
let surname__bg__border = document.querySelectorAll(".form__up .form__item:nth-child(2) > .bg__border")
let email__bg__border = document.querySelectorAll(".form__down .form__item > .bg__border")
let dropdown__menu__li = document.querySelectorAll(".dropdown-menu li")
let help__label = document.querySelector(".dropdown .label")
let help__submit = document.querySelector(".help .submit")

  form__item[0].addEventListener('focusout', function(){
    if (form__name.checkValidity()==true){
      for(let borderindex=0; borderindex<4;borderindex++){
      name__bg__border[borderindex].style.backgroundColor="#41E063";
      name__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
    }}
    else{
      for(let borderindex=0; borderindex<4;borderindex++){
        name__bg__border[borderindex].style.backgroundColor="red"
        name__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
    }}

    form__name.addEventListener("focus",()=>{
 
    
      if(form__name.checkValidity()==true){
        
        for(let borderindex=0; borderindex<4;borderindex++){
          
          name__bg__border[borderindex].style.backgroundColor="#41E063";
          name__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
          
        }
        
      }
      else{
        for(let borderindex=0; borderindex<4;borderindex++){
        name__bg__border[borderindex].style.backgroundColor="red";
        name__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);}
      }
})

  
    
  }); 

  form__item[0].addEventListener("input",()=>{
          if(form__name.checkValidity()==true){
            for(let borderindex=0; borderindex<4;borderindex++){
              name__bg__border[borderindex].style.backgroundColor="#41E063"
              name__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
              
            }
          }
          else{
            for(let borderindex=0; borderindex<4;borderindex++){
            name__bg__border[borderindex].classList.remove(`bg__border__animation_${borderindex + 1}`)
           
            
          }}

  })

  // input surname----------------------
  form__item[1].addEventListener('focusout', function(){
    if (form__surname.checkValidity()==true){
      for(let borderindex=0; borderindex<4;borderindex++){
      surname__bg__border[borderindex].style.backgroundColor="#41E063";
      surname__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
    }}
    else{
      for(let borderindex=0; borderindex<4;borderindex++){
        surname__bg__border[borderindex].style.backgroundColor="red"
        surname__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
    }}

    form__surname.addEventListener("focus",()=>{
 
    
      if(form__surname.checkValidity()==true){
        
        for(let borderindex=0; borderindex<4;borderindex++){
          
          surname__bg__border[borderindex].style.backgroundColor="#41E063";
          surname__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
          
        }
        
      }
      else{
        for(let borderindex=0; borderindex<4;borderindex++){
        surname__bg__border[borderindex].style.backgroundColor="red";
        surname__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);}
      }
})

  
    
  }); 

  form__item[1].addEventListener("input",()=>{
          if(form__surname.checkValidity()==true){
            for(let borderindex=0; borderindex<4;borderindex++){
              surname__bg__border[borderindex].style.backgroundColor="#41E063"
              surname__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
              
            }
          }
          else{
            for(let borderindex=0; borderindex<4;borderindex++){
            surname__bg__border[borderindex].classList.remove(`bg__border__animation_${borderindex + 1}`)
           
            
          }}

  })

  // input emailname----------------------
  form__item[2].addEventListener('focusout', function(){
    if (form__email.checkValidity()==true){
      for(let borderindex=0; borderindex<4;borderindex++){
      email__bg__border[borderindex].style.backgroundColor="#41E063";
      email__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
    }}
    else{
      for(let borderindex=0; borderindex<4;borderindex++){
        email__bg__border[borderindex].style.backgroundColor="red"
        email__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
    }}

    form__email.addEventListener("focus",()=>{
 
    
      if(form__email.checkValidity()==true){
        
        for(let borderindex=0; borderindex<4;borderindex++){
          
          email__bg__border[borderindex].style.backgroundColor="#41E063";
          email__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
          
        }
        
      }
      else{
        for(let borderindex=0; borderindex<4;borderindex++){
        email__bg__border[borderindex].style.backgroundColor="red";
        email__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);}
      }
})

  
    
  }); 

  form__item[2].addEventListener("input",()=>{
          if(form__email.checkValidity()==true){
            for(let borderindex=0; borderindex<4;borderindex++){
              email__bg__border[borderindex].style.backgroundColor="#41E063"
              email__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
              
            }
          }
          else{
            for(let borderindex=0; borderindex<4;borderindex++){
            email__bg__border[borderindex].classList.remove(`bg__border__animation_${borderindex + 1}`)
           
            
          }}

  })


// //  submit-------------

help__submit.addEventListener("click",(e)=>{
  
        
      
      if(help__label.innerHTML == "Proqramı seçin"){
        
        help__submit.setAttribute("disabled", true);
        document.querySelector(".dropdown").style.backgroundColor="#f2dede";
        help__label.style.color="#af504e";
        removeblock()
      }
      
       
       function removeblock(){if(help__submit.hasAttribute("disabled")){
        setTimeout(() => {
        help__submit.removeAttribute("disabled");
        
    }, 100);}}

   
    
   
   
});
document.querySelector(".dropdown").addEventListener("focus",()=>{
  
    document.querySelector(".dropdown").style.backgroundColor="white";
    help__label.style.color="#C4C4C4";
  
})

// form__help__finished

// /////////////////////////responsive design/////////////////////////////////////////


// ACTIVE
let activescrollContainer = document.querySelector(".active__groups__container");
let item__disabled  =document.querySelectorAll(".item__disabled")

let item__wrapper = document.querySelector(".active__groups__item__wrapper")
let active__item = document.querySelectorAll(".active__groups__item")


// activegroups
  if(window.innerWidth<=990){
    for(let i = 0;i<item__disabled.length;i++){
      item__disabled[i].parentNode.removeChild(item__disabled[i])
      
    }
  }
$('.responsive').slick({
    speed: 300,
    touchThreshold:100,
    infinite:false,
    centerMode: false,
    arrows:true,
     responsive: [
    {
      breakpoint: 9999,
      settings: "unslick"
    },
    {
      breakpoint: 991,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
       
        
      }
    },
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 1.1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
			
// planned

$('.double__responsive').slick({
  speed: 300,
  touchThreshold:100,
  infinite:false,
  centerMode: false,
  arrows:true,
  
   responsive: [
  {
    breakpoint: 9999,
    settings: "unslick"
  },
  {
    breakpoint: 991,
    settings: {
    slidesToShow: 2.2,
    slidesToScroll: 1,
     
      
    }
  },
  {
    breakpoint: 860,
    settings: {
      slidesToShow: 2.2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 700,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 640,
    settings: {
      slidesToShow: 1.4,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 350,
    settings: {
      slidesToShow: 1.1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});
  
// blogposts

$('.blog__responsive').slick({
  speed: 300,
  touchThreshold:100,
  infinite:false,
  centerMode: false,
  arrows:true,
  
   responsive: [
  {
    breakpoint: 9999,
    settings: "unslick"
  },
  {
    breakpoint: 991,
    settings: {
    slidesToShow: 2.8,
    slidesToScroll: 1,
     
      
    }
  },
  {
    breakpoint: 860,
    settings: {
      slidesToShow: 2.5,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 750,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 640,
    settings: {
      slidesToShow: 1.5,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1.3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 390,
    settings: {
      slidesToShow: 1.1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 350,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});


  
  

   

  

  











 


  
  