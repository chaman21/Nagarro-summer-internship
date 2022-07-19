let num1='';
let nums2='';
let operator=''
let total=''

$(document).ready(function(){
    $('button').on('click', function(e){
        let btn = e.target.innerHTML;
        console.log(btn)
        if(btn>='0'&& btn<='9')
        {
            handleNumber(btn);
        }
        else{
            handleOperator(btn);
        }
    });


});

function handleNumber(num)
{
    if(num1==="")
    {
        num1=num;
    }
    else{
        nums2=num;
    }
    displayButton(num)
}

function handleOperator(oper){
    if(operator===""){
        operator=oper;
    }
    else
    {
        handleTotal();
        operator=oper;
    }
}


function handleTotal(){
    switch(operator){
        case '+': 
            total+= +num1 + +nums2; //convert string to int
            displayButton(total);
            break;
        case '-': 
            total+= +num1 - +nums2; //convert string to int
            displayButton(total);
            break;
        case '/': 
            total+= +num1 / +nums2; //convert string to int
            displayButton(total);
            break;
        case '*': 
            total+= +num1 * +nums2; //convert string to int
            displayButton(total);
            break;

    }
    updateVariables();
}

function displayButton(btn){
    $('.input').text(btn);

}

function updateVariables(){
    num1=total;
    num2="";
}











