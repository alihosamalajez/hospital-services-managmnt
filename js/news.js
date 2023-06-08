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
    {
        id : 6,
        image: "images/posts1.png",
        time: "Monday 08, May 2023",
        by: "By osama",
        title : "66This Article’s Title goes Here, but not too long.",
        text : "66Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, nihil placeat fugit possimus expedita sit excepturi eius ipsa aspernatur, consequatur culpa soluta praesentium harum. Consequuntur cupiditate omnis necessitatibus accusamus ducimus!",
    },
    {
        id : 7,
        image: "images/posts1.png",
        time: "Monday 08, May 2023",
        by: "By osama",
        title : "77This Article’s Title goes Here, but not too long.",
        text : "77Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, nihil placeat fugit possimus expedita sit excepturi eius ipsa aspernatur, consequatur culpa soluta praesentium harum. Consequuntur cupiditate omnis necessitatibus accusamus ducimus!",
    },
    {
        id : 8,
        image: "images/posts1.png",
        time: "Monday 08, May 2023",
        by: "By osama",
        title : "88This Article’s Title goes Here, but not too long.",
        text : "88Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, nihil placeat fugit possimus expedita sit excepturi eius ipsa aspernatur, consequatur culpa soluta praesentium harum. Consequuntur cupiditate omnis necessitatibus accusamus ducimus!",
    },
    {
        id : 9,
        image: "images/posts1.png",
        time: "Monday 08, May 2023",
        by: "By osama",
        title : "99This Article’s Title goes Here, but not too long.",
        text : "99Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, nihil placeat fugit possimus expedita sit excepturi eius ipsa aspernatur, consequatur culpa soluta praesentium harum. Consequuntur cupiditate omnis necessitatibus accusamus ducimus!",
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
    console.log(1)
}


   
// }


// let chick = window.localStorage.getItem("id-new")
// console.log(chick)
// for(let i = 0 ; i < listNew.length ; i++){
//     if ( chick == listNew[i].id) {
//         box[i].onclick = function(){
//             console.log(box[i].id)
//             window.location.href = './newsone.html'
//         }    
//     }
// }



for (let i = 0; i < listNew.length; i++){
    let divv = document.createElement("div")
    divv.classList.add("box")
    let news = document.querySelector(".plogs .boxs")
    divv.id = listNew[i].id
    let box = `
                    <img src="${listNew[i].image}" alt="">
                    <div class="icons">
                        <div class="calender"><i class="ri-calendar-line"></i> <span>${listNew[i].time}</span></div>
                        <div class="user"><i class="ri-user-line"></i><span>${listNew[i].by}</span></div>
                    </div>
                    <h2>${listNew[i].title}</h2>
                    <p>${listNew[i].text}</p>
                    <button>Read More<i class="ri-arrow-right-line"></i></button>`
    divv.innerHTML = box;
    news.append(divv) 
}




let bo = document.querySelectorAll(".plogs .box button")
console.log(bo)
for (let i = 0; i < bo.length; i++){
    bo[i].onclick = function(){
        console.log(bo[i].parentElement.id)
        window.localStorage.setItem("id-new" ,bo[i].parentElement.id)
        window.location.href = './newsone.html'
    }
    
}




let box = document.querySelectorAll(".recentposts ul li")
console.log(box)
for (let i = 0; i < box.length; i++){
    box[i].onclick = function(){
        console.log(box[i].id)
        window.localStorage.setItem("id-new" ,box[i].id) 
        window.location.href = './newsone.html'

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



let next = document.querySelector(".next")
back.href = `http://127.0.0.1:5500/news.html#1`
let num = listNew.length / 3 
let len = Math.ceil(num)
for(let i = 0;i < len ;i++){
    back.onclick = function(){
        console.log(i)
        if(i * 3 < listNew.length){
            let back = document.querySelector(".pervious")
            back.href = `http://127.0.0.1:5500/news.html#${i++ * 3}`
            console.log(back.href)
        }
    }
}