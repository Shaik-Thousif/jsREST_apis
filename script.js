

let val=document.createElement("div")
let op=document.getElementsByClassName("info")

let getMethod=document.getElementById("get")

let postMethod=document.getElementById("post")
let putMethod=document.getElementById("put")

let deleteMethod=document.getElementById("delete")

const url="https://jsonplaceholder.typicode.com/posts";

   const getData= async()=>{

     try{
        let responcebody= await fetch(url)
        let data= await responcebody.json()
        console.log(data[0].title)
     }
     catch(error){
        console.log(error)
        console.log("error handled")
     }
   }

//get method
 getMethod.addEventListener("click",()=>{
    alert("click ok to get data")
    getData()
 })


 //post method 
 const postData=async(newPost)=>{
    const resBody=await fetch(url,{
        method:"POST",
        body:JSON.stringify(newPost),
        headers:{
            "Content-type":"application/json;charset=UTF-8"
        }
    });
     
      if(resBody.status!=201){
      throw new Error(`something went wrong code ${resBody.status}`)
      }
     
       let data= resBody.json();
       return data;
   
 }

//post method
 postMethod.addEventListener("click",async ()=>{
    alert("post method")

    const newPost={

        title:"new title shaik ",
        body:"new body",
        userId:1,
      

    }
   const createdPost=await postData(newPost);
   console.log(createdPost)

 })




//put method 
const updateData=async(update,id)=>{
    const resBody=await fetch(`${url}/${id}`,{
        method:"PUT",
        body:JSON.stringify(update),
        headers:{
            "Content-type":"application/json;charset=UTF-8"
        }
    });
     
      if(resBody.status!=200){
      throw new Error(`something went wrong code ${resBody.status}`)
      }
     
       let data= resBody.json();
       return data;
   
 }

 //put method with listner
 putMethod.addEventListener("click",async ()=>{
    alert("put method")

    const update={
        id:2,
        title:"i trying to update",
        body:"new  updated body",
        userId:1,

    }
   const updatedPost=await updateData(update,2);
   console.log(updatedPost)

 })

 //delete method

const deleteData=async(id)=>{
    const resBody=await fetch(`${url}${id}`,{
        method:"DELETE",
        
    });
     
      if(resBody.status!=200){
      throw new Error(`something went wrong code ${resBody.status}`)
      }
     
       let data= resBody.json();
       return data;
   
 }
//delete method with listner
deleteMethod.addEventListener("click",async()=>{
    alert("deleting data")


        const deldata=  await deleteData(1)
        console.log(deldata)

})

