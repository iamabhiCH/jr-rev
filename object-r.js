const users = [{
    firstName: "Abhishek",
    gender: "male",
    metadata:{
        age: 23,
        occupation: "Software Engineer",
        address: "Noida" 
    }
},
{
    firstName: "Abhinav",
    gender: "male",
    metadata:{
        age: 22,
        occupation: "Fullstack Engineer",
        address: "Noida" 
    }
},
{
    firstName: "Manish",
    gender: "male",
    metadata:{
        age: 24,
        occupation: "Backend Engineer",
        address: "Noida" 
    }
}]

for(i = 0; i<users.length; i++){
    if(users[i]["metadata"]["occupation"] == "Backend Engineer"){
        console.log(users[i]["firstName"])
    }
}