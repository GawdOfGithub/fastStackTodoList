"use server"
import { Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";
interface getTodosProps {
}

const getTodos = async() => {
    try
    {
    
    const todos = await db.todo.findMany()
    return todos
    revalidatePath("/todos")
    }
    catch(error)
    {
        console.log(error)
    }
};

export default getTodos;