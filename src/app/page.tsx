import getTodos from "@/actions/get-all-todos"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AddTodo from "@/components/todo/AddTodo";
import Todo from "@/components/todo/Todo";
interface CheckTodosProps {
    
}

const CheckTodos = async({}:CheckTodosProps) => {
    try
    {
        const todos = await getTodos()
        return (
            <>
                  <AddTodo/>
                {todos.map((todo, index) => (
                  <div key={index}  className="flex">
                     <Todo id={todo.id} title={todo.title}/>
                    
                  </div>
                ))}
                
            </>
        );
    }
    catch(error)
    {
        console.log(error);
    }
   
};

export default CheckTodos;