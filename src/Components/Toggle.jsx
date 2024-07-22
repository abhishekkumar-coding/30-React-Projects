import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = ()=>{
    setToggle(!toggle)
    console.log(!toggle)
  }
  return (
    <div>
      <input onChange={handleToggle} type="checkbox" className="w-8 text-2xl" />
      <p className="text-2xl">{toggle ? "On" : "Off" }</p>
    </div>
  );
}

export default Toggle;
