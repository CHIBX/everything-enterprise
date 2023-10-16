export default (el:Element[] | Element, callback: IntersectionObserverCallback)=>{
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