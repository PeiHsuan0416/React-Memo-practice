// 將 state 放入
import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from "../../global/constants";

// 引入分出的元件
import List from "./components/List";
import Edit from "./components/Edit";
// 引入CSS
import "./index.css";

// 拉 API
async function fetchData(setData) {
  const res = await fetch(API_GET_DATA) // 透過await方式 fetch API 拿到 res
  const { data } = await res.json() // 用 json 將其解構 id 拿到裡面的 data
  setData(data)
}
// 透過 data 的變動，做 POST的動作打 API
async function fetchSetData(data) {
  const res = await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({data})
  })
}

// 可以用箭頭函示 Home = () =>{}
const Home = function () {
  // [初始值, 對應的function]
  const [data, setData] = useState([]);
  const submittingStatus = useRef(false);
  
  // useEffect 拉 API
  useEffect(function() {
    fetchData(setData)
  },[])
  // 當 data 有變動時，用 useEffect 去  POST 資料
  useEffect(function() {
    if (!submittingStatus.current) {
      return
    }
    fetchSetData(data)
    .then(data => submittingStatus.current = false)
  }, [data])
  
  return (
    <div className="app">
      <Edit addData={setData} submittingStatus={submittingStatus} />
      <List listData={data} deleteData={setData} submittingStatus={submittingStatus}/>
      {/* listData是一個 props 方式傳遞資訊，再到 List.js做同名的設定 */}
    </div>
  );
};

export default Home;
