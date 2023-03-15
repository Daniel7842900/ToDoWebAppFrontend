import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskList from "../features/todo/components/TaskList";
import Modal from "../layouts/Modal";
import IconButton from "../components/IconButton";

function ToDo() {
  const [modalData, setModalData] = useState({
    show: false,
    detail: "",
  });

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

  /** Handle an event to open a modal */
  const handleOpenModal = () => {
    setModalData({
      ...modalData,
      show: true,
    });
  };

  /** Handle an event to close a modal */
  const handleCloseModal = () => {
    setModalData({
      ...modalData,
      show: false,
    });
  };

  /** Handle an event to change detail in a modal */
  const handleModalChange = (e) => {
    setModalData({
      ...modalData,
      detail: e.target.value,
    });
  };

  /** Handle an event to create a new task from a modal */
  const handleCreateTask = () => {
    // Add the new task to existing list
    const newList = list.concat({
      id: uuidv4(),
      detail: modalData.detail,
      completed: false,
    });

    // Set to the new list
    setList(newList);

    // Close the modal
    setModalData({
      ...modalData,
      show: false,
    });
  };

  /** Handle an event to delete the task */
  const handleDeleteTask = (id) => {
    // Create a new array without the task with the given id
    const newList = list.filter((task) => {
      return task.id !== id;
    });

    setList(newList);
  };

  /** Handle an event to change detail in a task */
  const handleTaskDetailChange = (e) => {
    // Create a new array with modified task detail
    const newList = list.map((task) =>
      task.id === e.target.id ? { ...task, detail: e.target.value } : task
    );

    setList(newList);
  };

  /** Handle an event to change complete status in a task */
  const handleTaskCheckboxChange = (id) => {
    // Create a new array with modified task complete status
    const newList = list.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    setList(newList);
  };

  return (
    <div className="border-2 border-sky-500 min-h-screen">
      {/* Modal for creating a new task - Mobile */}
      {modalData.show ? (
        <Modal
          closeModal={handleCloseModal}
          handleChange={handleModalChange}
          handleCreateTask={handleCreateTask}
        />
      ) : null}
      {/* Task list */}
      <TaskList
        list={list}
        handleTaskDetailChange={handleTaskDetailChange}
        handleTaskCheckboxChange={handleTaskCheckboxChange}
        handleTaskDelete={handleDeleteTask}
      />
      {/* Task Add Button - Mobile */}
      <div className="w-full h-28 mx-auto fixed bottom-0 text-right lg:hidden xl:hidden 2xl:hidden">
        <IconButton
          containerClassName="w-16 h-16 mr-6 ml-auto mt-4 rounded-full border-2 border-blue-500 bg-blue-500 flex justify-center items-center"
          icon="fa-solid fa-plus"
          iconClassName="w-8 h-8 m-auto text-white"
          handleOnClick={handleOpenModal}
        />
      </div>
    </div>
  );
}

export default ToDo;
