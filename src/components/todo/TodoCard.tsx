import { useDeleteTodoMutation, useUpdateTodoMutation } from "../../redux/api/api";
// import { removeTodo } from "../../redux/features/todoSlice";
// import { useAppDispatch } from "../../redux/hook";
import { Button } from "../ui/button";
import { UpdateTodoModal } from "./UpdateTodoModal";

type TTodoCard = {
  title: string;
  description: string;
  _id: string;
  isCompleted?: boolean;
  priority: string;
};
const TodoCard = ({ title, description, isCompleted, priority, _id }: TTodoCard) => {
  // const dispatch = useAppDispatch();
  const [updateTodo, { isError }] = useUpdateTodoMutation();
  const [deleteTodo, { isLoading }] = useDeleteTodoMutation();
  if (isError) {
    return <p>Something went wrong</p>;
  }
  const handleToggleIsCompleteState = () => {
    // dispatch(toggleIsCompleteState(id));
    const options = {
      id: _id,
      data: {
        title,
        description,
        priority,
        isCompleted: !isCompleted,
      },
    };
    updateTodo(options);
  };
  const handleDeleteButton = () => {
    deleteTodo(_id);
  };
  return (
    <div className=" bg-white flex rounded-lg items-center p-2 border m-[5px] ">
      <input
        className="mr-3"
        onClick={handleToggleIsCompleteState}
        type="checkbox"
        id="complete"
        name="complete"
        checked={isCompleted}
      />
      <div className=" w-full grid grid-cols-5">
        <p className=" font-semibold text-lg flex-1 text-start">{title}</p>
        {/* <p>Time</p> */}
        <div className=" flex-1 items-start">
          {isCompleted ? <p className="text-green-500 ">Done</p> : <p className="text-red-500"> Pending </p>}
        </div>
        <div className="flex-1 flex items-center space-x-1 text-start">
          <p
            className={`size-3 rounded-full   
          ${priority === "High" ? "bg-red-500" : null}
          ${priority === "Medium" ? "bg-yellow-500" : null}
          ${priority === "Low" ? "bg-green-500" : null}
          
 `}
          ></p>
          <p>{priority}</p>
        </div>
        <p className=" col-span-2 text-start">{description}</p>
      </div>
      <div>
        <div className="space-x-5 flex items-center justify-between">
          <Button onClick={handleDeleteButton} className="mx-2 bg-red-500 text-white p-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </Button>
          <Button className="mx-2 bg-[#9966CC] text-white p-2 rounded-lg">
            <UpdateTodoModal id={_id}></UpdateTodoModal>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
