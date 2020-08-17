export function setTraitTooltipBox () {
  /* global $ */
  $('.traitBox').on('mouseenter', function () {
    $('#tooltipBox').load('view/precisionCalculator/tooltipBox/' + $(this)
      .data('box') + '.html');
  });
}
