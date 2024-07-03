import { useState } from "react";
import { useGetTodosQuery } from "../../redux/api/api";
import { TTodo } from "../../redux/features/todoSlice";
// import { useAppSelector } from "../../redux/hook";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { TodoModal } from "./TodoModal";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  // from local state
  // const { todos } = useAppSelector((state) => state.todos);

  // from server
  const { data: todos, error, isLoading } = useGetTodosQuery(priority);
  // console.log(todos?.data);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.log(error);
  }
  return (
    <div>
      <div className="flex justify-between my-2">
        <TodoModal></TodoModal>
        <TodoFilter priority={priority} setPriority={setPriority}></TodoFilter>
      </div>
      <div className="bg-gradient-primary w-full h-full p-[5px] rounded-lg">
        <div className=" bg-white rounded-lg p-3">
          {todos?.data?.length > 0 ? (
            todos?.data?.map((todo: TTodo) => <TodoCard {...todo} key={todo?._id}></TodoCard>)
          ) : (
            <div className="font-bold text-xl bg-white p-2 rounded-lg text-center">There is not pending task.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
