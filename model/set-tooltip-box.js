export function setTooltipBox () {
  /* global $ */
  $('.box').on('mouseenter', function () {
    $('#tooltipBox').load('view/critOptimizer/tooltipBox/' + $(this)
      .data('box') + '.html');
  });
}
