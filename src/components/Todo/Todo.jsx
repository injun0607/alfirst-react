import { useState } from "react";


function Todo () {

    const [todoList,setTodoList] = useState([]);
    const [inputValue , setInputValue] = useState("");


    const addTodoList = () => {
        
        if(!inputValue.trim()){
            return;
        }

        setTodoList((prev) => [...prev,inputValue]);
        setInputValue("");
    }




    return(
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">To-Do List</h1>
          <div className="flex items-center mb-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add a new task..."
              className="flex-grow p-2 border rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={addTodoList}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-xl hover:bg-blue-600 transition"
            >
              Add
            </button>
          </div>
          <ul className="space-y-2">
            {todoList.map((todo,idx) => (
              <li
                key={idx}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-xl shadow-sm"
              >
                {todo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
}


export default Todo;