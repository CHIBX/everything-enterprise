interface Testimonials {
    testimonials: Array<{
        name: string;
        message: string;
        image: string;
        rating: number
    }>
} 
export default defineCachedEventHandler(async (e): Promise<Testimonials>=>{
    if(e.node.req.method!=='GET') {return {} as Testimonials}
    let a = (await useStorage('assets:server').getItem('testimonials.json')) as Testimonials;
    return a
}, {
    maxAge: 1000 * 60 * 60 * 24 * 30 * 12,
});