import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Task from "./Task";
import { useState } from "react";

const TaskList = (props) => {
  // const { detail, status } = props;
  const [list, setList] = useState([
    {
      id: 1,
      detail: "test 1",
      completed: true,
    },
    {
      id: 2,
      detail: "test 2",
      completed: false,
    },
    {
      id: 3,
      detail: "test 3",
      completed: false,
    },
  ]);

  // const [list, setList] = useState([]);

  // const [task, setTask] = useState({
  //   id: "",
  //   detail: "",
  //   status: false,
  // });

  const [detail, setDetail] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleTextChange = (e) => {
    console.log("text changing...");
    console.log(e.target.value);
    setDetail(e.target.value);
    const newList = list.map((el) =>
      el.id === 2 ? { ...el, detail: e.target.value } : el
    );

    setList(newList);

    // const newList = list.concat()
  };

  const handleCheckboxChange = (e) => {
    setCompleted(!completed);
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
      {list.map((task) => {
        return (
          <Task
            detail={task.detail}
            completed={task.completed}
            setDetail={setDetail}
            setCompleted={setCompleted}
            handleTextChange={handleTextChange}
            handleCheckboxChange={handleCheckboxChange}
          />
        );
      })}
      {/* <Task /> */}
      {/* <Task /> */}
      {/* <Task detail="Task 3" status={true} />
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
      <Task detail="Task 15" status={true} />  */}
    </div>
  );
};

export default TaskList;
