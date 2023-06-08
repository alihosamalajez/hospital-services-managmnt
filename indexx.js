

// let docName = document.querySelector(".doctor-img h3")
// let doctorName = document.querySelector(".doctor-name")
// let doctorImg = document.querySelector(".img")
// let doctorImage = document.querySelector(".office img")
// let adress = document.querySelector(".adress h3")
// let adressText = document.querySelector(".adress p")
// let specialities = document.querySelectorAll(".special li")
// let issues = document.querySelectorAll(".iss li")
// din.innerHTML = `${din.innerHTML} ${window.localStorage.getItem("id")}`
let listDoc = [
   {
        id : 1,
        docName: "dr . Ali hosam alajez",
        image: "./image/Rectangle 78 (1).png",
        adress: "Gaza alnusirat",
        adressText: "Gaza alnusiratGaza alnusiratGaza alnusiratGaza alnusiratGaza alnusirat",
        specialities : ["ali hosam"],
        issues : [1,21,3],
        age   : 23
    },
    {   
        id : 2,
        docName: "dr . osama abu samra",
        image : "./image/Rectangle 78 (2).png",
        adress: "Gaza alnaser",
        adressText: "Gaza alnaser alnusiratGaza alnaser alnusiratGaza alnaser",
        specialities : [16,17,18],
        issues : [16,117,18],
        age   : 22
    },
    {   
        id : 3,
        docName: "dr . Ahmad saleem",
        image : "./image/Rectangle 78 (3).png",
        adress: "Gaza albrige",
        adressText :"Gaza albrige alnusiratGaza albrige albrige alnusirat",
        specialities : [4,5,6],
        issues : [4,51,6],
        age   : 33
    },
    {   
        id : 4,
        docName: "dr . walaa abu middian",
        image : "./image/Rectangle 78 (4).png",
        adress: "44Gaza alnusirat44 ",
        adressText :"44Gaza alnusiratGaza44 alnusiratGaza44 alnusiratGaza alnusiratGaza alnusirat",
        specialities : [7,8,9],
        issues : [7,81,9],
        age   : 44
    },
    {   
        id : 5,
        docName: "dr . haneen sweedan",
        image : "./image/Rectangle 78 (4).png",
        adress: "44Gaza alnusirat44 ",
        adressText :"44Gaza alnusiratGaza44 alnusiratGaza44 alnusiratGaza alnusiratGaza alnusirat",
        specialities : [7,8,9],
        issues : [7,81,9],
        age   : 44
    },
]





for (let i = 0; i < listDoc.length; i++){
    let divv = document.createElement("div")
    divv.classList.add("box")
    let doctors = document.querySelector(".doctor-content .doctor")
    divv.id = listDoc[i].id
    let box = `
    <div>
    <i class="fa-solid fa-star"></i>
    <span>5.0</span>
    </div>
    <img src="${listDoc[i].image}" alt="image">
    <p class="doctor-name">${listDoc[i].docName}</p>
                <p>Dentician</p>
                <span>120 Reviews</span>  `
    divv.innerHTML = box;
    doctors.append(divv)       

}

let bo = document.querySelectorAll(".doctor .box")
for (let i = 0; i < bo.length; i++){
    bo[i].onclick = function(){
        console.log(bo[i].id)
        window.localStorage.setItem("id-doc" ,bo[i].id)
        window.location.href = './about-doctor.html'
        let content = document.createElement("div")
        content.classList.add("container")
    }
    
}





