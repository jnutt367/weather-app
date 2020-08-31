
const api = {
	key: "c5a5b9545c8fdcc3e856b6a40d148783",
	base: "https://api.openweathermap.org/data/2.5/"
	}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
	if (evt.keyCode == 13) {
		getResults(searchbox.value);
		console.log(searchbox.value);
	}
}

function getResults (query) {
	fetch(`${api.base}weather?q=${query}weather?q=&imperial&APPID=${api.key}`)
	.then(weather => {
		return weather.json();
	}).then(displayResults);
}



function displayResults (weather){
	console.log(weather);
}
