"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/create-safe-action";
import { UpdateTodo } from "./schema";
import { InputType, ReturnType } from "./types";


const handler = async (data: InputType): Promise<ReturnType> => {




  const { title, id } = data;
  let todo;

  try {
    todo = await db.todo.update({
      where: {
        id,
        
      },
      data: {
        title,
      },
    });

   
  } catch (error) {
    return {
      error: "Failed to update."
    }
  }

  return { data: todo };
};

export const updateTodo = createSafeAction(UpdateTodo, handler);
