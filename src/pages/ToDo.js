import TaskList from "../features/todo/components/TaskList";
import Modal from "../layouts/Modal";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";

function ToDo() {
  const [modalShow, setModalShow] = useState(false);
  const [modalDetail, setModalDetail] = useState("");
  const [list, setList] = useState([
    {
      id: "1",
      detail: "test 1",
      completed: false,
    },
    {
      id: "2",
      detail: "test 2",
      completed: false,
    },
    {
      id: "3",
      detail: "test 3",
      completed: false,
    },
  ]);

  const handleOpenModal = () => {
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setModalShow(false);
  };

  const handleModalChange = (e) => {
    setModalDetail(e.target.value);
  };

  const handleCreateTask = () => {
    // Add the new task to existing list
    const newList = list.concat({
      id: uuidv4(),
      detail: modalDetail,
      completed: false,
    });

    // Set to the new list
    setList(newList);

    // Close the modal
    setModalShow(false);
  };

  return (
    <div className="border-2 border-sky-500 min-h-screen">
      {modalShow ? (
        <Modal
          closeModal={handleCloseModal}
          handleChange={handleModalChange}
          handleCreateTask={handleCreateTask}
        />
      ) : null}
      <TaskList list={list} setList={setList} />
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
