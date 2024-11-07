
let projectSection = document.querySelectorAll(".project")

let input = function(){

let inputSection = document.querySelector("#input")
console.dir(inputSection)

let submitBtn = document.querySelector(".enterbtn")

let feedback = document.querySelector("#feedback")
console.dir(feedback)
    

// this is for feedback and footer section 
   submitBtn.addEventListener('click' , function(){
     
   if (inputSection.value == " "){

    alert("invalid submition! plase enter your feedback ! ");
   }

   else{

    console.log(inputSection.value)

    alert("thank you for giving feedback!")
   }

   inputSection.value = " ";
   });
  
   if (inputSection.value < " "){
    alert("invalid submition! plase enter your feedback ! ");
   }

}

input();


     let modeChange =function(){


        // mode changer javascript


   let modebtn = document.querySelector("#button");
   let currMode ="light";
   
   modebtn.addEventListener("click",() => {
       // console.log("you are trying to change mode");

   
       if (currMode === "light"){
           currMode="dark";
   
           let mode = document.querySelector("body").style.backgroundColor = "rgba(2, 25, 43)";
        //    let body = document.querySelector("body").style.color = "white";
           let modebtn = document.querySelector("#button").style.backgroundColor="rgba(2, 25, 43)"
       }
   
       else{
           currMode="light";
           let mode = document.querySelector("body").style.backgroundColor = "white";
        //    let body = document.querySelector("body").style.color = "black";
           let modebtn = document.querySelector("#button").style.backgroundColor="white"
       }
   
       console.log(currMode);
       
   });

}

    modeChange();

    