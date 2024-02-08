export const debounce = (fn, d) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, d);
  };
};

export const giveKeysOfArrayOfObject = (data) => {
  return Object.keys(data);
};

export const checkLabelExists = (label, config) => {
  for (let item of config) {
    if (item.label === label) return true;
  }

  return false;
};
