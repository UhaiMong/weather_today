// e77ede0c44cc2c609879f7296f5e9334
const api_key = `e77ede0c44cc2c609879f7296f5e9334`;
const loadTemperature = async city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayTemperature(data);
    }
    catch {
        console.log(Error);
    }
}
const displayTemperature = (data) => {
    // const temp = document.getElementById('temperature');
    // temp.innerText = `${data.main.temp}`;
    setInerText('temperature', data.main.temp);
    setInerText('cloud', data.weather[0].main);

    console.log(data.weather[0].main);
}

const setInerText = (id, text) => {
    const temp = document.getElementById(id);
    temp.innerText = text;
}

document.getElementById('search-btn').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    document.getElementById('city-name').innerText = city;

    loadTemperature(city);
});
loadTemperature('Dhaka');