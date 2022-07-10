import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo, updateTodo } from "../Actions";

function Home() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();  
  const [show, setShow] = useState(false);
  const [nameToBeUpdate, setNameToUpdate] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  console.log(list, "list");
  const [id, setId] = useState(null);

  const handleUpdate = (data, id) => {
    console.log(id, "index++++++");
    setNameToUpdate(data.data);
    setId(id);
  };

  return (
    <div>
      <h4>Redux Todo</h4>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="text here"
      />
      <button onClick={() => dispatch(addTodo(todo))}>Add Todo</button>
      <div>
        {list
          ? list.map((data, index) => {
            return (
              <div key={data.id}>
                  {!show ? (<>
                <input
                  hidden={id !== data.id}
                  type="text"
                  defaultValue={nameToBeUpdate}
                  onChange={(e) => setNameToUpdate(e.target.value)}
                ></input>
                <button onClick={() => dispatch(updateTodo(nameToBeUpdate,data.id))}>save</button>
                  </>) : ''}
                  <h3>{data.data}</h3>
                  <button
                    onClick={() => dispatch(deleteTodo(data.id), setTodo(""))}
                  >
                    delete
                  </button>
                  <button onClick={() => handleUpdate(data, data.id)}>edit</button>
                </div>
              );
            })
            : ""}
      </div>
            {/* <button onClick={() => dispatch(updateTodo(data,data.id))}>update</button> */}
      <button onClick={() => dispatch(removeTodo())}>Remove all</button>
    </div>
  );
}
export default Home;
