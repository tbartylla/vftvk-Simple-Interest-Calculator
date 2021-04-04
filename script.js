;

function compute()
{
    var years = document.getElementById("years").value
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("interest").value;
    var interest = principal * years * rate / 100;
    var result = document.getElementById("result");
    var futureYear = new Date().getFullYear() + parseInt(years);
    if(principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else{
        result.innerHTML = "</br>If you deposit <b>" + principal + "</b></br>" + 
            "at an interest rate of <b>" + rate + "%</b>. <br>" + 
            "You will receive an amount of <b>"+ interest + 
            "</b>,</br>in the year <b>" + futureYear + "</b></br></br>"
    }
}

function displaySliderValue(){
    var interest = document.getElementById("interest").value;
    document.getElementById("slidervalue").textContent=interest;
}

