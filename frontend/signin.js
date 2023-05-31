let form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value

let obj={
 email,password
}
   console.log(obj)
   login(obj)
})

async function login(obj){
    try {
        let res=await fetch("http://localhost:4500/users/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                // authorization:localStorage.setItem("token",res.token)
            },
            body:JSON.stringify(obj)
        })
        if(res.ok){
            let result=await res.json()
            // console.log(result)
            localStorage.setItem("token",result.token)
            alert("Login successfull")
            window.location.href="./weather.html"
        }
    } catch (error) {
        console.log("something went wrong")
    }
}