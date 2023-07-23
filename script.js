//your JS code here. If required.
function updateTimer() {
  const timerElement = document.getElementById('timer');
  const currentDate = new Date();

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  timerElement.textContent = formattedDate;
}

// Update the timer every second
setInterval(updateTimer, 1000);
