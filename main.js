const p = document.querySelector('p')
const h2 = document.querySelector('h2')
const submit = document.querySelector('input[name="submit"]')
const city = document.querySelector('input[name="city"]')
submit.addEventListener('click', () => {
    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city.value}?unitGroup=metric&key=X6KPZCB7QU36HPHVJDHGB9JVH&contentType=json`

    fetch(URL)
    .then(res => res.json())
    .then(data => {
        h2.innerText = data.address
        p.innerText = `${Math.ceil(data.currentConditions.temp)}°`
    })
    .catch(err => {
        if (city.value != "") {
            h2.innerText = 'Podałeś złe miasto!'
        }else {
            h2.innerText = 'Nie podałeś miasta!'
        }
        p.innerText = ""
    })
})
