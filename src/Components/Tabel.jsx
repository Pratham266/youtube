import React from 'react'
import TableData from './TableData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

const Tabel = ({ config, subscribedchannels, handelFilter, filter, getIcons }) => {

  return (
    <div className='malinka mx-2'>
      <table className="table table-hover border-black" >
        <thead>
          <tr>
            {config.map((col) => {
              return (
                col?.sortable ? <th scope="pointer_cursor col" key={col?.parameter} onClick={() => { handelFilter(col?.parameter); }}>
                  <span className="me-2 pointer_cursor">{col?.label}</span>
                  {getIcons(col?.parameter, filter)}
                </th>
                  :
                  <th scope="col" key={col?.parameter}>{col?.label}</th>
              )
            })}
          </tr>

        </thead>
        <TableData data={subscribedchannels} config={config} />
      </table>

    </div>
  )
}

export default Tabel
