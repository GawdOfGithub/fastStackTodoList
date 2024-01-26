"use client"
import { toast } from "sonner"
import {ElementRef,useRef,useState} from "react"
import { Todo } from "@prisma/client"
import { Button } from "../ui/button"

import { FormInput } from "@/app/components/form/form-input"
import { updateTodo } from "@/actions/update-todo";
import { useAction } from "@/hooks/useAction"
import { Edit2Icon } from "lucide-react"
import { Delete } from "lucide-react"
interface EditTodoProps {
    data:Todo
    
}

const EditTodo = ({data}: EditTodoProps) => {
    const [title, setTitle] = useState(data.title);
    const [isEditing, setIsEditing] = useState(false);
    const formRef = useRef<ElementRef<"form">>(null)
    const inputRef = useRef<ElementRef<"input">>(null)

    const enableEditing = ()=>{
        setIsEditing(true)
        setTimeout(()=>{
            inputRef.current?.focus
            inputRef.current?.select
        })
      

    }
    const disableEditing = ()=>
    {
        setIsEditing(false)
    }
    
    const {execute} = useAction(updateTodo,{
        onSuccess:(data)=>{
            toast.success("Todo successfully updated")
            setTitle(data.title)
            disableEditing()
        },
        onError:(error)=>{
            toast.error(error)
        }  
    })
    const onBlur = ()=> {
        formRef.current?.requestSubmit()
    }

    const onSubmit = (formData:FormData)=>{
        const title = formData.get("title") as string
        execute({title,id:data.id})
    }
    if (isEditing) {
        return (
          <form action={onSubmit} ref={formRef} className="flex items-center gap-x-2">
            <FormInput
              ref={inputRef}
              id="title"
              onBlur={onBlur}
              defaultValue={title}
              className="text-lg font-bold px-[7px] py-1 h-7 bg-transparent focus-visible:outline-none focus-visible:ring-transparent border-none"
            />
          </form>
        )
      }
    return (
        <>
        {title}
       <Button
      onClick={enableEditing}
      variant="default"
      className="font-bold text-lg h-auto w-auto p-1 px-2"
    >
      <Edit2Icon/>
    </Button>
   
           
        </>
    );
};

export default EditTodo;