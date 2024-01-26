"use client"
import {Delete,Edit} from 'lucide-react'
import { createSafeAction } from "@/lib/create-safe-action";

import { Button } from "../ui/button";
import { FormSubmit } from "../form/form-submit";
import EditTodo from './EditTodo';
import DeleteTodo from './DeleteTodo';
interface TodoProps {
    id:string
    title:string

}

const Todo = ({id,title}: TodoProps) => {
    const TodoData = {id,title}
   
    return (
    <>
        
        <div className="flex">
            
            
            <EditTodo data={TodoData}/>
            <DeleteTodo id={id}/>
            
       
        </div>
        
           
        </>
    );
};

export default Todo;