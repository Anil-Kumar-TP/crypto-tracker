import axios from "axios";

export const getCoinPrices = (id, days,priceType) => {
    const prices = axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
        .then((response) => {
            return response.data[priceType];   //response.data returns prices,total_volume,market_cap
        })                                  // so we can fetch accordingly when the toggle btn changes and dynamically 
        .catch((error) => {                 //fetch the data and display on graph.
            console.log("Error", error);
        });
    
    return prices;
};