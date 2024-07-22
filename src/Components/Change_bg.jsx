import React, { useState } from "react";

function Change_bg() {
  const [backgroundColor, setBackgroundColor] = useState("black");

  const handleColor = ()=>{
    const newBackgrounColor = backgroundColor ==="black" ? "lightBlue" : "yellow";
    setBackgroundColor(newBackgrounColor)

  }
  return (
    <div onClick={handleColor}
      style={{
        backgroundColor,
        width: "100%",
        height: "100vh",
      }}
    >
      Change_bg
    </div>
  );
}

export default Change_bg;
