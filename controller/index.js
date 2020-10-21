/* terser controller/*.js -o dist/controller.min.js -c -m */
/* terser model/*.js -o dist/model.min.js -c -m */

import FadedText from '../dist/faded-text.min.js';
import { countdown, menu } from '../dist/model.min.js';

/* index.html */

if ([640, 800, 1024, 1280, 1360, 1366, 1440, 1536, 1600, 1680, 1920, 2048, 2560,
  3440, 3840].includes(window.screen.width)) {
  document.getElementById('textureCrystalS').setAttribute('src',
    'img/output/index/' + window.screen.width + '-texture_crystal_s.webp');
  document.getElementById('bottomGraphics').setAttribute('src',
    'img/output/index/' + window.screen.width + '-Bottom_Graphics.webp');
}
// noinspection JSUnresolvedFunction
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
setInterval(_ => countdown(), 1000);
/* global $ */
const PAGE = $('#page');

$('.menu').on('click', function () {
  PAGE.fadeOut(400, _ => $.get('view/' + $(this).data('menu') + '.html',
    element => {
      PAGE.html(element);
      menu($(this).data('menu'));
    })).hide().delay().fadeIn();
});

/* home.html */

$.get('view/home.html', element => {
  PAGE.html(element);
  new FadedText('title').charFadeIn();
  document.getElementById('title').style.marginTop = (window.screen.height -
    84 - window.screen.width * 896 / 3840) * 0.33 + 'px';
});
