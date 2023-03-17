import IconButton from "../../../components/IconButton";
import Input from "../../../components/Input";

const Task = (props) => {
  const {
    task,
    handleTaskDetailChange,
    handleTaskCheckboxChange,
    handleTaskDelete,
  } = props;
  const { id, detail, completed } = task;

  return (
    <div className="w-full rounded-lg mx-auto mt-2 flex-none flex">
      {/* Task Checkbox */}
      <Input
        containerClassName="w-1/12 bg-white rounded-l-lg flex justify-center"
        inputClassName="rounded-full w-7 h-7 m-auto border-2 border-sky-500 focus:ring-0 focus:outline-none"
        type="checkbox"
        handleOnChange={() => handleTaskCheckboxChange(id)}
      />
      {/* Task Description */}
      <Input
        containerClassName="w-10/12 mx-auto"
        inputClassName={
          completed
            ? "w-full text-xl align-middle line-through text-gray-500 read-only:bg-gray-100 border-none focus:ring-0"
            : "w-full text-xl align-middle border-none focus:ring-0"
        }
        id={id}
        type="text"
        name="task"
        handleOnChange={handleTaskDetailChange}
        value={detail}
        autoComplete="off"
        readOnly={completed}
      />
      {/* Task Remove Icon */}
      <IconButton
        containerClassName="w-1/12 rounded-r-lg bg-white flex justify-center"
        icon="fa-solid fa-trash-can"
        iconClassName="w-7 h-7 m-auto text-red-600"
        handleOnClick={() => handleTaskDelete(id)}
      />
    </div>
  );
};

export default Task;
