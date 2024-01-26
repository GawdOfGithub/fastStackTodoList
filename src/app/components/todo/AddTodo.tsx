"use client"
import { Input } from "../ui/input"
// import { Button } from "@/app/components/ui/button";
import { createTodo } from "@/actions/create-todo";
import { useAction } from "@/hooks/useAction";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useRef,ElementRef } from "react";
import { FormSubmit } from "../form/form-submit";
import { usePathname } from "next/navigation";

interface AddTodoProps {
}

const AddTodo = ({}: AddTodoProps) => {
    const pathname = usePathname()
    const router = useRouter();
  const closeRef = useRef<ElementRef<"button">>(null);
    const { execute, fieldErrors } = useAction(createTodo, {
        onSuccess: (data) => {
          toast.success("Board created!");
          closeRef.current?.click();
        
        },
        onError: (error) => {
          toast.error(error);
    
        }
      });
    
      const onSubmit = (formData: FormData) => {
        const title = formData.get("title") as string;
        
    
        execute({ title });
      }
    return (
        <>
        <form action={onSubmit}>
        <div className="flex ">
        <Input className="w-30 mr-10" name="title"/>
        <FormSubmit>
            Add this
        </FormSubmit>
        
        </div>
        </form>

           
        </>
    );
};

export default AddTodo;