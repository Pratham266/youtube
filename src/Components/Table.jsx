import React from 'react'
import ImageComponent from './ImageComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { removeUnsubscribeChannel } from '../redux';

const Table = ({data}) => {
  const dispatch = useDispatch();

  const handleUnsubscribe = (id)=>{
      dispatch(removeUnsubscribeChannel(id))    
  }

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
                <td><span className="badge rounded-pill bg-danger" style={{cursor:"pointer"}} onClick={()=>{handleUnsubscribe(item._id)}}>UNSUBSCRIBE</span></td>
              </tr>
            )
        }) } 
</>)
}

export default Table
