const card = document.querySelector('.card')
const weatherApp = document.querySelector('.WeatherApp');
const p = document.createElement('p')
const h2 = document.createElement('h2')
const submit = document.querySelector('input[name="submit"]')
const city = document.querySelector('input[name="city"]')
submit.addEventListener('click', () => {
    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city.value}?unitGroup=metric&key=X6KPZCB7QU36HPHVJDHGB9JVH&contentType=json`

    fetch(URL)
    .then(res => res.json())
    .then(data => {
        card.prepend(h2)
        h2.style.color = 'white'
        h2.innerText = data.address
        weatherApp.append(p)
        p.innerText = `${Math.ceil(data.currentConditions.temp)}°`
    })
    .catch(err => {
        if (city.value != "") {
            card.prepend(h2)
            h2.style.color = 'red'
            h2.innerText = 'Podałeś złe miasto!'
        }else {
            card.prepend(h2)
            h2.style.color = 'red'
            h2.innerText = 'Nie podałeś miasta!'
        }
        p.innerText = ""
    })
})

city.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        submit.click()
    }
})
