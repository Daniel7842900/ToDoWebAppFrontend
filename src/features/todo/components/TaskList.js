import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Task from "./Task";

const TaskList = (props) => {
  const { list, setList } = props;

  const handleTextChange = (e) => {
    // Create a new array with modified task detail
    const newList = list.map((task) =>
      task.id === e.target.id ? { ...task, detail: e.target.value } : task
    );

    setList(newList);
  };

  const handleCheckboxChange = (id) => {
    // Create a new array with modified task complete status
    const newList = list.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    setList(newList);
  };

  return (
    <div className="w-11/12 border-2 border-yellow-500 mx-auto mt-5 flex flex-col flex-nowrap">
      <div className="w-full border-2 border-green-500 mx-auto mt-5 flex-auto flex">
        <div className="w-11/12 border-2 border-sky-500 mx-auto flex-auto">
          <h1 className="text-3xl font-bold underline">Tasks</h1>
        </div>
        {/* Task Add Button - Desktop */}
        <div className="hidden w-1/12 border-2 border-sky-500 mx-auto flex-auto lg:flex justify-center">
          <FontAwesomeIcon icon="fa-solid fa-plus" className="w-7 h-7 m-auto" />
        </div>
      </div>
      {/* Tasks in the list */}
      {list.map((task, i) => {
        return (
          <Task
            key={i}
            task={task}
            handleTextChange={handleTextChange}
            handleCheckboxChange={handleCheckboxChange}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
