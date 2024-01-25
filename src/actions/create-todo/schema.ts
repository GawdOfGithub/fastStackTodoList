import { z } from "zod";
export const CreateTodo = z.object({
  title: z.string({
    required_error: "Todo is required",
    invalid_type_error: "Todo is required",
  }).min(3, {
    message: "Todo is too short."
  }),
 
});
