import React, { useEffect, useState } from 'react'
import TableData from './TableData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { giveKeysOfArrayOfObject } from '../Js/functionForData';

const Tabel = ({subscribedchannels,fieldNameForSorting,handelFilter,filter}) => {
 
  const scrollDiv = {scroll:{overflowY: "scroll",height: "545px"},tb:{height: "35px",width: "35px",}};

  return (
    <div style={scrollDiv.scroll} className='scrollbar-ripe-malinka mx-2'>
       <table className="table table-hover border-black" >
        <thead>
          <tr>
            <th scope="col">Profile</th>
            <th
              scope="col"
              onClick={() => {
                handelFilter(fieldNameForSorting[0]);
              }}
            >
              <span className="me-2">Name</span>
              {getIcons(fieldNameForSorting[0],filter)}
            </th>
            <th scope="col">Premium</th>
            <th
              scope="col"
              onClick={() => {
                handelFilter(fieldNameForSorting[1]);
              }}
            >
              <span className="me-2">Subscribers</span>
              {getIcons(fieldNameForSorting[1],filter)}
            </th>
            <th>
              
            </th>
          </tr>
        </thead>
          <TableData data={subscribedchannels} />  
    </table>
    </div>
  )
}

const getIcons = (label,filter) => {

    if(label === 'channelName'){
      if(filter.name === 'asc'){
        return <FontAwesomeIcon icon={faSortUp} />
      }else{
        return <FontAwesomeIcon icon={faSortDown} />
      }
    }
    
    if(label === 'subscribersCount'){
      if(filter.subscribers === 'asc'){
        return <FontAwesomeIcon icon={faSortUp} />
      }else{
        return <FontAwesomeIcon icon={faSortDown} />
      }
    }
  };
export default Tabel
