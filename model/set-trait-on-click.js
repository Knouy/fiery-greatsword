export const setTraitOnClick = _ => {
  /* global $ */
  $(_ => {
    $('.traitOnClick').on('click', function () {
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P[this.id.substring(2)] = onClick($(this).data('onclick'), this.id);
      // noinspection JSUnresolvedFunction
      calculate();
    });
  });
};
