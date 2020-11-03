/* eslint-disable no-undef */
export const setOnClick = _ => {
  /* global $ */
  $(() => {
    $('.onClick').on('click', function () {
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P[this.id.substring(2)] = onClick($(this).data('onclick'), this.id);
      // noinspection JSUnresolvedFunction
      calculate();
    });
  });
};
