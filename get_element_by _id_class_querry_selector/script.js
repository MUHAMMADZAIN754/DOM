// alert('test')


console.log("ZAINI")
 
// let boxes = document.getElementsByClassName("Box")
 
// console.log(boxes)

// boxes[2].style.backgroundColor = "red" 

// boxes[2].style.backgroundColor = "red";


 document.getElementById("redbox").style.backgroundColor = "red"

 document.querySelector(".box").style.backgroundColor ="green"


//  document.querySelectorAll("").style.backgroundColor = "green" ---->Not Correct

console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e=>{console.log(e)})

document.querySelectorAll(".box").forEach(e=>{e.style.backgroundColor = "green"
})


// here console code starts
document.getElementsByTagName("div")

e=getElementsByTagName("div")

e[3].matches("#redbox")

e[3].closest("#redbox")

e[3].closest(".container")





