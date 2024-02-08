import React from 'react'
import ImageComponent from './ImageComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { removeUnsubscribeChannel } from '../redux';

const TableData = ({ data }) => {
  const dispatch = useDispatch();
  
  const handleUnsubscribe = (id) => {
    dispatch(removeUnsubscribeChannel(id))
  }

  return (
<tbody>
{data.map((item) => {
      return (
        <tr key={item.channelId}>
          <td>
            <ImageComponent
              src={item.avatarImage}
              alt={item.channelName}
              className={"border rounded-circle imag img-profile"}
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
          <td><span className="pointer_cursor badge rounded-pill bg-danger" onClick={() => { handleUnsubscribe(item.channelId) }}>UNSUBSCRIBE</span></td>
        </tr>
      )
    })}
    </tbody>
  )
}


export default TableData;
