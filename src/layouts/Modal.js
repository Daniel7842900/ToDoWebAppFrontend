import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "../components/IconButton";
import TextButton from "../components/TextButton";

const Modal = (props) => {
  const { closeModal, handleChange, handleCreateTask } = props;

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Gray Background */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      {/* Message box */}
      <div className="fixed inset-0 z-10 w-full overflow-y-auto">
        <div className="flex basis-full h-full w-10/12 mx-auto items-start justify-center text-center sm:items-center sm:p-0">
          <div className="relative h-screen w-full flex flex-col transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white h-screen px-4 pt-5 pb-4 flex flex-col sm:p-6 sm:pb-4">
              {/* Close Button */}
              <IconButton
                containerClassName="ml-auto float-right flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 sm:mx-0 sm:h-10 sm:w-10"
                iconClassName="w-7 h-7 m-auto"
                icon="fa-solid fa-xmark"
                handleOnClick={closeModal}
              />
              {/* ToDo Input */}
              <div className="grow flex items-center justify-center sm:flex sm:items-start">
                <div className="text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <input
                    type="text"
                    name="task"
                    className="w-full text-xl align-middle border-none focus:ring-0"
                    placeholder="Enter a task..."
                    autoComplete="off"
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* Create Button */}
              <div className="bottom-0 mx-auto left-0 right-0 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
                <TextButton
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-blue-500 px-10 py-4 text-sm text-white font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  handleOnClick={handleCreateTask}
                  text="Create Task"
                />
                {/* <button>Create Task</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
