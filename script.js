const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const noAccount = document.querySelector(".no-account");
const docBody = document.querySelector("body");

function changeBodyColor(color){
    docBody.style.backgroundColor = color;
}


yesBtn.addEventListener("click",()=>{
    const signInContainer = document.querySelector(".sign-in");
    const signIn = document.querySelector(".input-sign-in");

    changeBodyColor("rgb(255, 245, 235)")
    signIn.classList.add("move-right");
    signInContainer.classList.add("move-left");
});

noBtn.addEventListener("click",()=>{
    const signUpContainer = document.querySelector(".sign-up");
    const signUp = document.querySelector(".input-sign-up");

    changeBodyColor("rgb(251, 255, 217)");
    signUp.classList.add("move-right");
    signUpContainer.classList.add("move-left");
});

noAccount.addEventListener("click",(event)=>{
    event.preventDefault();
    const signUpContainer = document.querySelector(".sign-up");
    const signUp = document.querySelector(".input-sign-up");

    changeBodyColor("rgb(251, 255, 217)");
    signUp.classList.add("move-right");
    signUpContainer.classList.add("move-left");
});