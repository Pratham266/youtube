import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Bell = ({ dataId }) => {
  const [bell, setBell] = useState(false);
  const handleBell = (id) => {
    setBell(true);

    setTimeout(() => {
      setBell(false);
    }, 1000);
  };


  return (
    <>
      {bell ? (
        <FontAwesomeIcon
          icon={faBell}
          shake
          className="bell_icon_befor"
         
        />
      ) : (
        <FontAwesomeIcon
          icon={faBell}
          className="bell_icon_after"
          
          onClick={() => {
            handleBell(dataId);
          }}
        />
      )}
    </>
  );
};

export default Bell;
