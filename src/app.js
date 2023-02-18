import axios from 'axios';

const apiV2 = "https://restcountries.com/v2/all"
getApiData()

async function getApiData() {

    //get data en transfer to countryData list

    try {

        const response = await axios.get(apiV2)
        let apiData = [...response.data]
        sortData(apiData)

    } catch (error) {
        console.error(error)
    }
}

function sortData(data) {

    //constructs an object of the data en sorts it

    let list = []

    for (let item of data) {

        list.push({
            name: item.name,
            flag: item.flag,
            population: item.population,
            color: regionColor(item.region)
        })

    }

    list.sort((a, b) => { return a.population - b.population})
    pushToHtml(list)
    //consoleLogger(list)
}

function consoleLogger(something) {

    //tmp for logging to console

    something.forEach((item) => {
        console.log(item)
    })
}

function regionColor(region) {

    //returns color code for a region

    switch (region) {
        case "Africa": { return "#0000FF" }
        case "Americas": { return "#008000" }
        case "Asia": { return "#FF0000" }
        case "Europe": { return "#d9a801" }
        case "Oceania": { return "#800080" }
        default: { return "#494949" }
    }
}

function pushToHtml(list) {

    //push list to html

    const htmlList = document.getElementById("country-list")
    const htmlListItem = document.createElement("li")

    list.forEach((item) => {

        const flag = document.createElement("img")
        flag.setAttribute("class", "country-flag")
        flag.src = item.flag
        htmlListItem.appendChild(flag)

        const name = document.createElement("span")
        name.setAttribute("class", "country-name")
        name.innerText = item.name
        name.style.color = item.color
        htmlListItem.appendChild(name)

        const population = document.createElement("p")
        population.setAttribute("class", "country-population")
        population.innerText = "Has a population of " + item.population + " people"
        htmlListItem.appendChild(population)
    })
    htmlList.appendChild(htmlListItem)
}