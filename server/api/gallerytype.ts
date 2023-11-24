import { allowedTypes } from "../utils/utils";
export default defineEventHandler(async (event) => {
   if(event.node.req.method == "POST") {
       let { type } = await readBody<{type: string}>(event)
       if(allowedTypes.has(type)) {
         throw createError({
            statusCode: 417,
            statusMessage: 'Already exists!',
         })
       }
       allowedTypes.add(type);
    }
    return {types: Array.from(allowedTypes.values())}
})