const secondHand=document.querySelector('.second-hand');
const minuteHand=document.querySelector('.minute-hand')
const hourHand=document.querySelector('.hour-hand')
function setDate() {
    const now=new Date();
    const seconds=now.getSeconds();
    const secondsDegrees=((seconds/60)*360)+90;
    secondHand.style.transform= `rotate(${secondsDegrees}deg)`;
    console.log(seconds);
    const minutes=now.getMinutes()
    const minuteDegrees=((minutes/60)*360)+90
    minuteHand.style.transform=`rotate(${minuteDegrees}deg)`
    const hours=now.getHours()
    const hoursDegrees=((hours/12)*360)+90
    hourHand.style.transform=`rotate(${hoursDegrees}deg)`
}
setInterval(setDate,1000);
