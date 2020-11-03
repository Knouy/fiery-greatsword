/* eslint-disable no-undef */
export const checkRadio = (array, property) => {
  for (const PROP in array) {
    if (Object.prototype.hasOwnProperty.call(array, PROP) && array[PROP] !==
      property) {
      document.getElementById(array[PROP]).style.borderColor = 'transparent';
      // noinspection JSUnresolvedVariable
      P[array[PROP].substring(2)] = 0;
    }
  }
};
