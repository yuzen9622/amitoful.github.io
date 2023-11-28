var bag = document.getElementById("bag");
var ml = document.getElementById("ml");
var totall = document.getElementById("total");
var all = document.getElementById("all");
var del = document.getElementById("del");
const addbtn = document.getElementById("add");

function calculate() {
    const bagv = bag.value;
    const mlv = ml.value;
    const total = Number((parseFloat(bagv * mlv) / 1000).toFixed(2));

    const allv = all.value;
    const delv = del.value;
    const nov = allv - total - delv;
    const usev = parseFloat((nov / total) * 100).toFixed(1);
    totall.value = total;
    realuse.value = usev;
}

addbtn.addEventListener('click', calculate);
