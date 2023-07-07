var atk = document.getElementById("atk");
var gin = document.getElementById("mof");
var bd = document.getElementById("bd");
var eld = document.getElementById("eld");
let level = document.querySelector("#lev");
let ellev = document.querySelector("#skl");
const add = document.getElementById("add");
var skillResult = document.getElementById("skilltext")
var qResult = document.getElementById("qtext")
var lev = 0;
var ellevel = 0;
var qlevel = 0;
var mlevel = 0;
var gilevel = 0;
ellev.addEventListener("change", select)
level.addEventListener("change", selectfun)
function selectfun() {
    const switchValue = level.options[level.selectedIndex].value;
    switch (switchValue) {
        case "70":
            lev = 958;
            break;
        case "80":
            lev = 1527;
            break;
        case "90":
            lev = 1808;
            break;
        default:
            return;
    }
}
function select() {
    const switchValue = ellev.options[ellev.selectedIndex].value;
    switch (switchValue) {
        case "5":
            ellevel = 0.89
            mlevel = 1.781
            qlevel = 1.61
            gilevel = 1.289
            break;
        case "6":
            ellevel = 0.94
            mlevel = 1.882
            qlevel = 1.702
            gilevel = 1.362
            break;
        case "7":
            ellevel = 1.008
            mlevel = 201.6
            qlevel = 1.824
            gilevel = 1.459
            break;
        case "8":
            ellev = 0.89;
            break;
        case "9":
            ellevel = 1.075
            mlevel = 2.15
            qlevel = 1.946
            gilevel = 1.557
            break;
        case "10":
            ellevel = 1.21
            mlevel = 2.419
            qlevel = 2.189
            gilevel = 1.751
            break;
        case "11":
            ellevel = 1.277
            mlevel = 2.554
            qlevel = 2.31
            gilevel = 1.848
            break;
        case "12":
            ellevel = 1.344
            mlevel = 2.688
            qlevel = 2.432
            gilevel = 1.946
            break;
        case "13":
            ellevel = 1.428
            mlevel = 2.856
            qlevel = 2.584
            gilevel = 2.067
            break;
        default:
            return;

    }
}


// Get the elements from the DOM


// Function to calculate the values
function calculate() {
    // Get the input values
    const atkv = parseFloat(atk.value);
    const mofv = parseFloat(gin.value);
    const bdv = parseFloat(bd.value);
    const eldv = parseFloat(eld.value);
    const elle = ellevel;
    const mle = mlevel;
    const qle = qlevel;
    const gile = gilevel;

    var mof;
    var tlm;
    var tlma
    var mofa
    tlm = parseFloat(mofv / 1000).toFixed(2);
    mof = parseFloat((mofv * 5) / (1200 + mofv)).toFixed(2);
    tlma = Number(tlm)
    mofa = Number(mof)



    // Perform calculations (example)
    const skillResult = (atkv * elle + mofv * mle + lev * (1 + mofa)) * (1 + tlma) * (1 + eldv) * (1 + bdv) * 0.45;
    const qResult = (atkv * qle + mofv * gile + lev * (1 + mofa)) * (1 + tlma) * (1 + eldv) * (1 + bdv) * 0.45;
    // Update the result fields
    skilltext.value = parseInt(skillResult);
    qtext.value = parseInt(qResult);
}

// Add event listener to the button
add.addEventListener('click', calculate);