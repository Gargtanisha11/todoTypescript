import { ReactElement, useMemo, useState } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import {TaskItem} from "../interfaces";



const Body: React.FC = (): ReactElement => {
  const [taskList, setTaskList] = useState<TaskItem[]>([]);

  const memoized = useMemo(() => {
    return <TaskList taskList={taskList} setTaskList={setTaskList} />;
  }, [taskList]);

  return (
    <div className="flex flex-row ">
      <AddTask taskList={taskList} setTaskList={setTaskList}/>
      {memoized}
    </div>
  );
};

export default Body;
