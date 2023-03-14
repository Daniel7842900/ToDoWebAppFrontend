import TaskList from "../features/todo/components/TaskList";
import Modal from "../layouts/Modal";
import { useState } from "react";

function ToDo() {
  const [show, setShow] = useState(false);

  const handleOpenModal = () => {
    setShow(true);
  };

  return (
    <div className="border-2 border-sky-500 min-h-screen">
      {show ? <Modal show={show} setShow={setShow} /> : null}
      <TaskList />
      {/* Task Add Button - Mobile */}
      <div className="w-full h-28 border-2 border-black mx-auto fixed bottom-0 text-right lg:hidden xl:hidden 2xl:hidden">
        <div
          className="w-16 h-16 border-2 border-yellow-800 mr-6 ml-auto mt-4"
          onClick={handleOpenModal}
        ></div>
      </div>
    </div>
  );
}

export default ToDo;
