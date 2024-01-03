function store(){
    class person{
        constructor(name,age,dob,gender,country,state,address){
            this.name=name;
            this.age=age;
            this.dob=dob;
            this.gender=gender;
            this.country=country;
            this.state=state;
            this.address=address;
        }
    }
    let name = document.getElementById("pname").value;
    let age = document.getElementById("age").value;
    let dob = document.getElementById("pdob").value;
    let gender =document.getElementById("gender").value;
    let country = document.getElementById("country").value;
    let state = document.getElementById("state").value;
    let address = document.getElementById("address").value;
    const details = new person(name,age,dob,gender,country,state,address);
    console.log(details);
 }
 function student(){
    class student extends person{
        constructor(name,age,dob,gender,standard,section,country,state,address){
            super(name,age,dob,gender,country,state,address);
            this.standard=standard;
            this.section=section;

        }
    }
    const details2=new student(name,age,dob,gender,standard,section,country,state,address);
    console.log(details2);
 }
function teacher(){
class teacher extends person{
    constructor(name,age,dob,gender,standard,section,country,state,address,subject){
        super(name,age,dob,gender,country,state,address);
        this.subject=subject;

    }
}
const details3=new teacher(name,age,dob,gender,country,state,address,subject);
console.log(details3);
}
function hm(){
    class principal extends  teacher{
        constructor(name,age,dob,gender,standard,section,country,state,address,subject,role){
        super(name,age,dob,gender,country,state,address,subject);
        this.role=role;
    }
}
const details4=new principal(name,age,dob,gender,country,state,address,subject,role);
console.log(details4);
}