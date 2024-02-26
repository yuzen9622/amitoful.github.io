var bags = document.querySelectorAll(".bag input[name='bag']");
var mls = document.querySelectorAll(".bag input[name='ml']");
var totals = document.getElementById('total');
var all = document.getElementById("all");
var del = document.getElementById("del");
var resule = document.getElementById('realuse')

function calculate() {
    var bagv=0;
    var mlv=0;
    for (var i = 0; i < bags.length; i++) {
         bagv += Number(bags[i].value);
         mlv += Number(mls[i].value);
         console.log(bagv,mlv)
    }
        var totalValue = Number((parseFloat(bagv * mlv) / 1000).toFixed(2));
        var allv = all.value;
        var delv = del.value;
        var nov = allv - totalValue - delv;
        var usev = parseFloat((nov / totalValue) * 100).toFixed(1);
        console.log(totalValue)
        totals.value = totalValue;
        resule.value = usev;

    

}
for (var i = 0; i < bags.length; i++) {
    bags[i].addEventListener('input', calculate);
    mls[i].addEventListener('input', calculate);
}
all.addEventListener('input', calculate);
del.addEventListener('input', calculate);

