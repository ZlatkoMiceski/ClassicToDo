import { useState } from "react";

const CommentList = (props) => {

    const [data, setData] = useState("")
    const [listEl, setListEl] = useState([])

    function submitHandler() {
        data && setListEl(prev => [...prev, data])
        setData("")
    }


    return (<div>
        <form>
          <input type="text" value={data} onChange={(e) => {setData(e.target.value)}} />
          <input type="button" value="Post" onClick={submitHandler}/>
        </form>
        <ul>
            {listEl.map((el) => {
                return <li>{el}</li>
            })}
        </ul>
      </div>);
  }

  export default CommentList;


//   const CommentList = (props) => {
//     return (<div>
//         <form>
//           <input type="text" />
//           <input type="button" value="Post" />
//         </form>
//         <ul>
//         </ul>
//       </div>);
//   }