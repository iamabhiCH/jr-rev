/* WAP to define a function which help to het sum, subtract, multiply and division 
of two numbers*/

console.log("Enter 1 to perform addition \nEnter 2 to perform substraction \nEnter 3 to perform multiplication \nEnter 4 to perform division \nEnter 5 to perform modulo \n\n")

function calc(x,y,or){
    if(or == 1){
        return x+y;
    }
    else if(or == 2){
        return x-y;
    }
    else if(or == 3){
        return x*y;
    }
    else if(or == 4){
        if(y != 0){
            return x/y;
        }
        else{
            return "Error! Division by zero is not allowed.";
        }
    }
    else if(or == 5){
        return x % y;
    }
    else{
        return "Invalid operator";
    }
}

num1 = 23;
num2 = 0;
opr = 4;

const res = calc(num1, num2, opr);
console.log(res);