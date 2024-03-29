import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskList from "../features/todo/components/TaskList";
import Modal from "../layouts/Modal";
import TopNav from "../layouts/TopNav";
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

  /** Validate the detail submission on a modal */
  const validateModalDetail = ({ detail }) => {
    if (detail.length === 0) {
      return "Task cannot be empty";
    }
  };

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
    const err = validateModalDetail(modalData);

    if (err !== undefined) {
      toast.error(err);
      return;
    } else {
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
        detail: "",
        show: false,
      });
    }
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
    <div className="h-screen">
      <TopNav />
      <div className="border-2 border-sky-500 bg-cyan-600/40 flex flex-col h-[95vh] md:h-[90vh] lg:h-[95vh]">
        {/* Toast error message */}
        <ToastContainer autoClose={2000} />
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
          handleOpenModal={handleOpenModal}
        />
        {/* Task Add Button - Mobile */}
        <div className="w-full mx-auto flex grow items-center text-center lg:hidden xl:hidden 2xl:hidden">
          <IconButton
            containerClassName="w-16 h-16 mx-auto rounded-full border-2 border-blue-500 bg-blue-500 flex justify-center"
            icon="fa-solid fa-plus"
            iconClassName="w-8 h-8 m-auto text-white"
            handleOnClick={handleOpenModal}
          />
        </div>
        {/* <div className="w-full h-28 mx-auto fixed bottom-0 text-right lg:hidden xl:hidden 2xl:hidden"> */}
        {/* <IconButton
        containerClassName="w-16 h-16 mr-4 ml-auto mb-4 rounded-full border-2 border-blue-500 bg-blue-500 flex justify-center items-center mx-auto fixed bottom-0 text-right right-0 lg:hidden xl:hidden 2xl:hidden"
        icon="fa-solid fa-plus"
        iconClassName="w-8 h-8 m-auto text-white"
        handleOnClick={handleOpenModal}
      /> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default ToDo;
