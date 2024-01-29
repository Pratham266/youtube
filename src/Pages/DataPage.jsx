import React from "react";
import ListData from "../Components/ListData";
import Details from "../Components/Details";
import ErrorBoundary from "../Components/ErrorBoundary";
import ErrorText from "../Components/ErrorText";



const DataPage = () => {
  
  return (

    <div className="d-flex justify-content-center" style={{backgroundColor:"#686565"}}>
      <div className="p-2 w-25 border-dark m-2 bg-primary rounded">
          <ListData/>
      </div>

     <div className="p-2 w-75 border m-2 border-dark rounded bg-primary ">
        <ErrorBoundary fallback={<p style={{color:"red",fontStyle:"italic"}}>Error Occured</p>}>
        <Details/>
        </ErrorBoundary>
     </div>
    </div>

  );
};

export default DataPage;
