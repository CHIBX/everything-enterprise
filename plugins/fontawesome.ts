import { config, library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// library.add(fas);

config.autoAddCss = false;

export default defineNuxtPlugin(()=>{
    return {
        provide: {
            library
        },
    }
})