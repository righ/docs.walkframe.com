import React from "react";
import ReactDOM from "react-dom";

import { Simple } from "./simple";

window.onload = () => {
  ReactDOM.render(<Simple />, document.querySelector("#demo-simple"));
};
