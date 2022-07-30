React 教學 HOOK，過去傳統適用 class。  
  希望對 JavaScript 有一定的掌握  
  JavaScript 的 UI 資料庫 / 框架  
  可以用來寫 Web 應用程式
  （SPA(單頁應用程式)、SSR（伺服器渲染的應用程式））  

React 優點  
1. 讓前端專案開發變得容易管理。  
2. 頁面組件化、模組化，讓元件可以重複使用。
3. 可以寫 Web 也可以寫 App。
  
需要具備哪些JS能力？
- 熟悉 JS 基礎
- 熟悉基本流程控制，if else、for/while迴圈等
- 理解 ES6 語法。箭頭 function，.map()、.forEach()等。
- 理解非同步操作
- call API，Fetch API 使用等等
  
React Hook 簡化 Class 的寫法。  
- 因為寫 class 時，當需要抽離組件，互相包覆時，會要改很多內容物。在 hook 寫法時，比較像是 JS 的 function，會比較單純，可以直接拿來使用。  
- class 的生命週期較為分散，一個功能會寫在三個不同的地方（componentDidMount、componentDidUpdate、componentWillUnmount），要在哪裡設定事件。然後又要在哪裡清除？會增加組建維護的困難性。  
- this 在幹嘛？JavaScript 的 this 到底是誰？增加元件寫的困難度。

最重要的兩個 Hook 
State Hook & Effect Hook
- useState、UseEffect，賦予元件狀態(state hook)
及效果(effect hook)：例如：動態顯示碼表時間
  - 元件：碼表介面
  - 狀態：變動的秒數
  - 效果：因為秒數變動，所以顯示出現的樣子，或是其他事情等等...
不需要像 class 一樣在乎生命週期，只需要注意狀態及效果。  
其他的 Hook：useCallback、useMemo、memo用法 / useContext 的 context 是什麼？

之後可以學習....  
- 學習 React-Router：換頁的方式
- 學習 React context：解決 React 管理狀態上的痛點，例如每個元件有各自的狀態，這些共用的資訊要如何傳遞，管理共用的狀態。
- 理解為什麼需要 Redux：類似 context
- 學習 class 寫法：方便轉換 hook 寫法

-----------------------
```$ npx create-react-app my-app``` 開始執行 React 環境安裝
```$ npm start``` 開啟 localhost
```npm i prettier``` 安裝後，再到packpage.json 內 "scripts"下新增 "prettier": "prettier -w src/"
```npm install uuid``` 快速生成id v4
```npm i json-server``` 模擬後端

----------------------

// 看起來在寫 HTML 但其實是在用 jsx，利用 JS 語法物件表現畫面。  
寫 HTML 的 class 的時候要改用 className

global資料夾：JS小工具或常數

#### 一開始寫一個組件：宣告一個 function 並且把他 export 出去

### 頁面切版
可以分成幾個檔案
        Home（state）data
      /         \ (props)
(state)Edit元件   List元件
                  \
                  Item元件

如何讓子層(edit 和 listc)互相溝通：傳遞給父層(home)狀態的變化，因此父曾是放 state，讓狀態共享給子層，父層可放子層兩邊的資料。透過 props（properties） 方式傳遞
透過 data 的長度，將 item 內容渲染出來


```JavaScript
return <div></div>
//因為是 return jsx元件，因此會是顯示 react 樣式
//想要在 jsx 內顯示 JS 元件都要加花括號{}
//除了用 import 的方式引入 CSS，也可以用 style 的方式
const app = {
  color: 'red'
}

const Home = () => {
  return <div style={app}> 
    <Edit />
    <List />
  </div>
}


// 自動產生清單 item 的方式範例，先給他一個陣列，再 map 出來
const arr = [1,2,3]

const List = function(){
  return <div className="list">
    {
      arr.map(item => <Item />)
    }
</div>
}


// react 渲染 JS 元件
// 可以用箭頭函示 Home = () =>{}
const Home = function() {

  let a = 100 //直接寫JS導致reactDom不法辨認，因此無法渲染初JS元素
  function plus(){
    console.log('test');
    a = 100 + 200
  }

  return(<div className="app">
    {a}
    <button onClick={plus}>增加</button>
    <Edit />
    <List />
  </div>
  )
}
  // 正確方式：用 useState方式宣告
const Home = function() {

  // [初始值, 對應的function]
  const [a, setA] = useState(100) //用 useState 方式宣告，因此跟 react 渲染方式綁在一起
  function plus(){
    // setA(a + 200) //直接這樣使用無法準確地拿到上一次的值，建議裡面放一個 function
    setA(function (prev){
      return prev + 100
    })
  }

  return(<div className="app">
    {a}
    <button onClick={plus}>增加</button>
    <Edit />
    <List />
  </div>
  )
}

  useEffect(function(){
    //綁定的事情
    return function() {
      //取消綁定
    }
  },[data])
  // 當狀態變動之後要做什麼事情：類似提示flex。在 useEffect 裡面第一個參數是定義一個 function，裡面放每次執行的時候有一個效果要做的事情，因此要綁定一個依賴關係，將綁定關係放在第二個參數，當 data 有變動時，會執行 function
  //外面的 function 是每次執行的時候會做的事情，裡面的 function 是每次渲染結束要開始下一次渲染前要做的事情


    // useEffect 拉 API
  useEffect(function() {
    fetch("http://localhost:3000/posts/1")
    .then(res => res.json()) // 將拿回的res retuen 成一個 json
    .then(data => { console.log(data); // 再拿出 data
    })
  },[])
  // 另外將常數放至 global 裡的 constants.js 檔內後，引入 import 並可修改成：
  import { API_GET_DATA } from "../../global/constants";

  useEffect(function() {
    fetch(API_GET_DATA)
    .then(res => res.json()) // 將拿回的res retuen 成一個 json
    .then(data => { console.log(data); // 再拿出 data
    })
  },[])

  // 可以在寫 async function 讓程式碼變得更簡潔
  async function fetchData() {
    const res = await fetch(API_GET_DATA) // 透過await方式 fetch API 拿到 res
    const data = await res.json() // 用 json 將其解構
    console.log(data);
  }
  useEffect(function() {
    fetchData()
  },[])

```


如果 map 出來的元素會插入、刪除、調換順序 要加 key
不希望元件被重新渲染就要加KEY
uuid npm
json server 模擬後端的小工具







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



  // 當 data 有變動時，用 useEffect 去  POST 資料
  useEffect(function() {
    fetchSetData(data)
  }, [data])