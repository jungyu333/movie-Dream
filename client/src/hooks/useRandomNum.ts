function useRandomNum() {
  const arr: number[] = [];
  let i = 0;
  while (i < 3) {
    const n = Math.floor(Math.random() * 10) + 1;
    if (!sameNum(n - 1)) {
      arr.push(n - 1);
      i++;
    }
  }

  function sameNum(n: number) {
    for (let i = 0; i < arr.length; i++) {
      if (n === arr[i]) {
        return true;
      }
    }
    return false;
  }

  return arr;
}

export default useRandomNum;
