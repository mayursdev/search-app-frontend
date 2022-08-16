export const debounce = (t, cb) => {
  let timer = null;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, t);
  };
};
