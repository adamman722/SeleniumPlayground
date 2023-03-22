import React from "react";

function DefaultCard(props) {
  const styles = {
    border: "2px solid white",
    width: "40%",
    margin: "auto",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: " 10px 5px 5px #800020",
  };
  return <div style={styles}>{props.children}</div>;
}

export default DefaultCard;
