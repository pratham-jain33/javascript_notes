function showTime() {
    const timeElement = document.getElementById("time");
    const now = new Date();
    const timeString = now.toLocaleTimeString(); 
    timeElement.textContent = timeString; // Update the HTML content
}

//update time every second
setInterval(showTime, 1000);
