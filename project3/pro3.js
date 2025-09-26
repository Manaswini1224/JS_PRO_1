 const clock = document.querySelector('#clock');

setInterval(function() {
    let date = new Date();
    
    let currentDate = date.toLocaleDateString();   
    let currentTime = date.toLocaleTimeString();   

    clock.innerHTML = `${currentDate} — ${currentTime}`;
}, 1000);
