import React from "react"; //引入React
import ReactDOM from "react-dom/client"; //將寫好的元件顯示在網頁上
import "./index.css";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
