import React from 'react'
import ImageComponent from './ImageComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { removeUnsubscribeChannel } from '../redux';
import { checkLabelExists } from '../Js/functionForData';

const TableData = ({ data, config }) => {
  const dispatch = useDispatch();

  const handleUnsubscribe = (id) => {
    dispatch(removeUnsubscribeChannel(id))
  }

  return (
    <tbody>
      {data.map((item, index) => {
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
            {checkLabelExists('unsubscribe', config) && <td><span className="pointer_cursor badge rounded-pill bg-danger" onClick={() => { handleUnsubscribe(item.channelId) }}>UNSUBSCRIBE</span></td>}
          </tr>
        )
      })}
    </tbody>
  )
}


export default TableData;
