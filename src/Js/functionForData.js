export const debounce = (fn, d) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this,args);
      }, d);
    };
};

