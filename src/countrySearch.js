import axios from "axios";

const button = document.getElementById("submit-button")
button.addEventListener("click", search);

async function search() {

    //get api data

    const userInput = document.getElementById("search-input").value
    const baseUrl = 'https://restcountries.com/v2/name/' + userInput + '?fullText=true'

    if (userInput) {
        console.log("User searching for: " + userInput)
    }

    try {

        const apiData = await axios.get(baseUrl)
        foundHTML(apiData.data)

    } catch (e) {

        if (e.response.data.status === 404) {
            errorHTML()

        } else {
            console.log(e)
        }
    }
}

function foundHTML(object) {

    //prints to html the country found

    const {name, flag, subregion, population, capital, currencies} = object[0]
    const countryInfo = document.getElementById("country-info")

    if (currencies.length === 1) {

        countryInfo.innerHTML =
            `
        <img src="${flag}" alt="Flag of ${name}" class="flag"/>
        <h1>${name}</h1>
        <p>"${name} is situated in ${subregion}.</p> 
        <p>It has a population of ${population} people"</p>
        <p>The capital is ${capital}, and you can pay with ${currencies[0].name}'s</p>
        `

    } else {

        countryInfo.innerHTML =
            `
        <img src="${flag}" alt="Flag of ${name}" class="flag"/>
        <h1>${name}</h1>
        <p>${name} is situated in ${subregion}.</p> 
        <p>It has a population of ${population} people"</p>
        <p>The capital is ${capital}, and you can pay with ${currencies[0].name}'s and ${currencies[1].name}'s</p>
        `

    }
}

function errorHTML() {

    //prints to html unknown country

    const countryInfo = document.getElementById("country-info")
    countryInfo.innerHTML = `<h1>is that even a country🤔</h1>`
}