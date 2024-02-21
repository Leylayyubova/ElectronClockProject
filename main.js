const time = document.getElementById("current-time");
setInterval(() => {
const d= new Date();

time.innerHTML =d.toLocaleTimeString();
},1000)

