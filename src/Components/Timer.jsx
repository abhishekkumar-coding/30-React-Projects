import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(10);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime(time-1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [time]);

  return <div>Set Timer: {time}</div>;
}

export default Timer;
