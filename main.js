const p = document.querySelector('p')
const submit = document.querySelector('input[name="submit"]')
const city = document.querySelector('input[name="city"]')
submit.addEventListener('click', () => {
    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city.value}?unitGroup=metric&key=X6KPZCB7QU36HPHVJDHGB9JVH&contentType=json`

    fetch(URL)
    .then(res => res.json())
    .then(data => console.log(data.currentConditions.temp))
    .catch(err => console.log(err))
})
