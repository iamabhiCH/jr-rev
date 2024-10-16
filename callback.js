// WAP to learn callback function in js
function doSum(n1,n2,fnTocall){
    let s = n1 + n2;
    fnTocall(s);
}

function displayResult(d){
    console.log("Sum of two numbers is: ", d);
}

doSum(23,67, displayResult)