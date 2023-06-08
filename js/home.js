// let listDoc = [
//     {
//          id : 1,
//          docName: "dr . Ali hosam alajez",
//          image: "./image/Rectangle 78 (1).png",
//          adress: "Gaza alnusirat",
//          adressText: "Gaza alnusiratGaza alnusiratGaza alnusiratGaza alnusiratGaza alnusirat",
//          specialities : ["ali hosam"],
//          issues : [1,21,3],
//          age   : 23
//      },
//      {   
//          id : 2,
//          docName: "dr . osama abu samra",
//          image : "./image/Rectangle 78 (2).png",
//          adress: "Gaza alnaser",
//          adressText: "Gaza alnaser alnusiratGaza alnaser alnusiratGaza alnaser",
//          specialities : [16,17,18],
//          issues : [16,117,18],
//          age   : 22
//      },
//      {   
//          id : 3,
//          docName: "dr . Ahmad saleem",
//          image : "./image/Rectangle 78 (3).png",
//          adress: "Gaza albrige",
//          adressText :"Gaza albrige alnusiratGaza albrige albrige alnusirat",
//          specialities : [4,5,6],
//          issues : [4,51,6],
//          age   : 33
//      },
//      {   
//          id : 4,
//          docName: "dr . walaa abu middian",
//          image : "./image/Rectangle 78 (4).png",
//          adress: "44Gaza alnusirat44 ",
//          adressText :"44Gaza alnusiratGaza44 alnusiratGaza44 alnusiratGaza alnusiratGaza alnusirat",
//          specialities : [7,8,9],
//          issues : [7,81,9],
//          age   : 44
//      },
//      {   
//          id : 5,
//          docName: "dr . haneen sweedan",
//          image : "./image/Rectangle 78 (4).png",
//          adress: "44Gaza alnusirat44 ",
//          adressText :"44Gaza alnusiratGaza44 alnusiratGaza44 alnusiratGaza alnusiratGaza alnusirat",
//          specialities : [7,8,9],
//          issues : [7,8,9],
//          age   : 44
//      },
//  ]

// for (let i = 0; i < listDoc.length; i++){
//     let div = document.createElement("div")
//     div.classList.add("doctor-img")
//     let tt = document.querySelector(".our-doctor .left")
//     div.id = listDoc[i].id
//     let boss =`
//                 <div class="choos" id="${listDoc[i].id}"></div>
//                 <img class="img" src="${listDoc[i].image}" alt="image doctor">
//                 <p>Doctor's Name 1</p>
//                 <h3>${listDoc[i].docName}</h3>
//                 <div class="icon">
//                     <i class="fa-brands fa-linkedin-in"></i>
//                     <i class="fa-brands fa-facebook-f"></i>
//                     <i class="fa-brands fa-instagram"></i>
//                 </div>
//                 <span>View Profile</span>`

//     div.innerHTML = boss;
//     tt.append(div)       
// }

let doctor = document.querySelector(".our-doctor .left")
let scrLeft = document.querySelector(".leftt")
let scrRight = document.querySelector(".our-doctor .right")


let body = document.querySelector("body")
console.log(body.scrollWidth)
if(body.scrollWidth < 767){
    scrRight.addEventListener("click",()=>{
        doctor.style.scrollBehavior = "smooth"
        doctor.scrollLeft += 338;
    })
    scrLeft.addEventListener("click",()=>{
        doctor.style.scrollBehavior = "smooth"
        doctor.scrollLeft -= 338;
    })
}else{
    scrRight.addEventListener("click",()=>{
        doctor.style.scrollBehavior = "smooth"
        doctor.scrollLeft += 1010;
    })
    scrLeft.addEventListener("click",()=>{
        doctor.style.scrollBehavior = "smooth"
        doctor.scrollLeft -= 1010;
    })
}

let doc = document.querySelectorAll(".left .doctor-img")

for(let i = 0 ; i < doc.length ; i++){
doc[i].addEventListener("click",(ele)=>{
    let el = ele.target
    window.localStorage.setItem("id-doc" ,el.id)
    window.location.href = './about-doctor.html'
})
}







// let listNew =[
//     {
//         id : 1,
//         image: "images/posts1.png",
//         time: "Monday 05, May 2023",
//         by: "Ali hosam alajez",
//         title : "11This Article’s Title goes Here, but not too long.",
//         text : "11Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, nihil placeat fugit possimus expedita sit excepturi eius ipsa aspernatur, consequatur culpa soluta praesentium harum. Consequuntur cupiditate omnis necessitatibus accusamus ducimus!",
//     },
//     {
//         id : 2,
//         image: "images/posts2.png",
//         time: "Monday 06, May 2023",
//         by: "Ahmad",
//         title : "22This Article’s Title goes Here, but not too long.",
//         text : "22Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, nihil placeat fugit possimus expedita sit excepturi eius ipsa aspernatur, consequatur culpa soluta praesentium harum. Consequuntur cupiditate omnis necessitatibus accusamus ducimus!",
//     },
//     {
//         id : 3,
//         image: "images/posts3.png",
//         time: "Monday 08, May 2023",
//         by: "osama",
//         title : "33This Article’s Title goes Here, but not too long.",
//         text : "33Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, nihil placeat fugit possimus expedita sit excepturi eius ipsa aspernatur, consequatur culpa soluta praesentium harum. Consequuntur cupiditate omnis necessitatibus accusamus ducimus!",
//     },
//     {
//         id : 4,
//         image: "images/posts4.png",
//         time: "Monday 08, May 2023",
//         by: "osama",
//         title : "44This Article’s Title goes Here, but not too long.",
//         text : "44Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, nihil placeat fugit possimus expedita sit excepturi eius ipsa aspernatur, consequatur culpa soluta praesentium harum. Consequuntur cupiditate omnis necessitatibus accusamus ducimus!",
//     },
//     {
//         id : 5,
//         image: "images/posts1.png",
//         time: "Monday 08, May 2023",
//         by: "haneen",
//         title : "55This Article’s Title goes Here, but not too long.",
//         text : "55Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, nihil placeat fugit possimus expedita sit excepturi eius ipsa aspernatur, consequatur culpa soluta praesentium harum. Consequuntur cupiditate omnis necessitatibus accusamus ducimus!",
//     },
    
// ]


// for (let i = 0; i < listNew.length; i++){
//     let div = document.createElement("div")
//     div.classList.add("box")
//     let tt = document.querySelector(".news .new")
//     div.id = listNew[i].id
//     let boss =`
//         <img src="${listNew[i].image}" alt="">
//         <div class="text">
//         <span>${listNew[i].time} | By ${listNew[i].by}</span>
//         <p>${listNew[i].title}</p>
//     `

//     div.innerHTML = boss;
//     tt.append(div)       
// }


let news= document.querySelector(".new")
let scrtop = document.querySelector(".up")
let scrdown = document.querySelector(".down")

scrtop.addEventListener("click",()=>{
    news.style.scrollBehavior = "smooth"
    news.scrollTop += 350;
})
scrdown.addEventListener("click",()=>{
    news.style.scrollBehavior = "smooth"
    news.scrollTop -= 350;
})

news.addEventListener("wheel",(evt)=>{
    // evt.preventDefault();
    news.scrollTop += 0 ;
})




let neww = document.querySelectorAll(".new .box")
console.log(neww.length)
for(let i = 0 ; i < neww.length ; i++){
neww[i].addEventListener("click",()=>{
    let el = neww[i].id
    console.log(el)
    window.localStorage.setItem("id-new" ,el)
    window.location.href = './newsone.html'
})
}

