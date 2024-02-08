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

  const style={
    iconBefore:{ color: "#FFD43B", height: "40px", marginLeft: "10px" },
    iconAfter:{
      color: "#FFD43B",
      height: "40px",
      marginLeft: "10px",
      cursor: "pointer",
    }
  }

  return (
    <>
      {bell ? (
        <FontAwesomeIcon
          icon={faBell}
          shake
          style={style.iconBefore}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBell}
          style={style.iconAfter}
          onClick={() => {
            handleBell(dataId);
          }}
        />
      )}
    </>
  );
};

export default Bell;
