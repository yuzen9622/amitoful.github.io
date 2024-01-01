var bags = document.querySelectorAll(".bag input[name='bag']");
var mls = document.querySelectorAll(".bag input[name='ml']");
var totals = document.querySelectorAll(".bag input[name='total']");
var all = document.getElementById("all");
var del = document.getElementById("del");
var resule = document.querySelectorAll(".bag input[name='realuse']")

function calculate() {
    for (var i = 0; i < bags.length; i++) {
        var bagv = bags[i].value;
        var mlv = mls[i].value;
        var totalValue = Number((parseFloat(bagv * mlv) / 1000).toFixed(2));
        var allv = all.value;
        var delv = del.value;
        var nov = allv - totalValue - delv;
        var usev = parseFloat((nov / totalValue) * 100).toFixed(1);
        totals[i].value = totalValue;
        resule[i].value = usev;

    }

}
for (var i = 0; i < bags.length; i++) {
    bags[i].addEventListener('input', calculate);
    mls[i].addEventListener('input', calculate);
}
all.addEventListener('input', calculate);
del.addEventListener('input', calculate);

