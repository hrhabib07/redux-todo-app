import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  useAddTodoMutation,
  useGetSingleTodoQuery,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from "../../redux/api/api";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from "../ui/select";
import { SelectValue } from "@radix-ui/react-select";

export function UpdateTodoModal({ id }) {
  const [updateTodo, { isLoading }] = useUpdateTodoMutation();
  const { data } = useGetSingleTodoQuery(id);
  console.log(data);
  //   const [, { data }] = useGetTodosQuery();
  const previousTask = data?.task;
  const previousDescription = data?.description;
  const previousPriority = data?.priority;
  const [task, setTask] = useState(previousTask);
  const [description, setDescription] = useState(previousDescription);
  const [priority, setPriority] = useState(previousPriority);

  if (isLoading) {
    return <p>Loading</p>;
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const options = { id, data: { title: task, description, priority, isCompleted: data?.isCompleted } };
    updateTodo(options);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
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
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Your Task </DialogTitle>
          <DialogDescription>Update Your Task in the todo</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input onBlur={(e) => setTask(e.target.value)} id="task" className="col-span-3" value={previousTask} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                value={previousDescription}
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Priority</Label>
              <Select onValueChange={(value) => setPriority(value)}>
                <SelectTrigger className="w-full col-span-3">
                  <SelectValue placeholder="Select your priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Priority</SelectLabel>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogClose asChild className="">
            <div className="flex justify-end">
              <Button className="bg-gradient-primary" type="submit">
                Save task
              </Button>
            </div>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
}
