
let time = 20;
if(time > 0 && time <= 12) console.log("Xayrli tong");
else if(time > 12 && time <= 18)  console.log("Xayrli kun");
else     console.log("Xayrli tun");

time > 0 && time <= 12 ? console.log("Xayrli tong") : time > 12 && time <= 18 ? console.log("Xayrli kun") : console.log("Xayrli tun");

