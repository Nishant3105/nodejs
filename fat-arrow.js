let multiply=(a,b)=>{
 return a*b;
}

let student_obj={
    name:"akhil",
    age: 36,
    marks: 70,
    greet(){
        console.log(`hey ${this.name} how are you?`)
    }
}

student_obj.greet()
console.log(multiply(7,6))