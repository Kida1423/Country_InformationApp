import axios from "axios";

const API_BASE_URL = "https://restcountries.com/v3.1";

export interface Country{
    name: {common: string};
    capital?:string[];
    population: number;
    borders?:string;
    cca3:string;
}

export const fetchAllCountries =  async (): Promise<Country[]> => {
    try {
        const response = await axios.get<Country[]>(`${API_BASE_URL}/all`);
        return response.data
    } catch (error) {
        console.error("Error: ", error);
        return []
    }
}