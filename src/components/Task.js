const Task = (props) => {
  const { detail, status } = props;

  return (
    <div className="w-full border-2 border-green-500 mx-auto mt-2 flex-auto">
      <p class="text-2xl">{detail}</p>
    </div>
  );
};

export default Task;
