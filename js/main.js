let time_periods = document.querySelectorAll("time");
let timeStart, timeEnd;
for (let index = 0; index < time_periods.length; index++) {
    const element = time_periods[index];
    if (element.classList.contains("start")) {
        timeStart = new Date(element.attributes.item(1).value);
    }

    if (element.classList.contains("end")) {
        if (element.classList.contains("now")) {
            timeEnd = new Date();
        } else { timeEnd = new Date(element.attributes.item(1).value); }

        let periodElement = element.nextElementSibling;
        let dateSub = getDifferenceInDays(timeEnd, timeStart);
        let years = Math.floor(dateSub / 365);
        let months = Math.round((dateSub % 365) / 30);
        let periodValue = "";
        if (years > 0) {
            periodValue = periodValue + `${years} ${declOfYear(years)}`;
            if (months > 0) {
                periodValue += " ";
            }
        }
        if (months > 0) {
            periodValue = periodValue + `${months} ${declOfMonth(months)}`;
        }
        periodElement.innerText = periodValue;
    }
}

function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
}

function declOfNum(n, text_forms) {
    n = Math.abs(n) % 100;
    var n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 == 1) { return text_forms[0]; }
    return text_forms[2];
}

function declOfYear(num) {
    return declOfNum(num, ['год', 'года', 'лет']);
}

function declOfMonth(num) {
    return declOfNum(num, ['месяц', 'месяца', 'месяцев']);
}