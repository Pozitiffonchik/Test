import App from "./App";
import { useState } from "react";

function Img() {
  fetch("https://api.insidetrak.com/homepage/get-latest-images")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.data.length; i++) {
        let allTitle = data.data[i].title;
        console.log(allTitle);
      }
    });
}

export default Img;
