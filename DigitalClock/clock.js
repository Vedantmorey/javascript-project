setInterval(()=>{
const date = new Date().toLocaleTimeString();
const clock = document.querySelector('#clock');
clock.innerHTML=date;
},1000);
