import { Divide } from "lucide-react";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div>
        <h2> Add todo filter</h2>
      </div>
      <div className="bg-red-500 w-full h-full p-5 rounded-lg">
        {/* <div className="font-bold text-2xl bg-white p-3 rounded-lg text-center">There is not pending task.</div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
