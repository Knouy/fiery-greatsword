export const equipment = (id, int) => {
  let precision = int[0];
  for (let i = 0; i < int.length; i++) {
    if (eval(id) === int[i] && i !== int.length - 1) {
      precision = int[i + 1];
    }
  }
  document.getElementById(id + '_PRECISION').innerText = precision;
  return precision;
};
