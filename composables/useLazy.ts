export default function<T>(key:Ref<T>, val: T, delay: number = 1000){
    setTimeout(()=>{key.value = val}, delay);
}