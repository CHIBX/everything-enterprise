interface Testimonials {
    testimonials: Array<{
        name: string;
        message: string;
        image: string;
        rating: number
    }>
} 
export default defineEventHandler(async (e): Promise<Testimonials>=>{
    if(e.node.req.method!=='GET') {return {} as Testimonials}
    console.log(process.env)
    let a = (await useStorage('assets:server').getItem('testimonials.json')) as Testimonials;
    return a
});