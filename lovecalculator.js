//LOVE CALCULATOR

prompt("enter your name");
prompt("enter your partners name");
var lovepercentage = Math.random()*100;
lovepercentage = Math.floor(lovepercentage) + 1;
if (lovepercentage > 70 && lovepercentage < 30){
    alert("Your Lovepercentage is" + lovepercentage + "% You both made for eachother");
}else(
    alert("Your Lovepercentage is" + lovepercentage + "%");
)
