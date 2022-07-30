// 將 state 放入
import { useState } from "react";

// 引入分出的元件
import List from "./components/List";
import Edit from "./components/Edit";
// 引入CSS
import "./index.css";

// 可以用箭頭函示 Home = () =>{}
const Home = function () {
  // [初始值, 對應的function]
  const [data, setData] = useState([]);

  return (
    <div className="app">
      <Edit addData={setData} />
      <List listData={data} deleteData={setData} />
      {/* listData是一個 props 方式傳遞資訊，再到 List.js做同名的設定 */}
    </div>
  );
};

export default Home;
