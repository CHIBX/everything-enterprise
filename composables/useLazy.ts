 function  useLazy<T>(val: T, delay: number = 0){
    let key = ref<string|T>();
    setTimeout(()=>{key.value = val}, delay);
    return key;
}

function useObserver(el:(Element|null)[] | Element, callback: IntersectionObserverCallback){
    const targets = Array.isArray(el) ? el : [el];
    const observer = new IntersectionObserver(callback);
    targets.forEach(target => {
        if(!target) return;
        observer.observe(target);
    })
    return {
        add: (el:Element)=>observer.observe(el),
        remove: (el:Element)=>observer.unobserve(el),
        stop: ()=>observer.disconnect(),
    };
}

function numberCounter(ref: Ref<number>, { start=0, end=50, duration=1000 }: {start:number, end:number, duration:number}){
        let _duration = Math.floor(duration/(end-start));
        let interval = setInterval(()=>{
            if(start>=end){
               clearInterval(interval);
               return; 
            }
            ref.value=(start+=1);
        }, _duration);
}
export { useObserver, useLazy, numberCounter }