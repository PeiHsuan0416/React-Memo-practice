// 讓 input 元件各自去綁定 useState，以利讀取到筐內的 value，原本JS會用even.target.value或是documentElementById的方式。但在 react 內的操作都是要與狀態有關。透過狀態變動去拿到結果。
import { useState } from "react";
import { v4 } from "uuid";

const Edit = function ({ addData, submittingStatus }) {
  const [note, setNote] = useState("請輸入備忘錄");
  function noteChange(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }

  // console.log(note, date, time);

  function addItem() {
    // 新增之前先將 useRef 狀態設為 ture
    submittingStatus.current = true
    //把想要跟新的值放進去
    addData(function (prevData) {
      //解構的方式
      return [
        {
          id: v4(),
          note,
          date,
          time,
        },
        ...prevData, //將解構的陣列放此，順序為反序
      ];
    });
  }

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事：</p>
      <input type="text" value={note} onChange={noteChange} />
      {/* useState裡的 note 會影響 input 內value裡的note，而onChange 則會透過 noteChange 去改變 setNote 的值，進而改變渲染的內容 
    value 可以改用 placeholder
    */}
      <p>日期：</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>時間：</p>
      <input type="time" value={time} onChange={timeChange} />
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;
