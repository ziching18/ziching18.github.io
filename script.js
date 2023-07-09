/*
console.log("isuffushfuhf");
const radioButtons = document.querySelectorAll('input[name="choice-input"]');
let selectedSize;
for (const radioButton of radioButtons) {
    if (radioButton.checked) {
        selectedSize = radioButton.value;
        break;
    }
}
// show the output:
console.log(selectedSize ? `You selected ${selectedSize}` : `You haven't selected any size`);
*/
function show_div(d) {
    document.getElementById("cm_div").style.display='none';
    document.getElementById("feet_div").style.display='none';
    document.getElementById("compare_div").style.display='none';
    if(d == "cm") {
        var v = document.getElementById("cm_div");
    }
    else if(d == "feet") {
        var v = document.getElementById("feet_div");
    }
    else if(d == "compare") {
        var v = document.getElementById("compare_div");
    }
    v.style.display='block';
}
var radios = document.querySelectorAll('input[type=radio][name="choice-input"]');
radios.forEach(radio => radio.addEventListener('change', () => show_div(radio.value)));

function cm2feet() {
    console.log(document.getElementById("cm-in").value);
    var x = parseFloat(document.getElementById("cm-in").value);
    //ft = str(int(x/30.48));
    ft = parseInt(x/30.48);
    //inch = str(round((x/30.48)%1*12,1));
    inch = Math.round((x/30.48)%1*12,1);
    document.getElementById("cm-out").innerHTML = ft + "\'" + inch + "\"";
    console.log(ft, inch)
    return false;
}

function feet2cm() {
    var yft = parseFloat(document.getElementById("feet-in").value);
    var yinch = parseFloat(document.getElementById("inch-in").value);
    //cm = str(math.ceil(yft*30.48) + int(yinch/12*30.48))
    cm = Math.ceil(yft*30.48) + parseInt(yinch/12*30.48);
    document.getElementById("feet-out").innerHTML = cm + "cm";
    console.log(cm)
    return false;
}