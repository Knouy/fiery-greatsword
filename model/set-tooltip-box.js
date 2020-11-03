export const setTooltipBox = _ => {
  /* global $ */
  $('.box').on('mouseenter', function () {
    $.get('view/critOpti/tooltipBox/' + $(this).data('box') + '.html',
      element => $('#tooltipBox').html(element));
  });
};
