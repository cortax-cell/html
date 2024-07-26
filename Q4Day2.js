function add(num1,num2){
    return  num1 + num2;
}
function sub(num1,num2){
    return num1 - num2;
}
function mul(num1,num2){
    return num1 * num2;
}
function div(num1,num2){
    return num1 / num2;
}
function rem(num1,num2){
    return num1 % num2;
}

function cal(num1,num2){
    var a= add(num1,num2);
    var s=sub(num1,num2);
    var m=mul(num1,num2);
    var d=div(num1,num2);
    var r=rem(num1,num2);
    console.log("sum "+a+" sub "+s+" mul "+m+" div "+d+" rem "+r);
}

cal(5,2);