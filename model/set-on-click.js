export function setOnClick () {
  /* global $ */
  $(() => {
    $('.onClick').on('click', function () {
      P[this.id.substring(2)] = onClick($(this).data('onclick'), this.id);
      calculate();
    });
  });
}
