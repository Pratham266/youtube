// export const debounce =(fn,d)=>{
//     let timer;
//     return (...args) => {
//         clearTimeout(timer);
//         timer = setTimeout(()=>{
//             fn.apply(null,args)
//         },d)
//     };
// }

export const debounce = (fn, d) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this,args);
      }, d);
    };
};

// export const debounceGetData = debounce(,1000);
