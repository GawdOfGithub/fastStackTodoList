import { useAction } from "@/hooks/useAction";
import { deleteTodo } from "@/actions/delete-todo";
import { Button } from "../ui/button";
import { DeleteIcon } from "lucide-react";
interface DeleteTodoProps {
    id:string
}

const DeleteTodo = ({id}: DeleteTodoProps) => {
    const TodoData = {id}
    const {execute,fieldErrors} = useAction(deleteTodo,{
        onSuccess:(data)=>{
            console.log(data,"Success");
        },
        onError:(error)=>{
            console.log(error);
        }
    })
    const onClick = () =>{
        execute({id})
        
    }
    return (
        <>
          <Button
      onClick={onClick}
      variant="default"
      className="font-bold text-lg h-auto w-auto p-1 px-2"
    >
        <DeleteIcon/>
    
    </Button>
           
        </>
    );
};

export default DeleteTodo;