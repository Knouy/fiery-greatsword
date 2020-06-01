export function checkRadio (array, property) {
  for (const PROPERTY in array) {
    if (Object.prototype.hasOwnProperty.call(array, PROPERTY) && array[PROPERTY
    ] !== property) {
      document.getElementById(array[PROPERTY]).style.borderColor = 'transparent'
      ;
      P[array[PROPERTY].substring(2)] = 0;
    }
  }
}
