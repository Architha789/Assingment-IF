function my_function(){
    a=parseInt(document.getElementById('num1').value);
    b=parseInt(document.getElementById('num2').value);
    c=parseInt(document.getElementById('num3').value);
        if (a == b && b == c && a == c ){
            result="The triangle with given sides is an Equilateral Triangle";
        }
        else if (a == b || b == c || a == c) {
            result="The triangle with given sides is an Isoceles Triangle";  
        }
        else{
            result="The triangle with given sides is Scalene Triangle";
        }
          document.getElementById("p1").innerHTML=result;  

    }

function my_function1(){
    angle=parseInt(document.getElementById('num4').value);
    switch (true){
        case (angle == 90):
            triangle="Right-Angled triangle";
        break;
          case (angle > 90):
            triangle="Obtuse-Angled triangle";
        break;
        default:
            triangle="Acute-Angled triangle";
        break;
    }
    document.getElementById("p2").innerHTML=triangle;

}  

function my_function2(){
    number=parseInt(document.getElementById('num5').value);
    if(number >= 0 && number <= 100){
        result="The number is present in the range of 100";
    }
    else{
        result="The number is not in the range of 100";
    }

    document.getElementById("p3").innerHTML=result;
}

function my_function3(){
    age=parseInt(document.getElementById('num6').value);
    if (age <= 0){
        result="Invalid input";
    }
    else if(age >= 1 && age <= 12){
        result="User is a child";
    }
    else if(age >=13 && age <= 19){
        result="User is an teenager";
    }
    else if(age >= 20 && age <= 64){
        result="User is a adult";
    }
    else {
        result="User is senior and  older";
    }

    document.getElementById("p4").innerHTML=result;
}

function my_function4(){
    a=parseInt(document.getElementById('num7').value);
    b=parseInt(document.getElementById('num8').value);
    c=(document.getElementById('num9').value);

    switch (operation){
        case "+":
            result=a+b;
        break;
        case "-":
            result=a-b;
        break;
        case "*":
            result=a*b;
        break;
        case "/":
            result=a/b;
        break;
        default:
            result="no calculation"
        break;
    
    }
      document.getElementById("p5").innerHTML=result;
}

document.getElementById("p1").style.color="red";
document.getElementById("p2").style.color="red";
document.getElementById("p3").style.color="red";
document.getElementById("p4").style.color="red";
