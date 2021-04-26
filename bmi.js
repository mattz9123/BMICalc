//Created to allow webpage to be loaded into the DOM
$(document).ready(function(){
    $("button").on("click", bmiCalc)
    $("form").on("submit", calculation);
})
//Without this, results will not stay
function calculation(event){
    event.preventDefault();
}

function bmiCalc(){

    let numWeight = $("input[name=weight]").val();
    let numHeight = $("input[name=height]").val();

    let bmi = (numWeight / (numHeight**2)) * 703;
    bmi = bmi.toFixed(1)

    //Could have done this several ways, started from above 40 to cover all numbers
    if (bmi > 40){
        $("p#finalBMI").text(`Your BMI is ${bmi}. You are very severely obese`);
    }
    else if (bmi > 35){
        $("p#finalBMI").text(`Your BMI is ${bmi}. You are severely obese`);
    }
    else if (bmi > 30){
        $("p#finalBMI").text(`Your BMI is ${bmi}. You are moderately obese`);
    }
    else if (bmi > 25){
        $("p#finalBMI").text(`Your BMI is ${bmi}. You are overweight`);
    }
    else if (bmi >= 18.5){
        $("p#finalBMI").text(`Your BMI is ${bmi}. You are normal weight`);
    }
    else if (bmi > 16){
        $("p#finalBMI").text(`Your BMI is ${bmi}. You are underweight`);
    }
    else if (bmi >= 15){
        $("p#finalBMI").text(`Your BMI is ${bmi}. You are severely underweight`);
    }
    else if (bmi < 15){
        $("p#finalBMI").text(`Your BMI is ${bmi}. You are very severely underweight`);
    }
    else{
        $("p#finalBMI").text(`Error, missing a valid value`);
    }
}