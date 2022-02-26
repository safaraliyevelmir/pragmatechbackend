let sendbox__name = document.querySelector(".sendbox__name input");
let sendbox__surname = document.querySelector(".sendbox__surname input");
let sendbox__email =document.querySelector(".sendbox__email input");
let sendbox__number = document.querySelector(".sendbox__number input");

let sendbox__textarea= document.querySelector(".sendbox-textarea textarea")
let sendbox__name__bg__border =document.querySelectorAll(".sendbox__name span")
let sendbox__surname__bg__border =document.querySelectorAll(".sendbox__surname span")
let sendbox__email__bg__border =document.querySelectorAll(".sendbox__email span")
let sendbox__number__bg__border =document.querySelectorAll(".sendbox__number span")
let sendbox__textarea__bg__border =document.querySelectorAll(".sendbox-textarea span")
let sendbox__submit = document.querySelector(".sendbox-submit") 
sendbox__name.addEventListener('focusout', function(){
  
  if (sendbox__name.checkValidity()==true){
    for(let borderindex=0; borderindex < 4;borderindex++){
      
    sendbox__name__bg__border[borderindex].style.backgroundColor="#41E063";
    sendbox__name__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
  }}
  else{
    for(let borderindex=0; borderindex<4;borderindex++){
      sendbox__name__bg__border[borderindex].style.backgroundColor="red"
      sendbox__name__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
  }}

  sendbox__name.addEventListener("focus",()=>{

  
    if(sendbox__name.checkValidity()==true){
      
      for(let borderindex=0; borderindex<4;borderindex++){
        
        sendbox__name__bg__border[borderindex].style.backgroundColor="#41E063";
        sendbox__name__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
        
      }
      
    }
    else{
      for(let borderindex=0; borderindex<4;borderindex++){
      sendbox__name__bg__border[borderindex].style.backgroundColor="red";
      sendbox__name__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);}
    }
})


  
}); 

sendbox__name.addEventListener("input",()=>{
        if(sendbox__name.checkValidity()==true){
          for(let borderindex=0; borderindex<4;borderindex++){
            sendbox__name__bg__border[borderindex].style.backgroundColor="#41E063"
            sendbox__name__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
            
          }
        }
        else{
          for(let borderindex=0; borderindex<4;borderindex++){
          sendbox__name__bg__border[borderindex].classList.remove(`bg__border__animation_${borderindex + 1}`)
         
          
        }}

})

// surnameform validation

sendbox__surname.addEventListener('focusout', function(){
  
  if (sendbox__surname.checkValidity()==true){
    for(let borderindex=0; borderindex < 4;borderindex++){
      
        sendbox__surname__bg__border[borderindex].style.backgroundColor="#41E063";
        sendbox__surname__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
  }}
  else{
    for(let borderindex=0; borderindex<4;borderindex++){
        sendbox__surname__bg__border[borderindex].style.backgroundColor="red"
        sendbox__surname__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
  }}

  sendbox__surname.addEventListener("focus",()=>{

  
    if(sendbox__surname.checkValidity()==true){
      
      for(let borderindex=0; borderindex<4;borderindex++){
        
        sendbox__surname__bg__border[borderindex].style.backgroundColor="#41E063";
        sendbox__surname__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
        
      }
      
    }
    else{
      for(let borderindex=0; borderindex<4;borderindex++){
        sendbox__surname__bg__border[borderindex].style.backgroundColor="red";
        sendbox__surname__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);}
    }
})


  
}); 

sendbox__surname.addEventListener("input",()=>{
        if(sendbox__surname.checkValidity()==true){
          for(let borderindex=0; borderindex<4;borderindex++){
            sendbox__surname__bg__border[borderindex].style.backgroundColor="#41E063"
            sendbox__surname__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
            
          }
        }
        else{
          for(let borderindex=0; borderindex<4;borderindex++){
            sendbox__surname__bg__border[borderindex].classList.remove(`bg__border__animation_${borderindex + 1}`)
         
          
        }}

})

