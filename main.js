let text = document.querySelector('.text p');
text.innerHTML = text.innerText.split("").map((char,i) =>
`<b style="transform:rotate(${i*8}deg)">${char}</b>`).join("");

let listener = document.getElementsByTagName('body')[0];
let textElemt = document.getElementsByClassName('text')[0];
let flag = true;

const rotatingStyle = document.createElement('style');
const rotation1 = `@keyframes animateText {
        0% {
            transform: rotate(360deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }`
const rotation2 = `@keyframes animateText {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }`


listener.onclick = function ()
{
    flag = !flag;
    if (flag) {
        rotatingStyle.innerHTML = rotation1;
    } else {
        rotatingStyle.innerHTML = rotation2;
    }
    textElemt.appendChild(rotatingStyle);
}

