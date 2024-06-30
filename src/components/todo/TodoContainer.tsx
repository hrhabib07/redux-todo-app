import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { TodoModal } from "./TodoModal";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between my-2">
        <TodoModal></TodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-gradient-primary w-full h-full p-[5px] rounded-lg">
        <div className=" bg-white rounded-lg p-3">
          {/* <div className="font-bold text-2xl bg-white p-3 rounded-lg text-center">There is not pending task.</div> */}
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
