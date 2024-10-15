
export    interface TaskItem {
    id: Number;
    title: string;
    completed: boolean;
  }

export  interface TaskListProps {
    taskList: Array<TaskItem>;
    setTaskList: React.Dispatch<React.SetStateAction<TaskItem[]>>;
  }
  

