export const setTraitTooltipBox = _ => {
  /* global $ */
  $('.traitBox').on('mouseenter', function () {
    $('#tooltipBox').load('view/critOpti/tooltipBox/' + $(this).data('box') +
      '.html');
  });
};
