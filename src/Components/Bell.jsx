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
          style={{ color: "#FFD43B", height: "40px", marginLeft: "10px" }}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBell}
          style={{
            color: "#FFD43B",
            height: "40px",
            marginLeft: "10px",
            cursor: "pointer",
          }}
          onClick={() => {
            handleBell(dataId);
          }}
        />
      )}
    </>
  );
};

export default Bell;
