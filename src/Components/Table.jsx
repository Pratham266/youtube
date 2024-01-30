import React from 'react'
import ImageComponent from './ImageComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

const Table = ({data}) => {

   return(<>
        {data.map((item)=>{

            return(
                <tr key={item._id}>
                <td>
                  <ImageComponent
                    src={item.avatarImage}
                    style={{ height: "35px", width: "35px"}}
                    alt={item.channelName}
                    className={"border rounded-circle"}
                  />
                </td>
                <td>{item.channelName}</td>
                <td>
                  {item.isPremium ? (
                    <FontAwesomeIcon icon={faCheck} />
                  ) : (
                    <FontAwesomeIcon icon={faXmark} />
                  )}
                </td>
                <td>{item.subscribersCount}</td>
              </tr>
            )
        }) } 
</>)
}

export default Table
