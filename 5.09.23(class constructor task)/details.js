function persondetails(){
    class person{
        constructor(name,age){
            this.name=name;
            this.age=age;
        }
    }
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    const details = new person(name,age);
    console.log(details);
    const personarr =[];
    personarr.push(details);
    

    class student extends person{
        constructor(name,age,dob){
            super(name,age);
            this.dob=dob;
        }
    }
    let dob= document.getElementById("dob").value;
    const details2 = new student(name,age,dob);
    console.log(details2);


    class teacher extends student{
        constructor(name,age,dob,subject,experience){
            super(name,age,dob);
            this.subject=subject;
            this.experience=experience;
        }
    }
    let subject = document.getElementById("subject").value; 
    let experience = document.getElementById("exp").value;
    const details3 = new teacher(name,age,dob,subject,experience);
    console.log(details3);
}

