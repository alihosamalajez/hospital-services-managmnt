let div = document.querySelectorAll(".option div")
let int = document.querySelectorAll(".drop")
let a = document.querySelectorAll(".drop .a")
let input = document.querySelectorAll(".drop input")
let option = document.querySelectorAll(".option"); 
let ii = document.querySelectorAll(".drop div i")



for (let i = 0; i < int.length; i++){

    int[i].onclick = function () {
        option[i].classList.toggle("show")
        ii[i].classList.toggle("i")
    }

}


for (let i = 0; i < a.length; i++){
    a[i].onclick=function(el){
        let ele = el.target
        console.log(ele)
        for (let j = 0; j < div.length; j++){
            let chos = div[j]
            chos.onclick = function(el){
                let elee = el.target
                console.log(i)
                input[i].value = elee.textContent
            }
        }
    }
}


let today = new Date().toISOString().split('T')[0];
let inputDate = document.querySelector(".input")
inputDate.setAttribute("min",today)