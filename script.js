const date = document.getElementById("date")
const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById("year")

const today = new Date();
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let thisMonth =  months[today.getMonth()];
let thisDay =  weekdays[today.getDay()];


date.innerHTML = today.getDate();
day.innerHTML = thisDay
month.innerHTML = thisMonth
year.innerHTML = today.getFullYear();

