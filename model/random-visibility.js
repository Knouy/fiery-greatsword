export function randomVisibility (classId, className, max, min) {
  for (let i = 0; i <= classId; i++) {
    /* global $ */
    const CLASS = $('.' + className + i);
    CLASS.css('visibility', 'hidden');
    setTimeout(() => CLASS.css('visibility', 'visible').hide().fadeIn(),
      Math.floor(Math.random() * max) + min);
  }
}
