import axios from 'axios';

export async function getAllApiData() {

    //get data

    try {

        const response = await axios.get('https://restcountries.com/v2/all')
        return [...response.data]

    } catch (error) {
        console.error(error)
    }
}