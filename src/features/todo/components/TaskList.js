import IconButton from "../../../components/IconButton";
import Task from "./Task";

const TaskList = (props) => {
  const {
    list,
    handleTaskDetailChange,
    handleTaskCheckboxChange,
    handleTaskDelete,
    handleOpenModal,
  } = props;

  return (
    <div className="w-11/12 h-5/6 border-2 border-yellow-500 mx-auto mt-5 flex flex-col flex-nowrap overflow-y-auto">
      <div className="w-full border-2 border-green-500 mx-auto mt-5 flex-auto flex">
        <div className="w-11/12 border-2 border-sky-500 mx-auto flex-auto">
          <h1 className="text-3xl font-bold underline">Tasks</h1>
        </div>
        {/* Task Add Button - Desktop */}
        <IconButton
          containerClassName="hidden w-1/12 border-2 border-sky-500 mx-auto flex-auto lg:flex justify-center"
          icon="fa-solid fa-plus"
          iconClassName="w-7 h-7 m-auto"
          handleOnClick={handleOpenModal}
        />
      </div>
      {/* Tasks in the list */}
      {list.map((task, i) => {
        return (
          <Task
            key={i}
            task={task}
            handleTaskDetailChange={handleTaskDetailChange}
            handleTaskCheckboxChange={handleTaskCheckboxChange}
            handleTaskDelete={handleTaskDelete}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
