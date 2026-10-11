function formatTimeForTimezone(timezone) {
	const now = new Date();
	const formatter = new Intl.DateTimeFormat('en-US', {
		timeZone: timezone,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit',
		hour12: true
	});

	return formatter.format(now);
}

function updateLiveTimes() {
	const timeEls = document.querySelectorAll('.live-time');
	timeEls.forEach(el => {
		const timezone = el.dataset.timezone;
		el.textContent = formatTimeForTimezone(timezone);
	});
}

updateLiveTimes();
setInterval(updateLiveTimes, 1000);
