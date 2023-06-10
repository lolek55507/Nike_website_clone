const thTextA = document.getElementById('thTextA');
const thTextB = document.getElementById('thTextB');
let i = 0;

function moveText() {
    if(i == 0) {
        thTextA.innerText = "Free Delivery & returns";
        thTextB.innerText = "Nike members get free Delivery and free 30 day returns";
        i++;
    }else if (i == 1) {
        thTextA.innerText = "Student Discount";
        thTextB.innerText = "10% off for students.";
        i--;
    }
    
}

setInterval(moveText, 1000);