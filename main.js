const btn = document.querySelector("button");
const message = document.querySelector(".message");

const yearText = document.querySelector(".yearCalc");
const monthText = document.querySelector(".monthCalc");
const dayText = document.querySelector(".dayCalc");
let errors = [];

btn.addEventListener("click", (evnt) => {
	message.style.display = "none";
	let errors = [];
	let dayValue = document.getElementById("day").value;
	if (dayValue > 31 || dayValue < 0 || parseInt(dayValue) !== parseInt(dayValue)) {
		errors.push(false);
		message.textContent = "Error: Unvalid Day";
		message.style.display = "block";
		evnt.preventDefault();
	}
	let monthValue = document.getElementById("month").value;
	if (monthValue > 12 || monthValue < 0 || parseInt(monthValue) !== parseInt(monthValue)) {
		errors.push(false);
		message.textContent = "Error: Unvalid Month";
		message.style.display = "block";
		evnt.preventDefault();
	}
	let yearValue = document.getElementById("year").value;
	if (parseInt(yearValue) !== parseInt(yearValue)) {
		errors.push(false);
		message.textContent = "Error: Unvalid Year";
		message.style.display = "block";
		evnt.preventDefault();
	}
	if (!(errors.includes(false))) {
		let currentDate = new Date();
		let userYear = currentDate.getFullYear() - parseInt(yearValue);
		let userMonth;
		if (currentDate.getMonth() < parseInt(monthValue)) {
			userMonth = 12 - parseInt(monthValue) + currentDate.getMonth();
			userYear--;
		}
		else {
			userMonth = currentDate.getMonth() - parseInt(monthValue);
		}
		let userDay;
		if (currentDate.getDay() < parseInt(dayValue)) {
			userDay = 30 - parseInt(dayValue) + currentDate.getDay();
			userMonth--;
		}
		else {
			userDay = currentDate.getDay() - parseInt(dayValue);
		}
		let yearCounter = 1;
		let yearInt = setInterval(function() {
			if (yearCounter <= userYear) {
				yearText.textContent = yearCounter;
				yearCounter++;
			}
			else {
				clearInterval(yearInt);
			}
		}, 500 / userYear);

		let monthCounter = 1;
		let monthInt = setInterval(function() {
			if (monthCounter <= userMonth) {
				monthText.textContent = monthCounter;
				monthCounter++;
			}
			else {
				clearInterval(monthInt);
			}
		}, 500 / userMonth);

		let dayCounter = 1;
		let dayInt = setInterval(function() {
			if (dayCounter <= userDay) {
				dayText.textContent = dayCounter;
				dayCounter++;
			}
			else {
				clearInterval(dayInt);
			}
		}, 500 / userDay);
	}
	else {
		yearText.textContent = "--";
		monthText.textContent = "--";
		dayText.textContent = "--";
	}
})

// 21/5 /2024
// 2 /7 /2008