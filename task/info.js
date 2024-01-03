class person{
    constructor(name,age,dob,gender,address){
        this.name=name;
        this.age=age;
        this.dob=dob;
        this.gender=gender;
        this.address=address;
    }
}
class teacher extends person{
    constructor(name,age,dob,gender,address,subject){
        super(name,age,dob,gender,address);
        this.subject = subject;
    }
}

const stuarr = [];
function student(){
    class student extends person{
        constructor(name,age,dob,gender,address,std,sec){
            super(name,age,dob,gender,address);
            this.std=std;
            this.sec=sec;
        }
    }
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let address = document.getElementById("address").value;
    let std = document.getElementById("std").value;
    let sec = document.getElementById("sec").value;
    const details = new student(name,age,dob,gender,address,std,sec);
    console.log(details);
}

const teacharr =[];
function teacher1(){
    class teacher extends person{
        constructor(name,age,dob,gender,address,subject){
            super(name,age,dob,gender,address);
            this.subject = subject;
        }
    }
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let address = document.getElementById("address").value;
    let subject = document.getElementById("sub").value;
    const details1 = new teacher(name,age,dob,gender,address,subject);
    console.log(details1);
    teacharr.push(details1);
    console.log(teacharr);
}

const hodarr = [];
function hod(){
    class hod extends teacher{
        constructor(name,age,dob,gender,address,subject,role){
            super(name,age,dob,gender,address,subject);
            this.role = role;
        }
    }
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let address = document.getElementById("address").value;
    let subject = document.getElementById("sub").value;
    let role = document.getElementById("role").value;
    const details2 = new hod(name,age,dob,gender,address,subject,role);
    console.log(details2);
    hodarr.push(details2);
}
function view(){
    console.log(stuarr);
    console.log(teacharr);
    console.log(hodarr);
}