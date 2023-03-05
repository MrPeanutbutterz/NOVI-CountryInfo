import { getAllApiData } from "./app";

dataFilter()
async function dataFilter() {

    //filters data

    let data = await getAllApiData()
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
}

function regionColor(region) {

    //returns color code for a region

    switch (region) {
        case "Africa": { return "#0000FF" }
        case "Americas": { return "#4b814b" }
        case "Asia": { return "#cf4d5b" }
        case "Europe": { return "#fdd236" }
        case "Oceania": { return "#a552ba" }
        default: { return "#494949" }
    }
}

function pushToHtml(list) {

    //push list to html

    const htmlList = document.getElementById("country-list")

    list.forEach((item) => {

        const htmlListItem = document.createElement("li")

        const flag = document.createElement("img")
        flag.setAttribute("class", "country-flag")
        flag.src = item.flag
        flag.alt = "a country flag"
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

        htmlList.appendChild(htmlListItem)
    })
}
