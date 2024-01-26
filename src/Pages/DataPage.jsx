import React from "react";
import ListData from "../Components/ListData";
import Details from "../Components/Details";

const DataPage = () => {
  
  return (
    <div className="d-flex justify-content-center" style={{backgroundColor:"#686565"}}>
     <ListData/>
     <Details/>
     
    </div>
  );
};

export default DataPage;
