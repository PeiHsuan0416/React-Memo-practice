import Item from "./Item";

const List = ({ listData, deleteData, submittingStatus }) => {
  // console.log('listData',listData);
  return (
    <div className="list">
      { listData.map((item) => {
        //note = item.note改用解構寫法，解構可以有預設值
        const { note, date, time, id } = item;
        return (
          <Item
            key={id}
            id={id}
            noteData={note}
            date={date}
            time={time}
            deleteData={deleteData}
            submittingStatus={submittingStatus}
          />
        )
        // 左邊的note 是 props 取直時 Item.js 內要拿的東西，右邊的 note 則是上方 const內的 note
      }) }
    </div>
  );
};

export default List;

// react 希望你在幫這些 item 用 map 函式去渲染時，可以加一個 key，給 item 一個獨一無二的標籤，才能辨識出 item 是什麼，為了效能優化，通常可用 item.id 之類得，不能用 index 去當作每個 item 的 key
