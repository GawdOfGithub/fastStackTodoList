




import getTodos from "@/actions/get-all-todos"
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import AddTodo from "@/components/todo/AddTodo";
// import Todo from "@/components/todo/Todo";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/button/Button";
import AddTodo from "@/app/components/todo/AddTodo";
import Todo from "@/app/components/todo/Todo";
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