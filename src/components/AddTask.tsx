import React, { ReactElement, useState } from "react";
import {TaskItem,TaskListProps} from "../interfaces";


const AddTask: React.FC<TaskListProps> = ({
  taskList,
  setTaskList,
}): ReactElement => {
  const [newTask, setNewTask] = useState("");
  const addItem = () => {
    if (newTask === "") return;
    const item: TaskItem = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };
    setTaskList([...taskList,item ]);
    setNewTask("");
  };

  return (
    <div className=" w-[50%] min-h-screen bg-slate-800 px-20 py-20  ">
      <div className="  mx-2  my-2 ">
        <label className="text-xl mx-2 text-white " htmlFor="AddTask">Title : </label>
        <input
          id="AddTask"
          className="border border-black rounded-lg py-2  px-2"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.currentTarget.value)}
        />
      </div>
      <div>
        <button
          className="bg-black text-white hover:bg-gray-700 active:bg-gray-900 rounded-lg py-2 px-4 mx-2 "
          onClick={addItem}
        >
          Add
        </button>
      </div>
    </div>
  );
};
export default AddTask;
