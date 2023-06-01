let form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault()
   
    let name=document.getElementById("name").value
   
    let age=document.getElementById("age").value
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value

let obj={
    name,age,email,password
}
   console.log(obj)
   addData(obj)
})

async function addData(obj){
    try {
        let res=await fetch("https://lavender-pelican-toga.cyclic.app/users/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        })
        console.log(res)
        if(res.ok){
            let data=await res.json()
            alert("User Registration Successful")
            window.location.href=("./signin.html")
            
        }
    } catch (error) {
        console.log("something went wrong")
    }
}