export function resetTooltipBox () {
  /* global $ */
  $('#tooltipBox').load(
    'view/precisionCalculator/tooltipBox/precisionCalculator.html').hide()
    .fadeIn();
}
