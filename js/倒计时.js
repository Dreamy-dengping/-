
window.onload=function(){
function countDown() {
    var nowtime = new Date();
    var endtime = new Date("2020/09/17,23:00:00");
    var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);//转化为秒
    var day = parseInt(lefttime / 60 / 60 / 24);//天数
    var hour = parseInt(lefttime / 60 / 60 % 24)//小时数
    var second = parseInt(lefttime / 60 % 60)//分钟数
    var minutes = parseInt(lefttime % 60)//秒数
    day = addZero(day);
    hour = addZero(hour);
    second = addZero(second);
    minutes = addZero(minutes);
    var totaltime = day + '天' + hour + '时' + second + '分' + minutes + '秒';
    //var h2 = document.querySelector('h2');
    var hourss = document.querySelector('.hourss');
    var minutess = document.querySelector('.minutess');
    var secondss = document.querySelector('.secondss');

    //h2.innerHTML = totaltime;
    hourss.innerHTML = hour;
    minutess.innerHTML = second;
    secondss.innerHTML = minutes;


    var obj = {};
    obj.minutes = minutes;
    obj.lefttime = lefttime;
    return obj;

}
function addZero(time) {
    return time < 10 ? '0' + time : time;
}
var minutes = countDown().minutes;
var lefttime = countDown().lefttime;
console.log(minutes);
console.log(lefttime);
/* var times = countDown() */
/* console.log(times); */
var timer = setInterval(() => {
    /*  var lefttime = countDown().lefttime; */
    countDown()
    if (lefttime <= 0) {
        clearInterval(timer);
    }
}, 1000);
}