let listNew =[
    {
        id : 1,
        image: "images/posts1.png",
        time: "Monday 05, May 2023",
        by: "By Ali",
        title : "11This Article’s Title goes Here, but not too long.",
        text : "11Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, nihil placeat fugit possimus expedita sit excepturi eius ipsa aspernatur, consequatur culpa soluta praesentium harum. Consequuntur cupiditate omnis necessitatibus accusamus ducimus!",
    },
    {
        id : 2,
        image: "images/posts2.png",
        time: "Monday 06, May 2023",
        by: "By Ahmad",
        title : "22This Article’s Title goes Here, but not too long.",
        text : "22Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, nihil placeat fugit possimus expedita sit excepturi eius ipsa aspernatur, consequatur culpa soluta praesentium harum. Consequuntur cupiditate omnis necessitatibus accusamus ducimus!",
    },
    {
        id : 3,
        image: "images/posts3.png",
        time: "Monday 08, May 2023",
        by: "By osama",
        title : "33This Article’s Title goes Here, but not too long.",
        text : "33Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, nihil placeat fugit possimus expedita sit excepturi eius ipsa aspernatur, consequatur culpa soluta praesentium harum. Consequuntur cupiditate omnis necessitatibus accusamus ducimus!",
    },
    {
        id : 4,
        image: "images/posts4.png",
        time: "Monday 08, May 2023",
        by: "By osama",
        title : "44This Article’s Title goes Here, but not too long.",
        text : "44Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, nihil placeat fugit possimus expedita sit excepturi eius ipsa aspernatur, consequatur culpa soluta praesentium harum. Consequuntur cupiditate omnis necessitatibus accusamus ducimus!",
    },
    {
        id : 5,
        image: "images/posts1.png",
        time: "Monday 08, May 2023",
        by: "By osama",
        title : "55This Article’s Title goes Here, but not too long.",
        text : "55Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, nihil placeat fugit possimus expedita sit excepturi eius ipsa aspernatur, consequatur culpa soluta praesentium harum. Consequuntur cupiditate omnis necessitatibus accusamus ducimus!",
    },
    
]

for (let i = 0; i < listNew.length; i++){
    let divv = document.createElement("li")
    let news = document.querySelector(".recentposts ul")
    divv.id = listNew[i].id
    let box = `<img src="${listNew[i].image}" alt="">
        <div class="info">
        <span>${listNew[i].time}</span>
        <span>${listNew[i].title}</span>
    </div>`
    divv.innerHTML = box;
    news.append(divv)  
}


let box = document.querySelectorAll(".recentposts ul li")
for (let i = 0; i < box.length; i++){
    box[i].onclick = function(){
        let img = document.querySelector(".two img")
        let text = document.querySelector(".two p")
        let title = document.querySelector(".two h2")
        let time = document.querySelector(".two .a")
        let by = document.querySelector(".two .b")

        img.src = listNew[i].image
        text.innerHTML = listNew[i].text
        title.innerHTML = listNew[i].title
        time.innerHTML = listNew[i].time
        by.innerHTML = listNew[i].by

        window.localStorage.setItem("id-new" ,listNew[i].id)
        // window.location.href = './newsone.html'

    }
    
}

let chick = window.localStorage.getItem("id-new")
for(let i = 0 ; i < listNew.length ; i++){
    if ( chick == listNew[i].id) {
        let img = document.querySelector(".two img")
        let text = document.querySelector(".two p")
        let time = document.querySelector(".two .a")
        let by = document.querySelector(".two .b")
        let title = document.querySelector(".two h2")
        img.src = listNew[i].image
        text.innerHTML = listNew[i].text
        time.innerHTML = listNew[i].time
        by.innerHTML = listNew[i].by
        title.innerHTML = listNew[i].title
    }
}

let newtext = document.querySelectorAll(".recentposts ul li")
function search() {
    let search = document.getElementById("sch").value.toUpperCase();

    for (let i = 0; i < newtext.length; i++) {
        if (newtext[i].innerHTML.toUpperCase().indexOf(search) >= 0) {
            newtext[i].style.display = ""
        } else {
            newtext[i].style.display = "none"
        }
    }
}



let leftt = document.querySelector(".lleft")
let rightt = document.querySelector(".rright")

let dd = window.localStorage.getItem("id-new")
    leftt.onclick = function(){
        if(dd > 1){
            window.localStorage.setItem("id-new" , dd - 1) 
            window.location.href = './newsone.html'
        }    
    }
    
    rightt.onclick = function(){
        let w = 1
        if(dd < listNew.length){
            window.localStorage.setItem("id-new" , `${+dd + w}`) 
            window.location.href = './newsone.html'
        }    
    }
    
