export default function<T>(key:Ref<T>, val: T, delay: number = 0){
    setTimeout(()=>{key.value = val}, delay);
}