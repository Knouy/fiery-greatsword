export function setTraitTooltipBox () {
  /* global $ */
  $('.traitBox').on('mouseenter', function () {
    $('#tooltipBox').load('view/critOptimizer/tooltipBox/' + $(this)
      .data('box') + '.html');
  });
}
