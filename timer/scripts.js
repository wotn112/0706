const user_input = document.querySelector('input');
const user_button = document.querySelectorAll('button');
document.querySelector('h1').innerText = `0:00`;
document.querySelector('p').innerText = `Be Back at`;
let status = 0;
function timer(n){
    let sec = Number(n)*60*1000+1000;
    status = setInterval(function(){
    sec-=1000;
    if(sec <= 0){
        clearInterval(status);
    }
    displayTimeLeft(sec);
    }, 1000);
    displayEndTime(sec);
} 
function displayTimeLeft(sec){
    let remain = sec/1000;
    let min = parseInt(remain/60);
    let ss = remain%60;
    if(ss < 10){
        document.querySelector('h1').innerText = `${min}:0${ss}`;
        } else {
        document.querySelector('h1').innerText = `${min}:${ss}`;}
}
function displayEndTime(sec){
    let ee = Number(Date.parse(Date())) + Number(sec);
    let user_date = new Date(ee);
    let hh = user_date.getHours();
    let mm = user_date.getMinutes();
    if(mm < 10){
        document.querySelector('p').innerText = `Be Back at ${hh}:0${mm}`;
        } else {
        document.querySelector('p').innerText = `Be Back at ${hh}:${mm}`;
        }
}
user_input.addEventListener('keydown', function(e){
    if(e.keyCode == 13){
        e.preventDefault();
        clearInterval(status);
        let user_time = user_input.value;
        timer(user_time);
    }
});
[...user_button].forEach($ => $.addEventListener('click', function(){
        clearInterval(status);
        timer($.dataset['time']/60);
        }
    )
);
