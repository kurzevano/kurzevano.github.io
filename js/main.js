let time_periods = document.querySelectorAll("time");
let timeStart, timeEnd;
for (let index = 0; index < time_periods.length; index++) {
    const element = time_periods[index];
    if (element.classList.contains("start")) {
        timeStart = new Date(element.attributes.item(1).value);
    }

    if (element.classList.contains("end")) {
        timeEnd = new Date(element.attributes.item(1).value);
        let period = `${timeStart}-${timeEnd}`;
        let sib = element.nextElementSibling;
        let dateSub = getDifferenceInDays(timeEnd, timeStart);
        let years = Math.floor(dateSub / 365);
        let months = Math.round((dateSub % 365) / 30);
        sib.innerText = `${years} лет ${months} месяцев`;
    }
}

function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
}