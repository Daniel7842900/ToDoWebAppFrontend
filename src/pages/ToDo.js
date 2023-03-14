import TaskList from "../features/todo/components/TaskList";
import Modal from "../layouts/Modal";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <div className="w-full h-28 mx-auto fixed bottom-0 text-right lg:hidden xl:hidden 2xl:hidden">
        <div
          className="w-16 h-16 mr-6 ml-auto mt-4 rounded-full border-2 border-blue-500 bg-blue-500 flex justify-center items-center"
          onClick={handleOpenModal}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-plus"
            className="w-8 h-8 m-auto text-white "
          />
        </div>
      </div>
    </div>
  );
}

export default ToDo;
