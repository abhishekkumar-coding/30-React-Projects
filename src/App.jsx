import React from "react";
import Toggle from "./Components/Toggle";
import Fetch from "./Components/Fetch";
import Timer from "./Components/Timer";
import To_Do from "./Components/To_Do";
import Change_bg from "./Components/Change_bg";
import ReactRouter from "./Components/ReactRouter";
import RandomQoutes from "./Components/RandomQoutes";
import ImageUploader from "./Components/ImageUploader";

function App() {
  return (
    <div className="m-auto w-[1200px]">
      <ImageUploader/>
    </div>
  );
}

export default App;
