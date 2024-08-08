function sumCalculator(){
    //get the values from textboxes
const num1 = document.getElementById('num1').value;
const num2 = document.getElementById('num2').value;

const number1 = parseFloat(num1);
const number2 = parseFloat(num1);

if(isNaN(number1) || isNaN(number2)){
    document.getElementById('result').textContent ='PLease enter a valid number';
    return;
}


//calculate

 const sum = number1 + number2; 

 //result
 document.getElementById('result').textContent = 'The sum is' + sum;
}

function clearFields(){
    document.getElementById('num1').value="";
    document.getElementById('num2').value="";
    document.getElementById('result').textContent="";
}