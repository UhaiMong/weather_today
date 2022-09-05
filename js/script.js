// e77ede0c44cc2c609879f7296f5e9334
const api_key = `e77ede0c44cc2c609879f7296f5e9334`;
const loadTemperature = async city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    displayTemperature(data.main);
}
const displayTemperature = (temperature) => {
    console.log(temperature);
    const temp = document.getElementById('temperature');
    temp.innerText = `${temperature.temp}`;
}
loadTemperature('Dhaka');