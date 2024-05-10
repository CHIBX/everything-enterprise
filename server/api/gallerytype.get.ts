export default defineEventHandler(async (event) => {
   let folders = await getTypes(event);
    let types = folders.map(({name})=>name);
    // console.log('gallerytypes', types);
    return {types};
}) 