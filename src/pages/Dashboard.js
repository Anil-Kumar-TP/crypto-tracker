import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header';
import TabsComponent from '../components/Dashboard/Tabs';
import axios from 'axios';
import Search from '../components/Dashboard/Search';

function Dashboard () {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  }

  let filteredCoins = coins.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        setCoins((response.data));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header />  
      <Search search={search} onSearchChange={onSearchChange}/>
      <TabsComponent coins={filteredCoins} />
    </div>
  )
};

export default Dashboard;