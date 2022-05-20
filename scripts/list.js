let data=JSON.parse(localStorage.getItem("courseDetails"))||[]
console.log(data)

var box=document.getElementById("container")
data.map(function(elm,index){
   // console.log(elm)
    let image=document.createElement("img")
    image.src=elm.image
    image.style.height="144px"
    // console.log(image)

    let name=document.createElement("p")
    name.innerText=elm.name;

    let course=document.createElement("h3")
    course.innerText=elm.course;

    let batch=document.createElement("h2")
    batch.innerText=elm.batch;

    let unit=document.createElement("h3")
    unit.innerText=elm.unit

    //remove button
    let btn=document.createElement("button")
    btn.innerText="Remove"
    btn.setAttribute("Id","btn")
    btn.addEventListener("click",function(){
        removeitem(elm,index)
        
    })
   
    let div=document.createElement("div")
    
    div.append(image,name,course,batch,unit,btn)
    box.append(div)
});




var store=JSON.parse(localStorage.getItem("trash"))||[]
function removeitem(elm,index){
     let x=   data.splice(index,1)
  //   console.log(x)
     store.push(x)
     console.log(store)
        localStorage.setItem("courseDetails",JSON.stringify(data))
       window.location.reload();
     localStorage.setItem("trash",JSON.stringify(store))
    }
