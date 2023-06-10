let num = 0;
const value = document.querySelector(".value");
const btnEl = document.querySelectorAll(".btn");
console.log(btnEl);

btnEl.forEach((btn) => {
  btn.addEventListener("click", (event)=> { 
    if(btn.classList.contains("btn-dec")){
       num--; 
    }else if(btn.classList.contains("btn-inc")){
      num++;
    }else{
      num = 0;
    } 
    value.textContent = num;
    if(num>0){
      value.style.color = "green"
    }else if(num<0){
      value.style.color = "red"
    }else{
      value.style.color = "black"
    }
  });
});
