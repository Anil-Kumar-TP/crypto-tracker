import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { coinObject } from '../functions/convertObject';
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';
import List from '../components/Dashboard/List';

function CoinPage () {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [coinData, setCoinData] = useState();

    useEffect(() => {
        if (id) {
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
                .then((response) => {
                    console.log("Response", response);
                    coinObject(setCoinData, response.data);
                     setIsLoading(false);
                })
                .catch((error) => {
                    console.log("Error", error);
                    setIsLoading(false)
                });
        }

        }, [id]);
  return (
      <div>
          <Header />
          {isLoading ? <Loader /> : 
              <>
                <div className='grey-wrapper'>
                    <List coin={coinData}/>
                </div>
              </>
          }
    </div>
  )
}

export default CoinPage;