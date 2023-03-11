import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = (props) => {
  const { detail, status } = props;

  return (
    <div className="w-full border-2 border-green-500 mx-auto mt-2 flex-auto flex">
      {/* Task Checkbox */}
      <div className="w-1/12 border-2 border-sky-500 flex justify-center">
        <input
          type="checkbox"
          class="rounded-full w-9 h-9 m-auto border-2 border-sky-500 "
        />
      </div>
      {/* Task Description */}
      <div className="w-10/12 border-2 border-yellow-500 mx-auto">
        <input
          type="text"
          className="w-full text-2xl align-middle"
          value={detail}
        />
      </div>
      {/* Task Remove Icon */}
      <div className="w-1/12 border-1 border-red-500 flex justify-center">
        <FontAwesomeIcon
          icon="fa-solid fa-trash-can"
          className="w-7 h-7 m-auto"
        />
      </div>
    </div>
  );
};

export default Task;
