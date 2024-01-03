

function submit(){
   class register{
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;
    }
   }
   let name =document.getElementById("reg-name").value;
let email =document.getElementById("reg-email").value;
let password =document.getElementById("reg-password").value;
   const regValue = new register(name,email,password);
   if (regValue==""){
    alert("enter all details")
   }

   dash()
   document.getElementById("print").innerHTML=("Welcome "+regValue.name);
}
function dash(){
    location.href="dashboard.html";
}
