import { useAppSelector } from "../../redux/hook";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { TodoModal } from "./TodoModal";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <div>
      <div className="flex justify-between my-2">
        <TodoModal></TodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-gradient-primary w-full h-full p-[5px] rounded-lg">
        <div className=" bg-white rounded-lg p-3">
          {todos.length > 0 ? (
            todos.map((todo) => <TodoCard {...todo} key={todo.id}></TodoCard>)
          ) : (
            <div className="font-bold text-xl bg-white p-2 rounded-lg text-center">There is not pending task.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
