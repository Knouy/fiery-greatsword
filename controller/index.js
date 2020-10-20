/* terser controller/*.js -o dist/controller.min.js -c -m */
/* terser model/*.js -o dist/model.min.js -c -m */

import FadedText from '../dist/faded-text.min.js';
import { countdown, menu } from '../dist/model.min.js';

/* global $ */
const PAGE = $('#page');

$(_ => $('.menu').on('click', function () {
  PAGE.fadeOut(400, () => PAGE.load('view/' + $(this).data('menu') + '.html',
    _ => menu($(this).data('menu'))).hide().delay(1000).fadeIn());
}));
setInterval(_ => countdown(), 1000);

/* index.html */

document.getElementById('textureCrystalS').setAttribute('src',
  'img/output/index/' + window.screen.width + '-texture_crystal_s.webp');

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

document.getElementById('bottomGraphics').setAttribute('src',
  'img/output/index/' + window.screen.width + '-Bottom_Graphics.webp');

/* home.html */

PAGE.load('view/home.html', _ => new FadedText('title').charFadeIn());
