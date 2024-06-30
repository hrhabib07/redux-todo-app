import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function TodoModal() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ task, description });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-primary text-white font-bold">Add todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Your Task todo</DialogTitle>
          <DialogDescription>Add Your Task todo based on your priority</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input onBlur={(e) => setTask(e.target.value)} id="task" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input onBlur={(e) => setTask(e.target.value)} id="description" className="col-span-3" />
            </div>
          </div>
          <DialogFooter asChild>
            <DialogClose asChild>
              <Button className="bg-gradient-primary" type="submit">
                Save task
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
