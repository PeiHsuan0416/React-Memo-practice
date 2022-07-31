//此處 function內的名稱與List內相同方便解構
const Item = function({id, noteData, date, time, deleteData, submittingStatus }) {


  function deleteItem() {
    submittingStatus.current = true
    deleteData(function(prev){
      return prev.filter(item => item.id !== id)
    })
  }
  return <div className="item">
    <div>
      <p>{noteData}</p>
      <p>{`${date} ${time}`}</p> 
      {/* 模板語法 */}
    </div>
    <button onClick={ deleteItem } className="remove">刪除</button>

  </div>

}

export default Item;