
const weatherD = document.querySelector('#weather');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=6.45&lon=3.54&units=imperial&appid=5ab482f123bcc24f80f6bd9c536bd337'; 

async function apiFetch() {
    try {
        let response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data)

        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

};
function displayResults(data) {
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
    let desc = data.weather[0].description;

    const weatherIcon = document.createElement('img');
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;


    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('loading', 'lazy');
    weatherIcon.setAttribute('width', '20');
    weatherIcon.setAttribute('height', '20');


    span1.appendChild(weatherIcon);
    span2.innerHTML = `  ${data.main.temp}&deg;F`;
    span3.innerHTML = ` - ${desc}`;


    weatherD.appendChild(span1)
    weatherD.appendChild(span2)
    weatherD.appendChild(span3)

}


apiFetch()