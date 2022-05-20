var arr=JSON.parse(localStorage.getItem("courseDetails")) ||[]


var x;

 function object(name,course,unit,image,batch)
 {
     this.name=name;
     this.course=course;
     this.unit=unit;
     this.image=image;
     this.batch=batch;
 }

 function myfun(event){
     event.preventDefault();
 
     let name=form.name.value;
     let course=form.course.value;
     let unit=form.unit.value;
     let image=form.image.value;
     let batch=form.batch.value;

     let p= new object(name,course,unit,image,batch)
     console.log(p)
     arr.push(p)
     console.log(arr)

     if(batch=="Web-17")
     {

    x=batch.length
      console.log(batch.length)
      let a= document.querySelector("#web17")
a.textContent=`Web-17 :${batch.length}`
         
     }
     if(batch=="Web-18")
     {
         console.log(batch.length)
         let a= document.querySelector("#web18")
a.textContent=`Web-18 :${batch.length}`
     }

     localStorage.setItem("courseDetails",JSON.stringify(arr))

 }