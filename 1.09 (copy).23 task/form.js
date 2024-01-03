class person {
    constructor(name, age, gender, dob, country, state, city, address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.dob = dob;
        this.country = country;
        this.state = state;
        this.city = city;
        this.address = address;
    }
}
    let name = document.getElementById("pname").value;
    let age = document.getElementById("age").value;
    let dob = document.getElementById("pdob").value;
    let gender =document.getElementById("gender").value;
    let country = document.getElementById("country").value;
    let state = document.getElementById("state").value;
    let address = document.getElementById("address").value;
    let std = document.getElementById("std").value;
    let sec = document.getElementById("sec").value;

    const details = new person(name,age,dob,gender,country,state,address);
    console.log(details);

function studentdetails(){
    class student extends person {
        constructor(name, age, gender, dob, country, state, city, address, std, sec) {
            super(name, age, gender, dob, country, state, city, address);
            this.std = std;
            this.sec = sec;
        }
    }
    
    const student1 = new student(name,age,dob,gender,country,state,address,std,sec);
    console.log(student1);
}


