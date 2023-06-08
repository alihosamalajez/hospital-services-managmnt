let inputt = document.querySelectorAll("[name='sick']")
let widget = document.querySelector(".widgets-control")
for(let i = 0 ; i < inputt.length ; i++){
    inputt[i].onclick = function(){
        if(inputt[i].value === "no"){
            widget.style.display = "none"
        }else{
            widget.style.display = "block"
        }
    }
}




// let div = document.querySelector(".sp-option")
// let d = document.querySelectorAll(".control")
// let icon = document.querySelector(".i")

// icon.onclick = function(){
//     div.classList.toggle("hide")
// }

// let int = document.querySelector(".in input")

// int.onclick = function(){
//     div.classList.toggle("hide")
// }


let img = document.querySelectorAll(".upload-icon")
let input = document.querySelectorAll(".upload-input")
        for(let i = 0 ; i < img.length ; i++){

            input[i].onchange = function(){
                let reader = new FileReader();
                reader.readAsDataURL(input[i].files[0])
                reader.onload = ()=>{
                    img[i].setAttribute("src" ,reader.result);

                }
            }
        }