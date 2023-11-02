import { readFile } from 'fs/promises';
interface Testimonials {
    testimonials: Array<{
        name: string;
        message: string;
        image: string;
        rating: number
    }>
} 
export default defineEventHandler(async (e): Promise<Testimonials>=>{
    let val = await readFile(process.cwd() + '/public/testimonials.json');
    let  ans = JSON.parse(val.toString()) as Testimonials;
    return ans;
});