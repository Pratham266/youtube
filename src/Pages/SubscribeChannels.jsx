import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Tabel from "../Components/Tabel";

const SubscribeChannels = (props) => {

  const { subscribedchannels } = props.userState;
  const fieldNameForSorting = ['channelName', 'subscribersCount']
  const [page,setPage]=useState(1);

  const [filter,setFilter] = useState({name:'asc',subscribers:'desc'})

  useEffect(() => {
    console.log("in subscribe channel  :",page,filter.name,filter.subscribers)
    props.getSubscribedData(page,filter.name,filter.subscribers);
  }, [page,filter]);

  
  let pageDemo = 1;
  const pages = [];

  while (pageDemo <= props.userState?.page) {
    pages.push(pageDemo);
    pageDemo++; 
  }
  const handleSetPageInc =()=>{
    if(page===props.userState?.page) return;
    setPage((prev)=>prev+1)
  }
  
  const handleSetPageDec=()=>{
    if(page===1) return;
    setPage((prev)=>prev-1)
  }

  const handelFilter=(fieldname)=>{

    console.log(fieldname)
    if(fieldname === 'channelName'){
      let setOrder = filter.name === 'asc'?'desc':'asc';
      setFilter((prev)=>({...prev,name:setOrder}))
    }

    if(fieldname === 'subscribersCount'){
      let setOrder = filter.subscribers === 'desc'?'asc':'desc';
      console.log(setOrder)
      setFilter((prev)=>({...prev,subscribers:setOrder}))
      console.log(filter)
    }

  }

  if (props.userState?.status === 'pending') {
    return <Loader />;
  }

  return (
    <>
      <div className="bg-black m-2">
        <h1 className="text-center text-white">subscibed channels</h1>
      </div>
      {subscribedchannels.length === 0?<h1 className="text-white">No Subscribed Channels Yet!</h1>
      :
      <>
       <Tabel subscribedchannels={subscribedchannels} fieldNameForSorting={fieldNameForSorting} handelFilter={handelFilter} filter={filter}/>      
        <ul className="pagination pagination-sm mx-2">
          <li className="page-item" onClick={handleSetPageDec}>
            <p className="page-link" style={{cursor:'pointer'}}>&laquo;</p>
          </li>

          {pages.map((item)=>{
              return(
                <>
                <li className={`page-item ${item === page ? 'active':''}`} key={item}>
                  <p className="page-link">{item}</p>
                </li>
                </>)
          })}

          <li className="page-item " onClick={handleSetPageInc}>
            <p className="page-link" style={{cursor:'pointer'}}>&raquo;</p>
          </li>

        </ul>
      </>}

     
    </>
  );
};

export default SubscribeChannels;