// emailvalidation
sendbox__email.addEventListener('focusout', function(){
  
  if (sendbox__email.checkValidity()==true){
    for(let borderindex=0; borderindex < 4;borderindex++){
      
        sendbox__email__bg__border[borderindex].style.backgroundColor="#41E063";
        sendbox__email__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
  }}
  else{
    for(let borderindex=0; borderindex<4;borderindex++){
        sendbox__email__bg__border[borderindex].style.backgroundColor="red"
        sendbox__email__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
  }}

  sendbox__email.addEventListener("focus",()=>{

  
    if(sendbox__email.checkValidity()==true){
      
      for(let borderindex=0; borderindex<4;borderindex++){
        
        sendbox__email__bg__border[borderindex].style.backgroundColor="#41E063";
        sendbox__email__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
        
      }
      
    }
    else{
      for(let borderindex=0; borderindex<4;borderindex++){
        sendbox__email__bg__border[borderindex].style.backgroundColor="red";
        sendbox__email__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);}
    }
})


  
}); 

sendbox__email.addEventListener("input",()=>{
        if(sendbox__email.checkValidity()==true){
          for(let borderindex=0; borderindex<4;borderindex++){
            sendbox__email__bg__border[borderindex].style.backgroundColor="#41E063"
            sendbox__email__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
            
          }
        }
        else{
          for(let borderindex=0; borderindex<4;borderindex++){
            sendbox__email__bg__border[borderindex].classList.remove(`bg__border__animation_${borderindex + 1}`)
         
          
        }}

})

// number validation
sendbox__number.addEventListener('focusout', function(){
  
  if (sendbox__number.checkValidity()==true){
    for(let borderindex=0; borderindex < 4;borderindex++){
      
        sendbox__number__bg__border[borderindex].style.backgroundColor="#41E063";
        sendbox__number__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
  }}
  else{
    for(let borderindex=0; borderindex<4;borderindex++){
        sendbox__number__bg__border[borderindex].style.backgroundColor="red"
        sendbox__number__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
  }}

  sendbox__number.addEventListener("focus",()=>{

  
    if(sendbox__number.checkValidity()==true){
      
      for(let borderindex=0; borderindex<4;borderindex++){
        
        sendbox__number__bg__border[borderindex].style.backgroundColor="#41E063";
        sendbox__number__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
        
      }
      
    }
    else{
      for(let borderindex=0; borderindex<4;borderindex++){
        sendbox__number__bg__border[borderindex].style.backgroundColor="red";
        sendbox__number__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);}
    }
})


  
}); 

sendbox__number.addEventListener("input",()=>{
        if(sendbox__number.checkValidity()==true){
          for(let borderindex=0; borderindex<4;borderindex++){
            sendbox__number__bg__border[borderindex].style.backgroundColor="#41E063"
            sendbox__number__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
            
          }
        }
        else{
          for(let borderindex=0; borderindex<4;borderindex++){
            sendbox__number__bg__border[borderindex].classList.remove(`bg__border__animation_${borderindex + 1}`)
         
          
        }}

})

// textareavalidation
sendbox__textarea.addEventListener('focusout', function(){
       
  if (sendbox__textarea.checkValidity()==true){
    for(let borderindex=0; borderindex < 4;borderindex++){
      
    sendbox__textarea__bg__border[borderindex].style.backgroundColor="#41E063";
    sendbox__textarea__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
  }}
  else{
    for(let borderindex=0; borderindex<4;borderindex++){
        sendbox__textarea__bg__border[borderindex].style.backgroundColor="red"
        sendbox__textarea__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
  }}

  sendbox__textarea.addEventListener("focus",()=>{

  
    if(sendbox__textarea.checkValidity()==true){
      
      for(let borderindex=0; borderindex<4;borderindex++){
        
        sendbox__textarea__bg__border[borderindex].style.backgroundColor="#41E063";
        sendbox__textarea__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
        
      }
      
    }
    else{
      for(let borderindex=0; borderindex<4;borderindex++){
        sendbox__textarea__bg__border[borderindex].style.backgroundColor="red";
        sendbox__textarea__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);}
    }
})


  
}); 

sendbox__textarea.addEventListener("input",()=>{
        if(sendbox__textarea.checkValidity()==true){
          for(let borderindex=0; borderindex<4;borderindex++){
            sendbox__textarea__bg__border[borderindex].style.backgroundColor="#41E063"
            sendbox__textarea__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
            
          }
        }
        else{
          for(let borderindex=0; borderindex<4;borderindex++){
            sendbox__textarea__bg__border[borderindex].classList.remove(`bg__border__animation_${borderindex + 1}`)
         
          
        }}

})

