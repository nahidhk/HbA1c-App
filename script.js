const method = document.getElementById('step1');
const dataValue = document.getElementById('step2');
const mmolShow = document.getElementById('mmoll');
function tester(){
  const mmolData = 18;
  if (method.value === "mg/dL") {
    const mmolview = dataValue.value/mmolData;
   mmolShow.textContent= mmolview.toFixed(2);
  }
}