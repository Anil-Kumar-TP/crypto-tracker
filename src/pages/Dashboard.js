import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header';
import TabsComponent from '../components/Dashboard/Tabs';
import axios from 'axios';
import Search from '../components/Dashboard/Search';
import  PaginationComponent  from '../components/Dashboard/Pagination';

function Dashboard () {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins,setPaginatedCoins] = useState([])
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value)
    let previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  }

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  }

  let filteredCoins = coins.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        setCoins((response.data));
        setPaginatedCoins(response.data.slice(0, 10));
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
      <TabsComponent coins={search ? filteredCoins : paginatedCoins} />
      {!search && <PaginationComponent page={page} handlePageChange={handlePageChange}/>}
    </div>
  )
};

export default Dashboard;