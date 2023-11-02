 function  useLazy<T>(val: T, delay: number = 0){
    let key = ref<string|T>();
    setTimeout(()=>{key.value = val}, delay);
    return key;
}

function useObserver(el:Element[] | Element, callback: IntersectionObserverCallback){
    const targets = Array.isArray(el) ? el : [el];
    const observer = new IntersectionObserver(callback);
    targets.forEach(target => {
        observer.observe(target);
    })
    return {
        add: (el:Element)=>observer.observe(el),
        remove: (el:Element)=>observer.unobserve(el),
        stop: ()=>observer.disconnect(),
    };
}

export { useObserver, useLazy }