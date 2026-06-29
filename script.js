let input=document.getElementById('input');
let buttons=document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener("click", () => {

        if(button.innerText!=="="&& button.innerText!=="C"){
        input.value+=button.innerText;
    }
    });
});

let clearbtn=document.getElementById('clear');
clearbtn.addEventListener("click",()=>{
    input.value="";
});

let equalbtn=document.getElementById("btn");
equalbtn.addEventListener("click",()=>{
    input.value=eval(input.value);
})

equalbtn.addEventListener("click",()=>{
    try {
        input.value=eval(input.value);
    } catch  {
        input.value="error";
    }
})














