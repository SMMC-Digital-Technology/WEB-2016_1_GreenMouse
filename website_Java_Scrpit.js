var income = 67380;

if (income <= 16000){
  var taxAmount = 0;
  console.log(taxAmount);
} else if (income <= 52500) {
  var taxAmount = (income - 16000) * 0.1;
  console.log(taxAmount);
} else if (income <= 113000) {
var taxAmount = ((income - 52500) * 0.16) + 3650;
  console.log(taxAmount);
} else if (income <= 184500) {
var taxAmount = ((income - 113000) * 0.24) + 13330;
  console.log(taxAmount);
} else {
  var taxAmount = ((income - 184500) * 0.36)         + 30490;
  console.log(taxAmount);
}
