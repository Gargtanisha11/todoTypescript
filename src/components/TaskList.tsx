import { ReactElement, } from "react";
import { TaskListProps } from "../interfaces";
import TaskItems from "./TaskItems";

const TaskList: React.FC<TaskListProps> = ({
  taskList,
  setTaskList,
}): ReactElement => {
 

 
  const markAsComplete = (id: Number): void => {
      setTaskList(
        taskList.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    };
  
    // function to delete the task item
    const deleteTask = (id: Number): void => {
      setTaskList(taskList.filter((task) => task.id !== id));
    };
  
    const modifyTask = (id: Number, title: string): void => {
      if(title==="") return ;
      setTaskList(
        taskList.map((task) =>
          task.id === id ? { ...task, title: title } : task
        )
      );
       
    };



  return (
    <div className="w-[50%] min-h-screen bg-slate-700">
      <h1 className=" text-2xl text-white mx-2 my-2">TASKS</h1>
      {taskList.map((item) => (
         <TaskItems item={item} modifyTask={modifyTask} deleteTask={deleteTask} markAsComplete={markAsComplete} key={String(item.id)}/>
      ))}
    </div>
  );
};

export default TaskList;
