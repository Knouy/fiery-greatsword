/* terser controller/*.js -o dist/controller.min.js -c -m */
/* terser model/*.js -o dist/model.min.js -c -m */

import FadedText from '../node_modules/faded-text';
import { countdown, menu } from '../dist/model.min.js';

/* index.html */

VANTA.FOG({
  el: '#fog',
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0xb341e3,
  midtoneColor: 0xa400ff,
  lowlightColor: 0x6325bb,
  baseColor: 0xfcfcfc,
  zoom: 1.80
});

/* global $ */
const PAGE = $('#page');

$(() => {
  $('.menu').on('click', function () {
    PAGE.fadeOut(400, () => PAGE.load('view/' + $(this).data('menu') + '.html',
      () => menu($(this).data('menu'))).hide().delay(1000).fadeIn());
  });
});

setInterval(() => countdown(), 1000);

/* home.html */

PAGE.load('view/home.html', () => {
  for (let i = 0; i < 18; i++) {
    new FadedText('home' + i).charFadeIn();
  }
});
