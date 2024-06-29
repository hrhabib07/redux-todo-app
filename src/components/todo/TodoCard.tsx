const TodoCard = () => {
  return (
    <div className=" bg-white rounded-lg flex items-center justify-between  p-3 my-3">
      <input type="checkbox" />
      <p className=" font-medium text-lg">Todo Title</p>
      <p>Time</p>
      <p>description</p>
      <div className="flex items-center justify-between">
        <button className="mx-2">del</button>
        <button className="mx-2">edit</button>
      </div>
    </div>
  );
};

export default TodoCard;
