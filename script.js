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
        result.innerHTML = "</br>If you deposit <mark>" + principal + "</mark></br>" + 
            "at an interest rate of <mark>" + rate + "%</mark>. <br>" + 
            "You will receive an amount of <mark>"+ interest + 
            "</mark>,</br>in the year <mark>" + futureYear + "</mark></br></br>"
    }
}

function displaySliderValue(){
    var interest = document.getElementById("interest").value;
    document.getElementById("slidervalue").textContent=interest;
}

