// console.log("hi")
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const analog = document.querySelector('.analog');


// time();
async function setDate(){
    const now = new Date();
    const seconds = now.getSeconds()
    const min = now.getMinutes();
    const hour = now.getHours();
    console.log(seconds)
    const secondDeg = ((seconds/60)*360)+90;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    const minuteDeg = (((min/60)*360)+90)+(seconds/60)*6;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

    const hourDeg = (((hour/12)*360)+90)+(min/60)*30;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

    displayTime(seconds,min,hour);
}
setInterval(setDate, 1000)
setDate()
function displayTime(seconds,min,hour){
    analog.innerHTML=''
    analog.innerHTML+=
    `
        <div class="hour">Hour ${hour }</div>
        <div class="minute">Minute ${min}</div>
        <div class="second">Second ${seconds}</div>
    `
}
displayTime()