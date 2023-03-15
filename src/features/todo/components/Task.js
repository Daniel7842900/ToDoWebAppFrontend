import IconButton from "../../../components/IconButton";
import TextInput from "../../../components/TextInput";

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
      <TextInput
        containerClassName="w-10/12 border-2 border-yellow-500 mx-auto"
        inputClassName={
          completed
            ? "w-full text-2xl align-middle line-through text-gray-500 read-only:bg-gray-100"
            : "w-full text-2xl align-middle"
        }
        id={id}
        type="text"
        name="task"
        handleOnChange={handleTaskDetailChange}
        value={detail}
        readOnly={completed}
      />
      {/* Task Remove Icon */}
      <IconButton
        containerClassName="w-1/12 border-1 border-red-500 flex justify-center"
        icon="fa-solid fa-trash-can"
        iconClassName="w-7 h-7 m-auto"
      />
    </div>
  );
};

export default Task;
