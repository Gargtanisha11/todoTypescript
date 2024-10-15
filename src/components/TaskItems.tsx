import { ReactElement, useState } from "react";
import { COMPLETED, DELETE, MODIFY } from "../icons";
import { TaskItem } from "../interfaces";
import { title } from "process";

interface TaskItemProps {
  item: TaskItem;
  modifyTask: Function;
  deleteTask: Function;
  markAsComplete: Function;
}

const TaskItems: React.FC<TaskItemProps> = ({
  item,
  modifyTask,
  deleteTask,
  markAsComplete,
}): ReactElement => {

  const [editTask, setEditTask] = useState(false);
  const [taskTitle, setTaskTitle] = useState(item.title);

  return (
    <div className=" m-2 p-2 rounded-lg bg-slate-500">
      <div className="flex flex-row justify-between ">
        {!editTask ? (
          <h1 className="px-2 text-slate-50">{item.title}</h1>
        ) : (
          <div>
            <input
              className="px-1 rounded-lg"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.currentTarget.value)}
            />
            <button
                className=" bg-black text-white rounded-lg px-2 mx-2"
                onClick={() => {
                modifyTask(item.id, taskTitle);
                setEditTask(false);
              }}
            >
              Edit
            </button>
          </div>
        )}
        <div className=" flex flex-row">
          {item.completed && (
            <img src={COMPLETED} className="rounded-full bg-green-500 " />
          )}
          <img
            src={DELETE}
            alt="delete"
            onClick={() => deleteTask(item.id)}
            className="mx-2 hover:bg-slate-300 rounded-lg p-1 active:bg-slate-600"
          />
          <img src={MODIFY} alt="modify " onClick={() => setEditTask(true)} className=" hover:bg-slate-300 rounded-lg p-1 active:bg-slate-600" />
        </div>
      </div>
      <div className=" my-2 px-2 ">
        <label htmlFor="doneTask" className="mt-1">
          Complete Task
        </label>
        <input
          id="doneTask"
          className=" w-5 h-5 mx-2 pt-2 "
          type="checkbox"
          value="2"
          onClick={() => markAsComplete(item.id)}
        />
      </div>
    </div>
  );
};

export default TaskItems;
