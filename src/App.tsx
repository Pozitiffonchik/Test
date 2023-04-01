import { useState } from "react";
import Img from "./Img";

function App() {
  // Img();
  let allTitle = "";
  fetch("https://api.insidetrak.com/homepage/get-latest-images")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.data.length; i++) {
        allTitle = data.data[i].title;
        console.log(allTitle);
      }
    });
  return (
    <div>
      <div id="t">allTitle</div>
    </div>
  );
}
export default App;
