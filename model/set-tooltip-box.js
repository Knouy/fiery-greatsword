export const setTooltipBox = _ => {
  /* global $ */
  $('.box').on('mouseenter', function () {
    $('#tooltipBox').load('view/critOpti/tooltipBox/' + $(this).data('box') +
      '.html');
  });
};
