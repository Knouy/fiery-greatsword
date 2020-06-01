export function setTooltipBox () {
  /* global $ */
  $('.box').on('mouseenter', function () {
    $('#tooltipBox').load('view/precisionCalculator/tooltipBox/' + $(this)
      .data('box') + '.html').hide().fadeIn();
  }).on('mouseleave', () => resetTooltipBox());
}
