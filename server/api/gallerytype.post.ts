export default defineEventHandler(async (event) => {
   let folders = await getTypes(event);
    let { type } = await readBody<{type: string}>(event);
    type = type.trim().toLowerCase();
    if(!type) { throw createError({statusCode: 420, statusText: 'No type specified!'});}
    if(type=='all') { throw createError({statusCode: 421, statusText: 'Invalid type! \'All\' is not allowed'});}
    let existingTypes = folders.filter(({name})=>(name.toLowerCase() === type.toLowerCase()));
    if(existingTypes.length) {
       throw createError({
         statusCode: 417,
         statusText: 'Already exists!',
      });
    }
await cloudinary.api.create_folder(join(type), {}).catch(()=>{
       throw createError({
        statusCode: 500,
        statusText: 'Error creating category!'
      })  
    });
    invalidators.shouldDoGetTypes=true;
    setResponseStatus(event, 200, 'Category Created Successfully');
    return {}
})