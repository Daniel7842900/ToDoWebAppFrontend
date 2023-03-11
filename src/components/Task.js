const Task = (props) => {
  const { detail, status } = props;

  return (
    <div className="w-full border-2 border-green-500 mx-auto mt-2 flex-auto flex">
      {/* Task checkbox */}
      <div className="w-1/12 border-2 border-sky-500 flex justify-center">
        <input
          type="checkbox"
          class="rounded-full w-9 h-9 m-auto border-2 border-sky-500 "
        />
      </div>
      {/* Task Description */}
      <div className="w-10/12 border-2 border-yellow-500 mx-auto">
        <input type="text" className="text-2xl align-middle " value={detail} />
      </div>
      <div className="w-1/12 border-2 border-red-500 mx-auto"></div>
    </div>
  );
};

export default Task;
