const setInitialSize = () => {
  if (window.innerWidth > 1152) {
    return 12;
  } else if (window.innerWidth > 708) {
    return 8;
  } else {
    return 5;
  }
};

const setIncrementSize = () => {
  if (window.innerWidth > 1152) {
    return 3;
  } else if (window.innerWidth > 708) {
    return 2;
  } else {
    return 1;
  }
};

export { setInitialSize, setIncrementSize };
