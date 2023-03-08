import Task from "../components/Task";

function ToDo() {
  return (
    <div className="border-2 border-sky-500 min-h-screen">
      <div className="w-3/4  border-2 border-yellow-500 mx-auto mt-5 flex flex-col flex-nowrap">
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
      <div className="w-full h-28 border-2 border-black mx-auto fixed bottom-0 text-right">
        <div className="w-16 h-16 border-2 border-yellow-800 mr-6 ml-auto mt-4"></div>
      </div>
    </div>
  );
}

export default ToDo;
