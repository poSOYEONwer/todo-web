const calendar = document.getElementById("calendar");
const dates = document.getElementById("dates");
const monthYear = document.getElementById("title");
const months = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
];

let today = function() {
    let now = new Date();
    return {
        year: now.getFullYear(),
        month: now.getMonth(),
        day: now.getDate(),
    };
};

let current = {
    month: today().month,
    year: today().year
};

let firstDay = function(Month, Year) {
    return new Date(Year, Month).getDay();
};

let daysInMonth = function(Month, Year) {
    return 32 - new Date(Year, Month, 32).getDate();
};

let lastDay = function(Month, Year) {
    if (Month - 1) {
        return daysInMonth(Month - 1, Year);
    } else {
        return daysInMonth(Month - 1, Year - 1);
    }
};

let dayCreate = function(text, today = false, current = true) {
    let dayDiv = document.createElement("div");

    if (!current) {
        dayDiv.className += " gray";
    }
    dayDiv.innerText = text;
    if (today) {
        dayDiv.className += " today";
    }
    dayDiv.className += " dayBox";
    dates.appendChild(dayDiv);
};

let monthText = function(Month, Year) {
    let text = Year + "년" + " " + months[Month];
    monthYear.innerText = text;
};

let render = function(Month, Year) {
    monthText(Month, Year);
    let highlightToday = false;
    if (Month == today().month && Year == today().year) {
        highlightToday = true;
    }
    let start = firstDay(Month, Year);
    let amount = daysInMonth(Month, Year);
    let prev = lastDay(Month, Year);
    let total = 0;
    for (let i = 0; i < start; i++) {
        dayCreate(prev - (start - i) + 1, false, false);
        total++;
    }
    for (let i = 0; i < amount; i++) {
        if (highlightToday && i + 1 === today().day) {
            dayCreate(i + 1, true);
        } else {
            dayCreate(i + 1);
        }
        total++;
    }
    if (35 - total) {
        let remaining = 35 - total;
        for (let i = 0; i < remaining; i++) {
            dayCreate(i + 1, false, false);
        }
    }
    if (total > 35) {
        dates.style.gridTemplate = "repeat(6, ifr) / repeat(7, 1fr)";
        let remaining = 42 - total;
        for (let i = 0; i < remaining; i++) {
            dayCreate(i + 1, false, false);
        }
    }
};

render(current.month, current.year);
