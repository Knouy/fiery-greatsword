export function setOnClick () {
  /* global $ */
  $(() => {
    $('.onClick').on('click', function () {
      /* global P onClick */
      P[this.id.substring(2)] = onClick($(this).data('onclick'), this.id);
      /* global calculate */
      calculate();
    });
  });
}
