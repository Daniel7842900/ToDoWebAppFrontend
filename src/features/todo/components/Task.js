import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = (props) => {
  const { task, handleTaskDetailChange, handleTaskCheckboxChange } = props;
  const { id, detail, completed } = task;

  return (
    <div className="w-full border-2 border-green-500 mx-auto mt-2 flex-auto flex">
      {/* Task Checkbox */}
      <div className="w-1/12 border-2 border-sky-500 flex justify-center">
        <input
          type="checkbox"
          className="rounded-full w-9 h-9 m-auto border-2 border-sky-500"
          onChange={() => handleTaskCheckboxChange(id)}
        />
      </div>
      {/* Task Description */}
      <div className="w-10/12 border-2 border-yellow-500 mx-auto">
        {completed ? (
          <input
            id={id}
            type="text"
            name="task"
            className="w-full text-2xl align-middle line-through text-gray-500 read-only:bg-gray-100"
            onChange={handleTaskDetailChange}
            value={detail}
            readOnly
          />
        ) : (
          <input
            id={id}
            type="text"
            name="task"
            className="w-full text-2xl align-middle"
            onChange={handleTaskDetailChange}
            value={detail}
          />
        )}
      </div>
      {/* Task Remove Icon */}
      <div className="w-1/12 border-1 border-red-500 flex justify-center">
        <FontAwesomeIcon
          icon="fa-solid fa-trash-can"
          className="w-7 h-7 m-auto"
        />
      </div>
    </div>
  );
};

export default Task;
