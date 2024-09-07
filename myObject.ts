const User={
    name:"Manish Jha",
    email:"jhamanish.cse25@gmail.com",
    isActive:true
}
function createUser({name:string,isPaid:boolean=false}){

}
createUser({name:"Manish"});
createUser({name:"Manish",isPaid:true});
let newUser={name:"Manish",isPaid:true,age:21};
// createUser({name:"Manish",isPaid:true,age:21}) giving error
createUser(newUser);

function createCourse(name:string,price:number):{name:string,price:number}{
    return {name,price};
}
createCourse("reactjs",5000);
console.log(createCourse("Mern",7000));

export{}