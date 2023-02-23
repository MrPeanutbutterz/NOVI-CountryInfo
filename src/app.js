import axios from 'axios';

const apiV2 = "https://restcountries.com/v2/all"
getApiData()

export async function getApiData() {

    //get data en transfer to countryData list

    try {

        const response = await axios.get(apiV2)
        return [...response.data]

    } catch (error) {
        console.error(error)
    }
}
