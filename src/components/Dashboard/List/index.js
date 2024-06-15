import React from 'react';
import './styles.css';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import { Tooltip } from '@mui/material';
import { convertNumbers } from '../../../functions/convertNumbers';

function List({coin}) {
  return (
    <tr className='list-row'>
      <Tooltip title='coin logo'>
           <td className="td-image">
              <img src={coin.image} alt="" className='coin-logo' />
        </td>
      </Tooltip>
      <Tooltip title='coin info' placement='bottom-start'>
          <td>
            <div className='name-col'>
                    <p className='coin-symbol'>{coin.symbol}</p>
                    <p className='coin-name'>{coin.name}</p>
                </div>
        </td>
      </Tooltip>
      <Tooltip title='price change in 24hrs' placement='bottom-start'>
            {coin.price_change_percentage_24h > 0 ? (<td className='chip-flex'>
                <div className='price-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                <div className='icon-chip td-icon'><TrendingUpRoundedIcon/></div>
            </td>
            ) : (
                <td className='chip-flex'>
                    <div className='price-chip chip-red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                     <div className='icon-chip chip-red td-icon'><TrendingDownRoundedIcon/></div>   
                </td>
            )}
            </Tooltip>
          <Tooltip title='current price'>
          <td>
              <h3 className='coin-price td-center-align' style={{ color: coin.price_change_percentage_24h < 0 ? 'var(--red)' : 'var(--green' }}>${coin.current_price.toLocaleString()}</h3>
        </td>
      </Tooltip>
      <Tooltip title='total volume' placement='bottom-end'>
            <td>
              <p className='total_volume td-right-align td-total-volume'>{coin.total_volume.toLocaleString()}</p>
      </td>
      </Tooltip>
                
      <Tooltip title='market cap' placement='bottom-end'>
          <td className='desktop-td-mkt'>
             <p className='total_volume td-right-align'>${coin.market_cap.toLocaleString()}</p> 
        </td>
        </Tooltip>
      <Tooltip title='market cap' placement='bottom-end'>
          <td className='mobile-td-mkt'>
             <p className='total_volume td-right-align'>${convertNumbers(coin.market_cap.toLocaleString())}</p> 
        </td>
        </Tooltip>
      </tr>
  )
};

export default List;