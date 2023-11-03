let enddate = "10 june 2023 10:00 pm";
document.getElementById("end-date").innerHTML= enddate; 
//this is just to link your html to javascript so hum yaha jo time set kr wahi wahape show ho. 
let inputs = document.querySelectorAll("input");


function clock(){
    let end = new Date("10 june 2023 10:00 pm"); //hum yahape direct aise date dalke upar wala step avoid kr skte hai.
    // let end  = new Date(enddate); or aise upar wale variable se input leke bhi kr skte hai.
    let newdate = new Date();
    let diff = (end - newdate) / 1000;
    console.log(diff);
    

if (diff < 0) return;


    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600 % 24);
    inputs[2].value = Math.floor(diff / 60) % 24;
    inputs[3].value = Math.floor(diff) % 60;
}

setInterval(() => {
    clock()
}, 1000);

