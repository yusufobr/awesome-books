function getOrdinalSuffix(day) {
  const j = day % 10;
  const k = day % 100;
  if (j === 1 && k !== 11) {
    return 'st';
  }
  if (j === 2 && k !== 12) {
    return 'nd';
  }
  if (j === 3 && k !== 13) {
    return 'rd';
  }
  return 'th';
}

function addLeadingZero(number) {
  return (number < 10 ? '0' : '') + number;
}

function getCurrentDateTime() {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const date = new Date();
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours %= 12;
  hours = hours || 12;
  const time = `${month} ${day}${getOrdinalSuffix(day)} ${year},  ${hours}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)} ${ampm}`;
  return time;
}

const currentDateTime = getCurrentDateTime();

document.getElementById('show-date').innerHTML = currentDateTime;