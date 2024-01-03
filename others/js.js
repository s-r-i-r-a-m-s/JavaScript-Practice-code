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

    class student extends person{
        constructor(name,age,dob,gender,standard,section,country,state,address){
            super(name,age,dob,gender,country,state,address);
            this.standard=standard;
            this.section=section;

        }
    }
    const details2=new student(name,age,dob,gender,standard,section,country,state,address);
   console.log(details2);