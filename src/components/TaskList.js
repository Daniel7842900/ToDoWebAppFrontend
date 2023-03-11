import Task from "../components/Task";

const TaskList = (props) => {
  //   const { detail, status } = props;

  return (
    <div className="w-11/12 border-2 border-yellow-500 mx-auto mt-5 flex flex-col flex-nowrap">
      <div className="w-full border-2 border-green-500 mx-auto mt-5 flex-auto">
        <h1 class="text-3xl font-bold underline">Tasks</h1>
      </div>
      <Task detail="Task 1" status={true} />
      <Task detail="Task 2" status={true} />
      <Task detail="Task 3" status={true} />
      <Task detail="Task 4" status={true} />
      <Task detail="Task 5" status={true} />
      <Task detail="Task 6" status={true} />
      <Task detail="Task 7" status={true} />
      <Task detail="Task 8" status={true} />
      <Task detail="Task 9" status={true} />
      <Task detail="Task 10" status={true} />
      <Task detail="Task 11" status={true} />
      <Task detail="Task 12" status={true} />
      <Task detail="Task 13" status={true} />
      <Task detail="Task 14" status={true} />
      <Task detail="Task 15" status={true} />
    </div>
  );
};

export default TaskList;
