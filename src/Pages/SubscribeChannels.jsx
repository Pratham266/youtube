import React from 'react'

const SubscribeChannels = () => {
  return (
    <>
    <div className='bg-black m-2'>
      <h1 className='text-center text-white'>subscibed channels</h1>
    </div>
<table className="table table-hover border-black">
  
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Premium</th>
      <th scope="col">Column heading</th>
    </tr>
  </thead>

  <tbody>
  
    <tr>
      <th scope="row">Default</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
 
  </tbody>
</table>
</>
  )
}

export default SubscribeChannels
