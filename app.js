let icon=document.querySelector(".ques i");
let ans=document.querySelector(".ans");
let mainbox=document.querySelector(".user")
let click=0;
mainbox.addEventListener("click",()=>{
   if(click===0){
       ans.style.height="auto";
       ans.style.transition="all ease-in-out 0.2s"
       icon.style.transform="rotate(45deg)";
       click=1;
   }else{
    ans.style.height="0px";
    icon.style.transform="rotate(0deg)";
    click=0;
   }
})
let icon1=document.querySelector(".ques2 i");
let ans1=document.querySelector(".ans2");
let mainbox1=document.querySelector(".user2")
let click1=0;
mainbox1.addEventListener("click",()=>{
   if(click1===0){
       ans1.style.height="auto";
       ans1.style.transition="all ease-in-out 0.2s"
       icon1.style.transform="rotate(45deg)";
       click1=1;
   }else{
    ans1.style.height="0px";
    icon1.style.transform="rotate(0deg)";
    click1=0;
   }
})
let icon3=document.querySelector(".question i");
let ans3=document.querySelector(".answer");
let mainbox3=document.querySelector(".fq")
let click3=0;
mainbox3.addEventListener("click",()=>{
   if(click3===0){
       ans3.style.height="auto";
       ans3.style.transition="all ease-in-out 0.2s"
       icon3.style.transform="rotate(45deg)";
       click3=1;
   }else{
    ans3.style.height="0px";
    icon3.style.transform="rotate(0deg)";
    click3=0;
   }
})
let icon4=document.querySelector(".question2 i");
let ans4=document.querySelector(".answer2");
let mainbox4=document.querySelector(".fq2")
let click4=0;
mainbox4.addEventListener("click",()=>{
   if(click4===0){
       ans4.style.height="auto";
       ans4.style.transition="all ease-in-out 0.2s"
       icon4.style.transform="rotate(45deg)";
       click4=1;
   }else{
    ans4.style.height="0px";
    icon4.style.transform="rotate(0deg)";
    click4=0;
   }
})
let icon5=document.querySelector(".question3 i");
let ans5=document.querySelector(".answer3");
let mainbox5=document.querySelector(".fq3")
let click5=0;
mainbox5.addEventListener("click",()=>{
   if(click5===0){
       ans5.style.height="auto";
       ans5.style.transition="all ease-in-out 0.2s"
       icon5.style.transform="rotate(45deg)";
       click5=1;
   }else{
    ans5.style.height="0px";
    icon5.style.transform="rotate(0deg)";
    click5=0;
   }
})
let icon6=document.querySelector(".question4 i");
let ans6=document.querySelector(".answer4");
let mainbox6=document.querySelector(".fq4")
let click6=0;
mainbox6.addEventListener("click",()=>{
   if(click6===0){
       ans6.style.height="auto";
       ans6.style.transition="all ease-in-out 0.2s"
       icon6.style.transform="rotate(45deg)";
       click6=1;
   }else{
    ans6.style.height="0px";
    icon6.style.transform="rotate(0deg)";
    click6=0;
   }
})
